import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant'; text: string }

const SUPA_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const SUPA_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/* ---------- built-in recruiting brain (works with zero setup) ---------- */

const faqs: { keys: string[]; a: string }[] = [
  {
    keys: ['eligibil', 'eligible', 'register', 'clearinghouse'],
    a: "Eligibility works differently by association. For NCAA D2/D3: register with the NCAA Eligibility Center (eligibilitycenter.org) — D3 athletes only need the free profile page. For NAIA: it's a totally separate system — register at play.mynaia.org (the NAIA Eligibility Center). Rule of thumb: register the summer before junior year. Your school counselor can confirm your coursework counts.",
  },
  {
    keys: ['contact', 'when can coaches', 'talk to coach', 'reach out', 'recruit me', 'timeline'],
    a: "Contact rules by level: NCAA D2 — coaches can contact you starting June 15 after sophomore year. NCAA D3 — almost no restrictions; coaches can contact you anytime, and you can always contact them first. NAIA — very few restrictions; contact can happen anytime. The big secret of D3/NAIA recruiting: YOU reaching out first is normal and expected. Don't wait to be found.",
  },
  {
    keys: ['email', 'message a coach', 'write to', 'template', 'introduce'],
    a: "A good first email to a coach: (1) Subject line with your grad year, sport/position, and a key stat — like \"2027 Rower — 6:42 2k — 3.8 GPA\". (2) Two short paragraphs: who you are + why THEIR program specifically. (3) Link your AthVia profile and film. (4) Ask one specific question so it's easy to reply. Keep it under 150 words — coaches read on their phones. And always email from your own account, not a parent's!",
  },
  {
    keys: ['division', 'd1', 'd2', 'd3', 'naia', 'difference', 'levels'],
    a: "Quick guide: D1 — biggest programs, full scholarships, most intense (not our focus). D2 — strong athletics with partial athletic scholarships. D3 — largest division in the NCAA! No athletic scholarships, but great merit/academic aid, and sports + academics balance. NAIA — smaller colleges, flexible eligibility, real athletic scholarships, and sponsors emerging sports like competitive dance and cheer. Over 60% of college athletes compete OUTSIDE D1 — that's the 90% AthVia is built for.",
  },
  {
    keys: ['scholarship', 'money', 'aid', 'afford', 'tuition', 'financial'],
    a: "Scholarship reality by level: D2 — partial athletic scholarships are common (full rides are rare). D3 — no athletic scholarships, BUT strong academic/merit aid often makes D3 cheaper than a D2 partial. NAIA — athletic scholarships available and often more flexible than NCAA. Pro tip: your GPA is scholarship money at every level. A 3.8 student-athlete is cheaper to recruit, and coaches know it.",
  },
  {
    keys: ['film', 'highlight', 'video', 'reel', 'tape'],
    a: "Film tips: keep highlight reels 3–5 minutes, best plays FIRST (coaches decide in 30 seconds). Simple angles beat fancy editing. For measured sports (track, swim, rowing), verified times matter more than footage. On AthVia, verified coaches can confirm your film — that 'Coach verified ✓' badge is what makes recruiters trust what they see.",
  },
  {
    keys: ['fit score', 'fit', 'ranked', 'realistic', 'chances', 'good enough'],
    a: "Your AthVia fit score compares your real stats, academics, and grad year against what athletes actually had when they got recruited at each level — then tells you honestly where you're competitive (D3, D2, or NAIA) and what closes the gap to the next level. No sales pitch, no fake rankings. And paying never changes it — visibility on AthVia is based on fit, never subscription.",
  },
  {
    keys: ['price', 'cost', 'subscription', 'plan', 'pay', 'free'],
    a: "AthVia pricing: everything an athlete needs to be recruited is FREE forever — full profile, film uploads, appearing in coach searches. AthVia Plus ($9.99/mo, optional) adds the University Activity Tracker and AI College List Builder. Coaches pay nothing at all. Compare that to other platforms charging $500–$4,000+ 😅",
  },
  {
    keys: ['dance', 'cheer', 'emerging sport'],
    a: "Yes — dance and cheer have real college pathways! NAIA sponsors competitive dance and cheer as emerging varsity sports with scholarship potential. Most NCAA D2/D3 schools also field competitive dance/cheer teams through the NDA and UDA circuits (the team takes the school's division). AthVia supports 28 sports including these — because overlooked sports are exactly why we exist.",
  },
  {
    keys: ['gpa', 'grades', 'academic', 'sat', 'act', 'test score'],
    a: "Academics are your recruiting superpower at these levels. NAIA minimum: meet 2 of 3 — 2.3 GPA, top 50% of class, or benchmark test score. D3: no NCAA minimum, but you must get INTO the school — selective D3s want strong transcripts. D2: sliding scale of GPA + test scores. Real talk: a strong GPA makes every coach's job easier and unlocks merit aid. Protect it like a starting spot.",
  },
  {
    keys: ['verify', 'verified', 'trust', 'real coach'],
    a: "Coach verification on AthVia: coaches sign up with their official school email, and we match the domain against our verified school directory — matching domains get verified automatically. Only verified coaches can confirm athlete film. That's how we keep fake accounts and fake hype out.",
  },
  {
    keys: ['sport', 'which sports', 'what sports', 'offer'],
    a: "AthVia supports 28 sports — from mainstream (basketball, soccer, track) to widely known (rowing, lacrosse, gymnastics) to niche and emerging (fencing, equestrian, rugby, badminton, table tennis, boxing, skiing, competitive dance, cheer). If other platforms overlook your sport, you're exactly who we built this for.",
  },
  {
    keys: ['start', 'begin', 'how do i', 'first step', 'new to'],
    a: "Starting recruiting on AthVia: (1) Create your free profile — stats, academics, film. (2) Check your fit score to see where you're honestly competitive. (3) Browse the school directory and note which programs are ACTIVE (the badge matters). (4) Email coaches directly — at D3/NAIA levels, athletes who reach out first win. Sophomore/junior year is the sweet spot to start, but it's never too early to build the profile.",
  },
]

