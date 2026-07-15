import { useState } from 'react'

type Member = {
  name: string
  role: string
  bio: string
  photo: string
  initials: string
}

const team: Member[] = [
  {
    name: 'Alina Fang',
    role: 'Chief Executive Officer',
    bio: "Hello! I'm Alina Fang, the CEO of AthVia. I'm a former cheerleader and volleyball, basketball, and lacrosse player. Now I'm actively dancing — and a fun fact is that I've been really into fashion lately!",
    photo: 'team/alina.jpg',
    initials: 'AF',
  },
  {
    name: 'Anika Thosar',
    role: 'Chief Financial Officer',
    bio: "Hi! I'm Anika Thosar, the CFO of AthVia. I'm a former badminton player and now a swimmer. A fun fact about me is that I was born on Mother's Day!",
    photo: 'team/anika.jpg',
    initials: 'AT',
  },
  {
    name: 'Joanna Xu',
    role: 'Chief Technology Officer',
    bio: "Hi! I'm Joanna Xu, the CTO of AthVia. I used to play basketball and was a competitive dancer, and now I do track and field! A fun fact about me is that my thumbs are double-jointed!",
    photo: 'team/joanna.png',
    initials: 'JX',
  },
  {
    name: 'Sahaana Reddy',
    role: 'Chief Operating Officer',
    bio: "Hi! I'm Sahaana Reddy, the COO of AthVia. I'm a former basketball player and currently play volleyball. A fun fact about me is that I have two dogs!",
    photo: 'team/sahaana.jpg',
    initials: 'SR',
  },
  {
    name: 'Kayla Choe',
    role: 'Chief Marketing Officer',
    bio: "Hey! I'm Kayla Choe, the CMO of AthVia. I'm a former soccer player and now play basketball and volleyball. A little fun fact about me is that I have a sister who is ten years younger than me!",
    photo: 'team/kayla.jpg',
    initials: 'KC',
  },
]

function TeamCard({ m }: { m: Member }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-cream">
      {imgOk ? (
        <img
          src={`${import.meta.env.BASE_URL}${m.photo}`}
          alt={m.name}
          className="aspect-square w-full object-cover"
          onError={() => setImgOk(false)}
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-leaf/50">
          <span className="font-display text-5xl font-semibold text-forest">
            {m.initials}
          </span>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-forest-deep">{m.name}</h3>
        <p className="text-sm font-medium text-forest">{m.role}</p>
        <p className="mt-2 text-sm text-moss">{m.bio}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">About AthVia</h1>

      <div className="mt-6 max-w-2xl space-y-4 text-moss">
        <p>
          AthVia is built by student athletes, for student athletes — a
          recruiting platform for the 90% of high school competitors headed to
          D3, D2, and NAIA programs, not just the D1 headlines.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-forest">Our story</h2>
        <p>
          We founders are all student athletes who discovered a real gap in
          recruiting for NAIA, Division 2, and Division 3. The platforms we
          tried were built around the D1 dream — hundreds or thousands of
          dollars for "exposure," rankings that reward whoever pays the most,
          and little support for sports like dance, rowing, or fencing.
        </p>
        <p>
          Yet most college athletes don't compete at D1 — they compete at NAIA,
          D2, and D3 schools, where recruiting is just as real but far less
          visible. Nobody was building for them. So we did.
        </p>
        <p>
          AthVia is the platform we wished existed: honest fit scores instead of
          sales pitches, coach-verified film instead of hype, and transparency
          about which programs are actually recruiting — at a price a high
          school student can afford. We're the 90% too, and this is for us.
        </p>
      </div>

      <h2 className="mt-16 text-2xl font-semibold text-forest">Meet the team</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <TeamCard key={m.name} m={m} />
        ))}
      </div>

      <p className="mt-10 text-sm text-moss">
        Follow along on{' '}
        <a
          href="https://www.instagram.com/athviaofficial/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-forest underline"
        >
          Instagram
        </a>{' '}
        for team introductions and launch updates.
      </p>
    </section>
  )
}
