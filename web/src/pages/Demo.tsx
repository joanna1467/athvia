import { useState } from 'react'
import { Link } from 'react-router-dom'

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`
const SUPA_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const SUPA_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/* ---------- University Activity Tracker demo data ---------- */

const activity = [
  { school: 'College of Idaho', division: 'NAIA', state: 'ID', when: 'Today', views: 3, watchlisted: true },
  { school: 'Kenyon College', division: 'D3', state: 'OH', when: '2 days ago', views: 2, watchlisted: false },
  { school: 'Concordia University Irvine', division: 'NAIA', state: 'CA', when: '4 days ago', views: 5, watchlisted: true },
  { school: 'Indiana Wesleyan University', division: 'NAIA', state: 'IN', when: '1 week ago', views: 1, watchlisted: false },
  { school: 'Tufts University', division: 'D3', state: 'MA', when: '3 weeks ago', views: 1, watchlisted: false },
]

/* ---------- schools the AI list builder recommends from ---------- */

const schools = [
  'Williams College (D3, MA)', 'Kenyon College (D3, OH)', 'Tufts University (D3, MA)',
  'Claremont-Mudd-Scripps (D3, CA)', 'Ithaca College (D3, NY)',
  'Grand Valley State University (D2, MI)', 'Cal State San Marcos (D2, CA)',
  'Nova Southeastern University (D2, FL)', 'Colorado School of Mines (D2, CO)',
  'West Chester University (D2, PA)', 'Keiser University (NAIA, FL)',
  'Indiana Wesleyan University (NAIA, IN)', 'College of Idaho (NAIA, ID)',
  'Concordia University Irvine (NAIA, CA)', 'Marian University (NAIA, IN)',
]

/* precomputed fallback so the demo never breaks, even offline */
const fallbackList = `1. Concordia University Irvine (NAIA, CA) — Target. NAIA sponsors competitive dance as a varsity sport, it's in-state for you, and the program is active on AthVia this week.
2. College of Idaho (NAIA, ID) — Target. A funded NAIA competitive cheer & dance program whose coach is actively recruiting dancers on AthVia right now.
3. Claremont-Mudd-Scripps (D3, CA) — Strong academic match. Your 4.0/1600 profile fits one of the most selective D3 consortiums in the country, close to home, with strong dance opportunities.
4. Marian University (NAIA, IN) — Target. Established NAIA program with a strong dance-team culture and scholarship stacking for high-GPA athletes.
5. Tufts University (D3, MA) — Reach for admission, strong fit for you. Elite academics your scores support, with nationally competitive club and team dance.`

export default function Demo() {
  const [budget, setBudget] = useState('30000')
  const [region, setRegion] = useState('West Coast preferred, open to anywhere')
  const [interest, setInterest] = useState('Strong academics, biology or pre-med')
  const [list, setList] = useState('')
  const [building, setBuilding] = useState(false)
  const [aiPowered, setAiPowered] = useState(true)

  async function buildList() {
    setBuilding(true)
    setList('')
    const prompt = `You are AthVia's AI College List Builder. Build a personalized college list for this athlete.

ATHLETE PROFILE:
- Alina Fang, competitive dance, Class of 2027
- San Francisco, CA · 4.0 unweighted GPA · 1600 SAT · 36 ACT
- Targeting NAIA first (sponsors competitive dance as varsity), then D3/D2
- Budget: about $${Number(budget).toLocaleString()} per year after aid
- Location preference: ${region}
- Academic interests: ${interest}

RECOMMEND ONLY FROM THESE SCHOOLS ON ATHVIA:
${schools.join('\n')}

