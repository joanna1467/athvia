import { Link, useParams } from 'react-router-dom'
import { findAthlete } from '../data/people'

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`

const toneStyles: Record<string, string> = {
  strong: 'bg-forest text-cream',
  mid: 'bg-leaf text-forest-deep',
  low: 'bg-cream text-moss border border-line',
}

export default function Profile() {
  const { slug } = useParams()
  const a = findAthlete(slug ?? '')

  if (!a) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold text-forest">Athlete not found</h1>
        <Link to="/explore" className="mt-4 inline-block text-forest underline">
          ← Back to athletes
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/explore" className="text-sm text-moss hover:text-forest">
        ← Back to athletes
      </Link>

      {/* header */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-cream">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
          {a.photo ? (
            <img
              src={img(a.photo)}
              alt={a.name}
              className="h-64 w-48 flex-shrink-0 rounded-2xl object-cover object-[center_30%]"
            />
          ) : (
            <div className="flex h-64 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-leaf/50 font-display text-5xl font-semibold text-forest">
              {a.initials}
            </div>
          )}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold text-forest">{a.name}</h1>
              <span className="rounded-full bg-ochre px-3 py-1 text-xs font-medium text-forest-deep">
                {a.status}
              </span>
            </div>
            <p className="mt-2 text-moss">
              {a.sport} · Class of {a.gradYear} · {a.city}, {a.state}
            </p>
            <p className="mt-1 text-sm text-moss">
              {a.height} · Hoping to compete at the {a.target[0]} level
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {a.target.map((d) => (
                <span key={d} className="rounded-full border border-line bg-sage px-3 py-1 text-xs font-medium text-forest-deep">
                  Open to {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bio */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-6">
        <h2 className="text-lg font-semibold text-forest">About</h2>
        <p className="mt-3 text-moss">{a.bio}</p>
      </div>

      {/* academics */}
      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-forest">Academics</h2>
        <div className="grid grid-cols-3 gap-4">
          {a.academics.map((ac) => (
            <div key={ac.label} className="rounded-xl border border-line bg-cream p-4 text-center">
              <p className="font-display text-3xl font-semibold text-forest-deep">{ac.value}</p>
              <p className="mt-1 text-sm font-medium text-forest">{ac.label}</p>
              {ac.note && <p className="text-xs text-moss">{ac.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* fit score */}
      <div className="mt-6 rounded-xl border-2 border-forest bg-cream p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-forest">Recruiting fit score</h2>
          <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-cream">
            {a.fitSummary}
          </span>
        </div>
        <p className="mt-2 text-sm text-moss">{a.fitIntro}</p>

        <div className="mt-4 rounded-lg bg-sage p-4">
          <p className="text-sm font-medium text-forest-deep">Academic fit: exceptional</p>
          <p className="mt-1 text-sm text-moss">{a.academicFit}</p>
        </div>

        <div className="mt-4 space-y-3">
          {a.fitRows.map((r) => (
            <div key={r.level} className="flex flex-col gap-1 rounded-lg border border-line bg-sage p-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-3 sm:w-40">
                <span className="font-display text-lg font-semibold text-forest-deep">{r.level}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${toneStyles[r.tone]}`}>
                  {r.verdict}
                </span>
              </div>
              <p className="flex-1 text-sm text-moss">{r.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* stats */}
      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-forest">
          {a.sport} profile
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {a.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-cream p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-moss">{s.label}</p>
              <p className="mt-1 text-forest-deep">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* achievements */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-6">
        <h2 className="text-lg font-semibold text-forest">Achievements</h2>
        <ul className="mt-3 space-y-2">
          {a.achievements.map((ac) => (
            <li key={ac} className="flex gap-2 text-moss">
              <span className="text-ochre">★</span> {ac}
            </li>
          ))}
        </ul>
      </div>

      {/* highlights */}
      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-forest">Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2].map((n) => (
            <div key={n} className="overflow-hidden rounded-xl border border-line bg-cream">
              <div className="flex aspect-video items-center justify-center bg-leaf/50 text-moss">
                ▶ Highlight reel {n}
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-sm text-forest-deep">Competition clip {n}</span>
                <span className="rounded-full bg-forest px-2.5 py-1 text-xs font-medium text-cream">
                  Coach verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
