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
    bio: "Hello! I am Alina Fang, the CEO of AthVia. I was a former cheerleader, volleyball, basketball, and lacrosse player. Now, actively doing dance — and a fun fact would be that I am really into fashion lately!",
    photo: 'team/alina.jpg',
    initials: 'AF',
  },
  {
    name: 'Joanna Xu',
    role: 'Co-founder',
    bio: 'Bio coming soon.',
    photo: 'team/joanna.jpg',
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