Respond immediately with ONLY the list — no thinking out loud, no intro, no outro.
Return exactly 5 recommendations, numbered 1-5, each on one line:
N. School Name (Division, State) — Match level (Target / Strong match / Reach) — one short sentence (max 18 words) on why it fits HER specifically.`

    try {
      if (!SUPA_URL || !SUPA_KEY) throw new Error('no supabase')
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 15000)
      const res = await fetch(`${SUPA_URL}/functions/v1/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SUPA_KEY}` },
        body: JSON.stringify({ messages: [{ role: 'user', text: prompt }] }),
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      const data = await res.json()
      if (!res.ok || !data.reply || data.reply.startsWith('Sorry')) throw new Error('ai failed')
      const items = String(data.reply).split(/\n(?=\d\.)/).filter((s: string) => /^\d\./.test(s.trim()))
      if (items.length < 3) throw new Error('malformed reply')
      setList(data.reply)
      setAiPowered(true)
    } catch {
      setList(fallbackList)
      setAiPowered(false)
    }
    setBuilding(false)
  }

  const listItems = list
    .split(/\n(?=\d\.)/)
    .map((s) => s.trim())
    .filter((s) => /^\d\./.test(s))

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-forest">My dashboard</h1>
        <span className="rounded-full bg-ochre px-3 py-1 text-xs font-medium text-forest-deep">
          AthVia Plus · demo
        </span>
      </div>

      {/* profile summary */}
      <div className="mt-6 flex items-center gap-4 rounded-xl border border-line bg-cream p-5">
        <img src={img('team/alina.jpg')} alt="Alina Fang"
          className="h-20 w-20 rounded-xl object-cover object-[center_30%]" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold text-forest">Alina Fang</h2>
            <span className="rounded-full bg-forest px-2.5 py-0.5 text-xs font-medium text-cream">
              Strong NAIA fit
            </span>
          </div>
          <p className="text-sm text-moss">Competitive dance · Class of 2027 · San Francisco, CA · 4.0 GPA · 1600 SAT</p>
        </div>
        <Link to="/athlete/alina-fang" className="hidden text-sm font-medium text-forest underline sm:block">
          View public profile
        </Link>
      </div>

      {/* activity tracker */}
      <div className="mt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold text-forest">University Activity Tracker</h2>
          <p className="text-sm text-moss">12 profile views · last 30 days</p>
        </div>
        <p className="mt-1 text-sm text-moss">
          Programs that viewed your profile — so you know who's actually looking.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-line bg-cream">
          {activity.map((a, i) => (
            <div key={a.school}
              className={`flex flex-wrap items-center gap-3 px-5 py-4 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf/50 font-display text-sm font-semibold text-forest">
                {a.school.split(' ').slice(0, 2).map((w) => w[0]).join('')}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-forest-deep">{a.school}</p>
                <p className="text-sm text-moss">{a.division} · {a.state} · viewed {a.views}× </p>
              </div>
              {a.watchlisted && (
                <span className="rounded-full bg-ochre px-2.5 py-1 text-xs font-medium text-forest-deep">
                  ★ Watchlisted you
                </span>
              )}
              <span className="text-sm text-moss">{a.when}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI college list builder */}
      <div className="mt-10 rounded-xl border-2 border-forest bg-cream p-6">
        <h2 className="text-xl font-semibold text-forest">AI College List Builder</h2>
        <p className="mt-1 text-sm text-moss">
          Personalized school recommendations from programs on AthVia — matched to
          your stats, budget, and interests.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block font-display text-xs font-medium text-moss">Budget per year (after aid)</label>
            <select className="w-full rounded-lg border border-line bg-sage px-3 py-2 text-sm text-forest-deep focus:border-forest focus:outline-none"
              value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="20000">Up to $20,000</option>
              <option value="30000">Up to $30,000</option>
              <option value="45000">Up to $45,000</option>
              <option value="70000">Budget flexible</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block font-display text-xs font-medium text-moss">Location preference</label>
            <input className="w-full rounded-lg border border-line bg-sage px-3 py-2 text-sm text-forest-deep focus:border-forest focus:outline-none"
              value={region} onChange={(e) => setRegion(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block font-display text-xs font-medium text-moss">Academic interests</label>
            <input className="w-full rounded-lg border border-line bg-sage px-3 py-2 text-sm text-forest-deep focus:border-forest focus:outline-none"
              value={interest} onChange={(e) => setInterest(e.target.value)} />
          </div>
        </div>

        <button onClick={buildList} disabled={building}
          className="mt-5 rounded-lg bg-forest px-6 py-2.5 font-medium text-cream hover:bg-forest-deep disabled:opacity-50">
          {building ? 'Building your list…' : list ? 'Rebuild my list' : 'Build my list'}
        </button>

        {building && (
          <p className="mt-4 text-sm text-moss">
            Matching your profile against {schools.length} programs on AthVia…
          </p>
        )}

        {list && (
          <div className="mt-6 space-y-3">
            {(listItems.length ? listItems : [list]).map((item, i) => {
              const clean = item.replace(/^\d\.\s*/, '')
              const [head, ...rest] = clean.split('—')
              return (
                <div key={i} className="rounded-lg border border-line bg-sage p-4">
                  <p className="font-medium text-forest-deep">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest font-display text-xs text-cream">{i + 1}</span>
                    {head.replace(/\*\*/g, '').trim()}
                  </p>
                  {rest.length > 0 && (
                    <p className="mt-1.5 text-sm text-moss">{rest.join('—').replace(/\*\*/g, '').trim()}</p>
                  )}
                </div>
              )
            })}
            <p className="text-xs text-moss">
              {aiPowered ? '✦ Generated live by AthVia AI from your profile and programs on the platform.' : 'Sample recommendations.'}{' '}
              Recommendations are guidance, not guarantees — always confirm details with schools directly.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
