const freeItems = [
  'Full athlete profile and bio',
  'Unlimited highlight uploads',
  'Coach verification on your film',
  'Appear in recruiter searches',
  'School directory with activity badges',
  'AI recruiting guide — a chatbot with deep recruiting knowledge for all our sports, from eligibility rules to emailing coaches',
]

const plusItems = [
  'University Activity Tracker — see which college programs are viewing your profile',
  'AI College List Builder — personalized school recommendations matching your stats, budget, and interests',
]

const coachItems = [
  'Verified program page with school-email verification',
  'Search and discover recruitable athletes',
  'Verify athlete film',
  'Automated Target List — enter exact roster needs (e.g., "left-handed fencer, 2027 grad, 3.5+ GPA") and get a live dashboard of matching athletes',
  'Advanced trait and skill filtering — sport-specific metrics like 2k erg times for rowing or position skills for niche sports',
  'Roster depth analytics and watchlist alerts — instant notifications when a saved athlete posts new verified stats, better film, or an improved GPA',
]

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-semibold text-forest">Plans &amp; subscriptions</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-moss">
        Everything an athlete needs to be recruited is free, forever — and
        coaches pay nothing. One optional plan adds smarter tools for athletes.
        Visibility is based on verified fit, profile quality and program
        needs&mdash;not subscription level.
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
          <p className="mt-1 text-sm font-medium text-moss">For athletes who want smarter tools</p>
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
          <p className="mt-6 rounded-lg bg-sage px-4 py-2 text-xs text-moss">
            Plus tools help you research schools — they never change how
            coaches see you.
          </p>
        </div>

        <div className="rounded-xl border-2 border-ochre bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">For coaches</h2>
          <p className="mt-1 text-sm font-medium text-moss">Every recruiting tool included</p>
          <p className="mt-3 font-display text-4xl font-semibold text-forest-deep">$0</p>
          <ul className="mt-6 space-y-3 text-moss">
            {coachItems.map((i) => (
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
