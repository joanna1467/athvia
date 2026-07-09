-- Starter school list: real NAIA / D2 / D3 programs with their email domains,
-- so coach auto-verification works in demos. Extend freely.
insert into schools (name, division, state, email_domain) values
  ('Williams College',            'D3',  'MA', 'williams.edu'),
  ('Kenyon College',              'D3',  'OH', 'kenyon.edu'),
  ('Tufts University',            'D3',  'MA', 'tufts.edu'),
  ('Claremont-Mudd-Scripps',      'D3',  'CA', 'cmc.edu'),
  ('Ithaca College',              'D3',  'NY', 'ithaca.edu'),
  ('Grand Valley State University','D2', 'MI', 'gvsu.edu'),
  ('Cal State San Marcos',        'D2',  'CA', 'csusm.edu'),
  ('Nova Southeastern University','D2',  'FL', 'nova.edu'),
  ('Colorado School of Mines',    'D2',  'CO', 'mines.edu'),
  ('West Chester University',     'D2',  'PA', 'wcupa.edu'),
  ('Keiser University',           'NAIA','FL', 'keiseruniversity.edu'),
  ('Indiana Wesleyan University', 'NAIA','IN', 'indwes.edu'),
  ('College of Idaho',            'NAIA','ID', 'collegeofidaho.edu'),
  ('Concordia University Irvine', 'NAIA','CA', 'cui.edu'),
  ('Marian University',           'NAIA','IN', 'marian.edu');

-- Mark a few schools recently active so the activity badge demos well
update schools set last_active_at = now() - interval '2 days'
  where name in ('Kenyon College','Grand Valley State University','College of Idaho');
update schools set last_active_at = now() - interval '3 weeks'
  where name in ('Tufts University','Keiser University');