/* ---------- sport-specific recruiting knowledge (all 28 sports) ---------- */

const sportNotes: { names: string[]; note: string }[] = [
  { names: ['basketball'], note: 'Basketball recruiting: full game film matters more than mixtapes — coaches want to see defense and off-ball movement, not just highlights. AAU/club exposure helps, but at D3/NAIA levels, emailing coaches your film directly is what actually starts conversations.' },
  { names: ['football'], note: "Football recruiting: coaches evaluate measurables (height/weight, 40 time) plus position-specific film. Hudl film + a direct email is the standard playbook. NAIA and D2 both offer football scholarships; D3 football is huge and recruits actively." },
  { names: ['soccer'], note: 'Soccer recruiting: club play (ECNL, MLS Next, etc.) drives visibility, but D3/NAIA coaches actively watch showcases and respond well to direct emails with film. Include your club schedule so coaches can come watch.' },
  { names: ['baseball'], note: 'Baseball recruiting: verified metrics rule — exit velo, throwing velo, 60-yard dash. Perfect Game or PBR profiles help, but D3/NAIA coaches respond great to direct emails with video of live at-bats/pitching.' },
  { names: ['softball'], note: 'Softball recruiting: travel ball is the main showcase route; skills video (hitting, fielding, pop times for catchers) plus tournament schedules in your coach emails work at every level.' },
  { names: ['volleyball'], note: "Volleyball recruiting: club season is when coaches watch. Key numbers: height, approach touch, position. D3 volleyball is deep and competitive — great programs actively recruit, and NAIA offers scholarships." },
  { names: ['track', 'track and field', 'sprinter', 'thrower', 'jumper'], note: "Track & field recruiting: your marks ARE your resume — verified times/distances/heights from official meets. Coaches compare your PRs against their current roster. This makes track one of the most honest sports to assess fit in (and our fit score loves it)." },
  { names: ['cross country', 'xc'], note: 'Cross country recruiting: 5K times (and track PRs in the 1600/3200) are what coaches compare. Include your progression — a big sophomore-to-junior drop signals upside coaches love.' },
  { names: ['tennis'], note: 'Tennis recruiting: your UTR (Universal Tennis Rating) is the number coaches check first. D3 tennis is very strong; include UTR, tournament results, and a short rally/match video in emails.' },
  { names: ['swim', 'swimming', 'swimmer'], note: 'Swim recruiting: times are everything and fully verifiable. Coaches compare your best times against their roster and conference standards — which makes honest fit assessment easy. Include your SwimCloud profile in emails.' },
  { names: ['golf'], note: 'Golf recruiting: scoring average and tournament finishes (JGS/AJGA if you have them) are the currency. D3 and NAIA golf recruit actively — send scoring history and a swing video.' },
  { names: ['wrestling', 'wrestler'], note: 'Wrestling recruiting: record, state placement, and who you beat matter most. NAIA and D2 offer wrestling scholarships; D3 wrestling is deep in the Midwest/East. Send match film, not just wins.' },
  { names: ['field hockey'], note: 'Field hockey recruiting: strongest at D3 (especially Northeast/Mid-Atlantic) and D2. Club/festival play + game film in direct emails is the route. Few NAIA programs — target NCAA levels here.' },
  { names: ['gymnastics', 'gymnast'], note: "Gymnastics recruiting: college programs are limited, so cast a wide net early. D3 gymnastics (NCGA schools) recruits Level 9/10 athletes — you don't need elite. Include meet scores by event and skills video." },
  { names: ['lacrosse'], note: 'Lacrosse recruiting: D3 lacrosse is enormous and excellent — many of the best programs are D3. Club/tournament film plus direct emails work; include your tournament schedule so coaches can watch live.' },
  { names: ['water polo'], note: 'Water polo recruiting: programs cluster in California and the East — the pool of schools is small, so email every coach at your level directly. Game film + club (ODP/JO) results are what they evaluate.' },
  { names: ['ice hockey', 'hockey'], note: "Ice hockey recruiting: unique path — many college players do junior hockey first, so college rosters skew older. D3 hockey (NESCAC, NCHA) is very strong. Be upfront about your route (juniors or straight from HS) in coach emails." },
  { names: ['rowing', 'rower', 'crew', 'erg'], note: 'Rowing recruiting: your 2k erg score is the universal passport — coaches sort by it before anything else. Height matters too. Verified erg + technique video + direct emails works at every level, and walk-on culture is real: many college rowers started as novices.' },
  { names: ['beach volleyball'], note: 'Beach volleyball recruiting: fast-growing with new programs yearly. Pairs tournament results (AVP First/BVCA) plus indoor crossover experience both count. Small sport = direct coach emails go far.' },
  { names: ['cheer', 'cheerleading'], note: 'Cheerleading recruiting: real college pathways exist! Many NAIA schools sponsor competitive cheer with scholarships, and STUNT is growing fast in NCAA D2. Skills video (tumbling passes, stunts) + direct outreach to program coaches is the route.' },
  { names: ['dance', 'dancer'], note: "Dance recruiting: NAIA sponsors competitive dance as an emerging varsity sport (with scholarship potential), and most NCAA D2/D3 schools field dance teams through NDA/UDA circuits. Solo + team footage across styles, plus your competition record, is what coaches want." },
  { names: ['fencing', 'fencer'], note: 'Fencing recruiting: a small, academics-heavy world — many programs are at selective schools, so grades open doors. Your USA Fencing rating (letter grade) and national/regional results are the key credentials.' },
  { names: ['equestrian'], note: "Equestrian recruiting: NCEA schools (D1/D2) recruit formally off show records; almost every college also has IHSA teams (all levels welcome, no horse ownership needed). Include your show record and division in outreach." },
  { names: ['rugby'], note: 'Rugby recruiting: growing fast — NAIA and small colleges increasingly sponsor varsity rugby (some with scholarships), plus a big club scene. Sevens and 15s film both help; direct emails to program coaches work well.' },
  { names: ['badminton'], note: "Badminton honesty: very few US colleges sponsor varsity badminton — most play is high-level club. If it's your main sport, target schools with strong club programs and mention national/junior results. Your academics will carry the admission." },
  { names: ['table tennis', 'ping pong'], note: 'Table tennis honesty: college play runs through NCTTA (collegiate club league) — a handful of schools even offer scholarships (notably in Texas). Include your USATT rating when contacting programs.' },
  { names: ['boxing', 'boxer'], note: "Boxing honesty: no NCAA varsity boxing — college boxing lives in club leagues (USIBA/NCBA), which are genuinely competitive. Pick schools for academics + club strength, and mention your bout record and USA Boxing experience." },
  { names: ['skiing', 'ski', 'skier'], note: 'Skiing recruiting: NCAA skiing exists (D1 and D3 compete together) and USCSA offers a huge club racing scene. FIS/USSA points are your resume for NCAA; USCSA welcomes strong high school racers.' },
]

