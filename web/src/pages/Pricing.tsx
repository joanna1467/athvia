const freeItems = [
  'Full athlete profile and bio',
  'Unlimited highlight uploads',
  'Coach verification on your film',
  'Appear in recruiter searches',
  'School directory with activity badges',
  'Events and resources',
]

const proItems = [
  'Recruiting fit score with full breakdown',
  'Personalized college list (athletic + academic fit)',
  'AI profile review and suggestions',
  'What-if projections as your marks improve',
]

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-semibold text-forest">Pricing</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-moss">
        Everything you need to be recruited is free, forever. Pro adds
        AI-powered guidance on top.
      </p>

      <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">Free</h2>
          <p className="mt-1 font-display text-4xl font-semibold text-forest-deep">$0</p>
          <ul className="mt-6 space-y-3 text-moss">
            {freeItems.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-forest">✓</span> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-2 border-forest bg-cream p-8">
          <h2 className="text-2xl font-semibold text-forest">Pro</h2>
          <p className="mt-1 font-display text-4xl font-semibold text-forest-deep">
            $12<span className="text-lg text-moss">/mo</span>
          </p>
          <p className="text-sm text-moss">or $79/year</p>
          <ul className="mt-6 space-y-3 text-moss">
            {proItems.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-ochre">✓</span> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-moss">
        Cost should never keep an athlete from good guidance. Families with
        financial need get Pro free — no documentation, no questions asked.
      </p>
    </section>
  )
}
