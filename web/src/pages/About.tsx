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
  {
    name: 'Joanna Xu',
    role: 'Chief Technology Officer',
    bio: "Hi! I'm Joanna Xu, the CTO of AthVia. I used to play basketball and was a competitive dancer, and now I do track and field! A fun fact about me is that my thumbs are double-jointed!",
    photo: 'team/joanna.png',
    initials: 'JX',
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
        <p className="italic">
          Our full story — why we created AthVia — is coming soon.
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
          href="https://www.instagram.com/p/DajO9sdD2Wq/"
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
