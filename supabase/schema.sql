-- AthVia core schema — run once in Supabase SQL Editor
-- Divisions: NAIA, D2, D3 only (no JUCO, no D1)

create type division as enum ('NAIA','D2','D3');
create type sport as enum ('badminton','baseball','basketball','beach_volleyball','boxing',
  'cheerleading','cross_country','dance','equestrian','fencing','field_hockey','football',
  'golf','gymnastics','ice_hockey','lacrosse','rowing','rugby','skiing','soccer','softball',
  'swim','table_tennis','tennis','track_and_field','volleyball','water_polo','wrestling');
create type user_role as enum ('athlete','coach');

create table profiles (
  id uuid primary key references auth.users on delete cascade,
  role user_role not null,
  full_name text not null,
  email text not null,
  created_at timestamptz default now()
);

create table schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  division division not null,
  state text,
  email_domain text not null unique,
  last_active_at timestamptz
);

create table athletes (
  profile_id uuid primary key references profiles on delete cascade,
  sport sport not null,
  grad_year int not null check (grad_year between 2026 and 2033),
  gpa numeric(3,2) check (gpa between 0 and 5),
  city text,
  state text,
  bio text,
  stats jsonb default '{}',
  target_divisions division[] default '{NAIA,D2,D3}',
  is_public boolean default true
);

create table coaches (
  profile_id uuid primary key references profiles on delete cascade,
  school_id uuid references schools,
  sport sport not null,
  title text,
  verified boolean default false
);

create table highlights (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes on delete cascade,
  youtube_url text not null,
  title text,
  status text default 'pending' check (status in ('pending','verified')),
  verified_by uuid references coaches(profile_id),
  created_at timestamptz default now()
);

create table watchlists (
  coach_id uuid references coaches(profile_id) on delete cascade,
  athlete_id uuid references athletes(profile_id) on delete cascade,
  created_at timestamptz default now(),
  primary key (coach_id, athlete_id)
);

create table feedback (
  id uuid primary key default gen_random_uuid(),
  role text,
  likelihood int check (likelihood between 1 and 5),
  priority text,
  comment text,
  created_at timestamptz default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  sport sport,
  city text,
  state text,
  starts_at timestamptz not null,
  url text,
  created_at timestamptz default now()
);

-- Coach auto-verification: verified instantly when signup email domain
-- matches a known school's athletic/edu domain
create or replace function auto_verify_coach()
returns trigger language plpgsql security definer as $$
declare
  coach_email text;
  matched_school uuid;
begin
  select email into coach_email from profiles where id = new.profile_id;
  select id into matched_school from schools
    where lower(split_part(coach_email, '@', 2)) = lower(email_domain);
  if matched_school is not null then
    new.school_id := matched_school;
    new.verified := true;
  end if;
  return new;
end $$;

create trigger coach_email_verification
  before insert on coaches
  for each row execute function auto_verify_coach();

-- School activity badge: bump last_active_at whenever a verified coach acts
create or replace function touch_school_activity()
returns trigger language plpgsql security definer as $$
begin
  update schools set last_active_at = now()
    where id = (select school_id from coaches where profile_id = auth.uid());
  return new;
end $$;

create trigger watchlist_activity
  after insert on watchlists
  for each row execute function touch_school_activity();

-- Row Level Security: the privacy pledge, enforced server-side
alter table profiles enable row level security;
alter table athletes enable row level security;
alter table coaches enable row level security;
alter table highlights enable row level security;
alter table watchlists enable row level security;
alter table schools enable row level security;
alter table events enable row level security;

create policy "own profile read/write" on profiles
  for all using (auth.uid() = id);
create policy "names of public users readable" on profiles
  for select using (true);

create policy "athletes insert own row" on athletes
  for insert with check (auth.uid() = profile_id);
create policy "athletes edit own row" on athletes
  for update using (auth.uid() = profile_id);
create policy "public athletes readable" on athletes
  for select using (is_public = true or auth.uid() = profile_id);

create policy "coaches insert own row" on coaches
  for insert with check (auth.uid() = profile_id);
create policy "coaches readable" on coaches
  for select using (true);

create policy "athletes manage own highlights" on highlights
  for insert with check (auth.uid() = athlete_id);
create policy "athletes delete own highlights" on highlights
  for delete using (auth.uid() = athlete_id);
create policy "highlights of public athletes readable" on highlights
  for select using (exists (
    select 1 from athletes a
    where a.profile_id = highlights.athlete_id
      and (a.is_public or a.profile_id = auth.uid())
  ));
create policy "verified coaches verify highlights" on highlights
  for update using (exists (
    select 1 from coaches c where c.profile_id = auth.uid() and c.verified
  ));

create policy "coaches manage own watchlist" on watchlists
  for all using (auth.uid() = coach_id);

alter table feedback enable row level security;
create policy "anyone can submit feedback" on feedback
  for insert with check (true);

create policy "schools readable by all" on schools
  for select using (true);
create policy "events readable by all" on events
  for select using (true);
