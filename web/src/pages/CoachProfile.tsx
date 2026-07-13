import { Link, useParams } from 'react-router-dom'
import { findCoach } from '../data/people'

export default function CoachProfile() {
  const { slug } = useParams()
  const c = findCoach(slug ?? '')

  if (!c) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold text-forest">Coach not found</h1>
        <Link to="/coaches" className="mt-4 inline-block text-forest underline">
          ← Back to coaches
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/coaches" className="text-sm text-moss hover:text-forest">
        ← For coaches
      </Link>

      {/* header */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-cream">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
          <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-2xl bg-leaf/50 font-display text-4xl font-semibold text-forest">
            {c.initials}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold text-forest">{c.name}</h1>
              {c.verified && (
                <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-cream">
                  Verified coach ✓
                </span>
              )}
            </div>
            <p className="mt-2 text-moss">{c.title}</p>
            <p className="mt-1 text-sm text-moss">
              {c.school} · {c.division} · {c.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-ochre px-3 py-1 text-xs font-medium text-forest-deep">
                {c.active}
              </span>
              <span className="rounded-full border border-line bg-sage px-3 py-1 text-xs font-medium text-forest-deep">
                Recruiting {c.sport}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* verification explainer */}
      <p className="mt-4 rounded-lg bg-leaf/30 px-4 py-2 text-xs text-moss">
        ✓ Verified via a {c.school} school email — only verified coaches can
        confirm athlete highlights.
      </p>

      {/* about */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-6">
        <h2 className="text-lg font-semibold text-forest">About the program</h2>
        <p className="mt-3 text-moss">{c.bio}</p>
      </div>

      {/* recruiting needs */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-6">
        <h2 className="text-lg font-semibold text-forest">What we're recruiting</h2>
        <ul className="mt-3 space-y-2">
          {c.recruiting.map((r) => (
            <li key={r} className="flex gap-2 text-moss">
              <span className="text-ochre">✓</span> {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
