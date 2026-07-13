import { Link } from 'react-router-dom'

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`

const academics = [
  { label: 'GPA', value: '4.0', note: 'unweighted' },
  { label: 'SAT', value: '1600', note: 'perfect score' },
  { label: 'ACT', value: '36', note: 'perfect score' },
]

const stats = [
  { label: 'Styles', value: 'Jazz, contemporary, pom, hip-hop' },
  { label: 'Years training', value: '12' },
  { label: 'Studio', value: 'Golden Gate Dance Company' },
  { label: 'Team role', value: 'Varsity captain' },
]

const achievements = [
  'NDA National Championship — top 10 team finish (2025)',
  'Regional soloist finalist, contemporary (2025)',
  'Studio company member, 8 consecutive seasons',
  'Choreography award, spring showcase (2024)',
]

const fitRows = [
  {
    level: 'NAIA',
    verdict: 'Strong fit',
    tone: 'strong',
    note: 'NAIA sponsors competitive dance as an emerging varsity sport — her training level, captaincy, and national-stage experience line up with these rosters.',
  },
  {
    level: 'NCAA D3',
    verdict: 'Strong fit',
    tone: 'strong',
    note: 'Most D3 schools field competitive dance teams (NDA/UDA circuits), and her academics make even the most selective D3 programs realistic.',
  },
  {
    level: 'NCAA D2',
    verdict: 'Competitive',
    tone: 'mid',
    note: 'D2 schools also field competitive dance teams — reachable with another strong competition season and updated film.',
  },
]

const toneStyles: Record<string, string> = {
  strong: 'bg-forest text-cream',
  mid: 'bg-leaf text-forest-deep',
  low: 'bg-cream text-moss border border-line',
}

export default function Profile() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/explore" className="text-sm text-moss hover:text-forest">
        ← Back to athletes
      </Link>

      {/* header */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-cream">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
          <img
            src={img('team/alina.jpg')}
            alt="Alina Fang"
            className="h-64 w-48 flex-shrink-0 rounded-2xl object-cover object-top"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold text-forest">Alina Fang</h1>
              <span className="rounded-full bg-ochre px-3 py-1 text-xs font-medium text-forest-deep">
                Being recruited
              </span>
            </div>
            <p className="mt-2 text-moss">
              Competitive dance · Class of 2027 · San Francisco, CA
            </p>
            <p className="mt-1 text-sm text-moss">
              5'5½" · Hoping to compete at the NAIA level
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['NAIA', 'D3', 'D2'].map((d) => (
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
        <p className="mt-3 text-moss">
          I'm a competitive dancer from San Francisco training across jazz,
          contemporary, pom, and hip-hop, and I captain my varsity team. Twelve
          years in the studio have taught me discipline, performance under
          pressure, and how to lift a team — and I bring the same drive to the
          classroom. I'm looking for an NAIA program where I can keep growing as
          an artist and a student.
        </p>
      </div>

      {/* academics */}
      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-forest">Academics</h2>
        <div className="grid grid-cols-3 gap-4">
          {academics.map((a) => (
            <div key={a.label} className="rounded-xl border border-line bg-cream p-4 text-center">
              <p className="font-display text-3xl font-semibold text-forest-deep">{a.value}</p>
              <p className="mt-1 text-sm font-medium text-forest">{a.label}</p>
              <p className="text-xs text-moss">{a.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* fit score */}
      <div className="mt-6 rounded-xl border-2 border-forest bg-cream p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-forest">Recruiting fit score</h2>
          <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-cream">
            Strong NAIA fit
          </span>
        </div>
        <p className="mt-2 text-sm text-moss">
          Based on Alina's training level, competition history, academics, and
          graduation year — with the reasons, not a sales pitch. College dance is
          organized through the NDA and UDA circuits rather than as an NCAA
          championship sport, so fit reflects where her profile matches real
          teams at each level.
        </p>

        <div className="mt-4 rounded-lg bg-sage p-4">
          <p className="text-sm font-medium text-forest-deep">Academic fit: exceptional</p>
          <p className="mt-1 text-sm text-moss">
            A 4.0 GPA with a 1600 SAT and 36 ACT clears every NAIA academic
            standard with enormous room to spare — academics will be an asset,
            not a barrier, at any level she targets.
          </p>
        </div>

        <div className="mt-4 space-y-3">
          {fitRows.map((r) => (
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
        <h2 className="mb-3 text-lg font-semibold text-forest">Dance profile</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s) => (
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
          {achievements.map((a) => (
            <li key={a} className="flex gap-2 text-moss">
              <span className="text-ochre">★</span> {a}
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
                ▶ Competition reel {n}
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-sm text-forest-deep">Nationals solo {n}</span>
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