const greetings = ['hi', 'hello', 'hey', 'yo', 'sup', 'hola']

function scriptedAnswer(q: string): string {
  const t = q.toLowerCase()
  if (greetings.some((g) => t.trim().startsWith(g)) && t.length < 20)
    return "Hey! I'm the AthVia recruiting guide. Ask me about eligibility, contacting coaches, divisions (NAIA/D2/D3), scholarships, film, or any of our 28 sports — try \"rowing\" or \"dance\". What's on your mind?"

  let best: { a: string; score: number } = { a: '', score: 0 }
  for (const f of faqs) {
    const score = f.keys.filter((k) => t.includes(k)).length
    if (score > best.score) best = { a: f.a, score }
  }

  const sport = sportNotes.find((s) => s.names.some((n) => t.includes(n)))

  if (best.score > 0 && sport) return `${best.a}\n\n🏅 ${sport.note}`
  if (sport) return sport.note
  if (best.score > 0) return best.a

  return "Good question — I don't have a specific answer for that one yet. I'm best at: eligibility rules, when coaches can contact you, emailing coaches (with a template), D2/D3/NAIA differences, scholarships, highlight film, fit scores — or ask about your specific sport by name (all 28 work, from basketball to fencing). For anything unique to your situation, your school counselor is the move!"
}

