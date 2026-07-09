const situations = [
  {
    title: 'A coach stopped responding',
    body: 'Silence is common and rarely about you. What it usually means, and how to follow up once without spiraling.',
  },
  {
    title: 'I was decommitted',
    body: 'It happens more than anyone admits. Your options, your timeline, and athletes who landed well after it.',
  },
  {
    title: "I'm burned out",
    body: 'When the sport you love starts feeling like a job you hate — resources for recalibrating without quitting on yourself.',
  },
  {
    title: "I'm injured during recruiting",
    body: 'How to communicate an injury to coaches honestly, and why it is not the end of your recruitment.',
  },
]

export default function Resources() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">Resources</h1>
      <p className="mt-3 max-w-xl text-moss">
        Recruiting is stressful. These resources meet you where you are — no
        account required, nothing tracked.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {situations.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-cream p-6">
            <h3 className="text-lg font-semibold text-forest-deep">{s.title}</h3>
            <p className="mt-2 text-moss">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-line bg-leaf/40 p-6">
        <h2 className="text-xl font-semibold text-forest">Talk to someone</h2>
        <p className="mt-2 max-w-2xl text-moss">
          AthVia is not a substitute for professional care. If you are
          struggling, call or text <span className="font-semibold text-forest-deep">988</span> (Suicide
          &amp; Crisis Lifeline, 24/7). For ongoing support, organizations like
          The Hidden Opponent and Athletes for Hope connect student athletes
          with people who understand the pressure.
        </p>
      </div>
    </section>
  )
}
