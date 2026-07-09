const freeItems = [
  'Full athlete profile and bio',
  'Unlimited highlight uploads',
  'Coach verification on your film',
  'Appear in recruiter searches',
  'School directory with activity badges',
  'AI recruiting guide — a chatbot with deep recruiting knowledge for all 19 sports, from eligibility rules to emailing coaches',
]

const plusItems = [
  'University Activity Tracker — see which college programs are viewing your profile',
  'AI College List Builder — personalized school recommendations matching your stats, budget, and interests',
]

const recruiterItems = [
  'Automated Target List — enter exact roster needs (e.g., "left-handed fencer, 2027 grad, 3.5+ GPA") and get a live dashboard of matching athletes',
  'Advanced trait and skill filtering — sport-specific metrics like 2k erg times for rowing or position skills for niche sports',
  'Roster depth analytics and watchlist alerts — instant notifications when a saved athlete posts new verified stats, better film, or an improved GPA',
]

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-semibold text-forest">Pricing</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-moss">
        Everything an athlete needs to be recruited is free, forever. Paid
        plans add smarter tools on top — one for athletes, one for coaches.
      </p>

      <div className="mx-auto mt-12 grid gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-line bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">Free</h2>
          <p className="mt-1 text-sm font-medium text-moss">For every athlete</p>
          <p className="mt-3 font-display text-4xl font-semibold text-forest-deep">$0</p>
          <ul className="mt-6 space-y-3 text-moss">
            {freeItems.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-forest">✓</span> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-2 border-forest bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">AthVia Plus</h2>
          <p className="mt-1 text-sm font-medium text-moss">For athletes who want an edge</p>
          <p className="mt-3 font-display text-4xl font-semibold text-forest-deep">
            $9.99<span className="text-lg text-moss">/mo</span>
          </p>
          <p className="mt-2 text-sm text-moss">Everything in Free, plus:</p>
          <ul className="mt-4 space-y-3 text-moss">
            {plusItems.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-ochre">✓</span> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-2 border-ochre bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">AthVia Recruiter Pro</h2>
          <p className="mt-1 text-sm font-medium text-moss">For college coaches</p>
          <p className="mt-3 font-display text-4xl font-semibold text-forest-deep">
            $24<span className="text-lg text-moss">/mo</span>
          </p>
          <p className="mt-2 text-sm text-moss">Everything free coaches get, plus:</p>
          <ul className="mt-4 space-y-3 text-moss">
            {recruiterItems.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-ochre">✓</span> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