/* ---------- optional AI brain (auto-activates when edge function exists) ---------- */

async function aiAnswer(messages: Msg[]): Promise<string | null> {
  if (!SUPA_URL || !SUPA_KEY) return null
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 8000)
    const res = await fetch(`${SUPA_URL}/functions/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPA_KEY}`,
      },
      body: JSON.stringify({ messages }),
      signal: ctrl.signal,
    })
    clearTimeout(timer)
    if (!res.ok) return null
    const data = await res.json()
    return typeof data.reply === 'string' ? data.reply : null
  } catch {
    return null
  }
}

/* ---------- UI ---------- */

const quickQs = [
  'When can coaches contact me?',
  'How do I email a coach?',
  'D2 vs D3 vs NAIA?',
  'How do scholarships work?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: 'assistant',
      text: "Hey! I'm the AthVia recruiting guide 👋 Ask me anything about getting recruited to NAIA, D2, or D3 programs.",
    },
  ])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  async function send(text: string) {
    const q = text.trim()
    if (!q || busy) return
    const history: Msg[] = [...msgs, { role: 'user', text: q }]
    setMsgs(history)
    setInput('')
    setBusy(true)
    const ai = await aiAnswer(history)
    const reply = ai ?? scriptedAnswer(q)
    setMsgs((m) => [...m, { role: 'assistant', text: reply }])
    setBusy(false)
  }

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close recruiting guide' : 'Open recruiting guide'}
        className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-2xl text-cream shadow-lg transition-transform hover:scale-105"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* panel */}
      {open && (
        <div className="fixed bottom-20 left-4 z-50 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-line bg-sage shadow-xl">
          <div className="border-b border-line bg-forest px-4 py-3">
            <p className="font-display font-semibold text-cream">AthVia recruiting guide</p>
            <p className="text-xs text-leaf">Answers about NAIA, D2 &amp; D3 recruiting · don't share personal info</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm ${
                  m.role === 'user'
                    ? 'ml-auto bg-forest text-cream'
                    : 'bg-cream text-forest-deep'
                }`}
              >
                {m.text}
              </div>
            ))}
            {busy && (
              <div className="w-fit rounded-xl bg-cream px-3 py-2 text-sm text-moss">
                thinking…
              </div>
            )}
            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickQs.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-forest hover:border-forest"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex gap-2 border-t border-line bg-cream p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about recruiting…"
              className="flex-1 rounded-lg border border-line bg-sage px-3 py-2 text-sm text-forest-deep placeholder:text-moss/60 focus:border-forest focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg bg-forest px-4 py-2 text-sm font-medium text-cream disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}
