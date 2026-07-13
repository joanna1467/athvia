import { Link } from 'react-router-dom'

const steps = [
  {
    n: '1',
    title: 'Sign up with your school email',
    body: 'Coaches with an athletics or .edu email matching a school in our directory are verified instantly — no waiting on manual review.',
  },
  {
    n: '2',
    title: 'Search and watchlist athletes',
    body: 'Filter by sport, grad year, division fit, location, and academics. Save athletes to a watchlist and get notified when they post new film or update stats.',
  },
  {
    n: '3',
    title: 'Verify highlights, build trust',
    body: "Verified coaches confirm student film is real. Your name on a verification means something — and keeps AI-generated fakes off the platform.",
  },
]

const perks = [
  {
    title: 'Reach athletes D1 platforms miss',
    body: 'AthVia is built for D3, D2, and NAIA recruiting — the athletes here are looking for programs like yours, not just the biggest name.',
  },
  {
    title: 'Stay visible with an activity badge',
    body: 'Programs that log in and engage regularly are marked "Active" and surface higher in athlete searches. Free to earn, no cost to maintain.',
  },
  {
    title: 'Free to start, Pro when you need it',
    body: 'Searching, verifying film, and posting your program page are free. Recruiter Pro adds automated target lists, sport-specific filters, and watchlist alerts for $24/mo.',
  },
]

export default function Coaches() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">For coaches</h1>
      <p className="mt-3 max-w-2xl text-moss">
        Find and verify recruitable athletes headed to D3, D2, and NAIA
        programs — free, transparent, and built around the sports other
        platforms overlook.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {perks.map((p) => (
          <div key={p.title} className="rounded-xl border border-line bg-cream p-6">
            <h3 className="text-lg font-semibold text-forest-deep">{p.title}</h3>
            <p className="mt-2 text-moss">{p.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold text-forest">How it works</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-cream">
              {s.n}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-forest-deep">{s.title}</h3>
            <p className="mt-2 text-moss">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-line bg-cream p-6 text-center">
        <h2 className="text-xl font-semibold text-forest">See an example coach profile</h2>
        <p className="mx-auto mt-2 max-w-xl text-moss">
          Here's what a verified program page looks like to athletes browsing
          AthVia.
        </p>
        <Link
          to="/coach/rebecca-lin"
          className="mt-4 inline-block rounded-lg bg-forest px-6 py-2.5 font-medium text-cream hover:bg-forest-deep"
        >
          View sample coach profile
        </Link>
      </div>
    </section>
  )
}
