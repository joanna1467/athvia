const ruleDates = [
  {
    when: 'June 15 (after sophomore year)',
    title: 'NCAA D2 contact period opens',
    body: 'D2 coaches can begin calling, texting, and emailing you directly. Have your profile and film ready before this date.',
    tag: 'NCAA rule',
  },
  {
    when: 'Anytime',
    title: 'NCAA D3 — no contact restrictions',
    body: 'D3 coaches can communicate with you at any point, and you can always reach out first. The athletes who email early win.',
    tag: 'NCAA rule',
  },
  {
    when: 'Anytime',
    title: 'NAIA — open recruiting',
    body: 'NAIA has almost no contact restrictions. Coaches can recruit you at any age, and campus visits can happen whenever.',
    tag: 'NAIA rule',
  },
  {
    when: 'Summer before junior year',
    title: 'Register with eligibility centers',
    body: 'NCAA Eligibility Center (eligibilitycenter.org) for D2 — free profile page for D3. NAIA has its own separate center at play.mynaia.org.',
    tag: 'Deadline',
  },
]

const showcases = [
  {
    when: 'January · Orlando, FL',
    title: 'UDA College Nationals',
    body: 'The biggest stage in college dance — where college programs show what their teams can do. Great for scouting which programs fit your style.',
    sports: 'Dance',
  },
  {
    when: 'April · Daytona Beach, FL',
    title: 'NDA College Nationals',
    body: 'National championships for college dance and cheer programs, including many NAIA and D2 teams actively recruiting.',
    sports: 'Dance · Cheer',
  },
  {
    when: 'October · Boston, MA',
    title: 'Head of the Charles Regatta',
    body: "The world's largest rowing regatta. College coaches from every division attend — high school rowers race in youth events in front of all of them.",
    sports: 'Rowing',
  },
  {
    when: 'June–July · nationwide',
    title: 'College ID camps',
    body: 'Most D2, D3, and NAIA programs run summer ID camps on campus — the single best way to get seen by a specific school you care about. Check each athletic site.',
    sports: 'All sports',
  },
  {
    when: 'Year-round · regional',
    title: 'USA Fencing NACs & regionals',
    body: 'National and regional tournaments where college fencing coaches scout — your rating and results here are your recruiting resume.',
    sports: 'Fencing',
  },
  {
    when: 'Spring · state meets',
    title: 'State championships (all sports)',
    body: 'College coaches at every level track state-meet results. Verified marks from these meets carry the most weight on your profile.',
    sports: 'All sports',
  },
]

const athviaEvents = [
  {
    when: 'Coming soon · online',
    title: 'AthVia recruiting Q&A — live session',
    body: 'Bring any recruiting question and get straight answers from our team. Free for every athlete and parent.',
  },
  {
    when: 'Coming soon · online',
    title: 'How to email a coach (workshop)',
    body: 'Write your first coach email live with us — templates included. Leave with a sent email, not just notes.',
  },
]

const tagCls: Record<string, string> = {
  'NCAA rule': 'bg-forest text-cream',
  'NAIA rule': 'bg-ochre text-forest-deep',
  Deadline: 'bg-leaf text-forest-deep',
}

export default function Events() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">Events</h1>
      <p className="mt-3 max-w-xl text-moss">
        The dates that actually matter in NAIA, D2, and D3 recruiting — rules,
        showcases, and AthVia sessions.
      </p>

      {/* rule dates */}
      <h2 className="mt-12 text-2xl font-semibold text-forest">Key recruiting dates</h2>
      <p className="mt-1 text-sm text-moss">
        These come from NCAA and NAIA rules — they apply to every athlete.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {ruleDates.map((e) => (
          <div key={e.title} className="rounded-xl border border-line bg-cream p-5">
            <div className="flex items-center justify-between gap-2">
              <p className="font-display text-sm font-semibold text-moss">{e.when}</p>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${tagCls[e.tag]}`}>
                {e.tag}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-forest">{e.title}</h3>
            <p className="mt-1.5 text-sm text-moss">{e.body}</p>
          </div>
        ))}
      </div>

      {/* showcases */}
      <h2 className="mt-14 text-2xl font-semibold text-forest">
        Showcases &amp; championships coaches attend
      </h2>
      <p className="mt-1 text-sm text-moss">
        Annual events where college programs actually scout. Always confirm this
        year's dates with the organizers.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((e) => (
          <div key={e.title} className="rounded-xl border border-line bg-cream p-5">
            <p className="font-display text-sm font-semibold text-moss">{e.when}</p>
            <h3 className="mt-2 text-lg font-semibold text-forest">{e.title}</h3>
            <p className="mt-1.5 text-sm text-moss">{e.body}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ochre">{e.sports}</p>
          </div>
        ))}
      </div>

      {/* athvia events */}
      <h2 className="mt-14 text-2xl font-semibold text-forest">AthVia events</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {athviaEvents.map((e) => (
          <div key={e.title} className="rounded-xl border-2 border-forest bg-cream p-5">
            <p className="font-display text-sm font-semibold text-moss">{e.when}</p>
            <h3 className="mt-2 text-lg font-semibold text-forest">{e.title}</h3>
            <p className="mt-1.5 text-sm text-moss">{e.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
