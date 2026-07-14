import { useState } from 'react'
import { supabase } from '../lib/supabase'

import { sports } from '../data/sports'

const gradYears = ['2026', '2027', '2028', '2029', '2030']

const states = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY',
]

type Role = 'athlete' | 'coach' | null
type Mode = 'signup' | 'signin'

const inputCls =
  'w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-forest-deep placeholder:text-moss/60 focus:border-forest focus:outline-none'
const labelCls = 'mb-1.5 block text-sm font-medium text-forest-deep'
const primaryBtn =
  'rounded-lg bg-forest px-6 py-2.5 font-medium text-cream hover:bg-forest-deep disabled:opacity-40'

function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium text-moss">
        Step {step} of {total}
      </p>
      <div className="mt-2 flex gap-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < step ? 'bg-forest' : 'bg-leaf'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SignIn() {
  const [mode, setMode] = useState<Mode>('signup')
  const [role, setRole] = useState<Role>(null)
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    fullName: '', email: '', password: '',
    sport: '', gradYear: '', divisions: ['NAIA', 'D2', 'D3'] as string[],
    gpa: '', city: '', state: '',
    school: '', title: '',
  })

  const set = (k: string, v: string | string[]) => setForm((f) => ({ ...f, [k]: v }))

  const totalSteps = role === 'athlete' ? 3 : 2

  async function finish() {
    setError('')
    if (!supabase) {
      setDone(true)
      return
    }
    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.fullName, role, ...form } },
    })
    if (err) setError(err.message)
    else setDone(true)
  }

  async function signIn(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!supabase) {
      setError('Accounts are being connected this week — check back soon!')
      return
    }
    const { error: err } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })
    if (err) setError(err.message)
    else window.location.href = import.meta.env.BASE_URL
  }

  /* ---------- success screen ---------- */
  if (done) {
    return (
      <section className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-2xl text-cream">✓</div>
        <h1 className="mt-6 text-3xl font-semibold text-forest">
          {role === 'coach' ? 'Welcome, coach!' : "You're on the roster!"}
        </h1>
        <p className="mt-3 text-moss">
          {role === 'coach'
            ? form.email.endsWith('.edu')
              ? 'Your account is created, and your school email qualifies for verification. Sign in to start searching athletes and verifying film.'
              : 'Your account is created and will be reviewed for verification. Tip: signing up with your school (.edu) email gets you verified fastest.'
            : 'Your account is created! Sign in to build out your profile — stats, film, and your recruiting fit score are on the way.'}
        </p>
      </section>
    )
  }

  /* ---------- sign in (existing users) ---------- */
  if (mode === 'signin') {
    return (
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-4xl font-semibold text-forest">Sign in</h1>
        <form onSubmit={signIn} className="mt-8 space-y-4">
          <div>
            <label className={labelCls}>Email</label>
            <input type="email" required className={inputCls} placeholder="you@example.com"
              value={form.email} onChange={(e) => set('email', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Password</label>
            <input type="password" required className={inputCls} placeholder="••••••••"
              value={form.password} onChange={(e) => set('password', e.target.value)} />
          </div>
          {error && <p className="text-sm text-ochre">{error}</p>}
          <button type="submit" className={`${primaryBtn} w-full`}>Sign in</button>
        </form>
        <p className="mt-6 text-center text-sm text-moss">
          New to AthVia?{' '}
          <button className="font-medium text-forest underline"
            onClick={() => { setMode('signup'); setRole(null); setStep(1); setError('') }}>
            Create an account
          </button>
        </p>
      </section>
    )
  }

  /* ---------- role picker ---------- */
  if (!role) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-forest">Join AthVia</h1>
        <p className="mt-3 text-moss">First things first — which one are you?</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <button onClick={() => { setRole('athlete'); setStep(1) }}
            className="rounded-xl border-2 border-line bg-cream p-8 text-left hover:border-forest">
            <span className="text-3xl">🏅</span>
            <h2 className="mt-3 text-xl font-semibold text-forest">I'm an athlete</h2>
            <p className="mt-2 text-sm text-moss">
              Build a free profile, upload film, and find your honest fit at
              D3, D2, and NAIA programs.
            </p>
          </button>
          <button onClick={() => { setRole('coach'); setStep(1) }}
            className="rounded-xl border-2 border-line bg-cream p-8 text-left hover:border-forest">
            <span className="text-3xl">📋</span>
            <h2 className="mt-3 text-xl font-semibold text-forest">I'm a coach</h2>
            <p className="mt-2 text-sm text-moss">
              Search recruitable athletes, verify film, and build your program
              page. Instant verification with a school email.
            </p>
          </button>
        </div>
        <p className="mt-8 text-sm text-moss">
          Already have an account?{' '}
          <button className="font-medium text-forest underline"
            onClick={() => { setMode('signin'); setError('') }}>
            Sign in
          </button>
        </p>
      </section>
    )
  }

  /* ---------- signup wizard ---------- */
  const heading = role === 'athlete' ? 'Create your athlete profile' : 'Create your coach account'

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <button className="mb-6 text-sm text-moss hover:text-forest"
        onClick={() => (step === 1 ? setRole(null) : setStep(step - 1))}>
        ← Back
      </button>
      <h1 className="mb-2 text-3xl font-semibold text-forest">{heading}</h1>
      <Progress step={step} total={totalSteps} />

      {/* step 1: account basics (both roles) */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Full name</label>
            <input className={inputCls} placeholder="Jordan Lee"
              value={form.fullName} onChange={(e) => set('fullName', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>{role === 'coach' ? 'School email' : 'Email'}</label>
            <input type="email" className={inputCls}
              placeholder={role === 'coach' ? 'you@youruniversity.edu' : 'you@example.com'}
              value={form.email} onChange={(e) => set('email', e.target.value)} />
            {role === 'coach' && (
              <p className="mt-1.5 text-xs text-moss">
                Use your athletics or .edu email — coaches at recognized schools
                are verified instantly.
              </p>
            )}
          </div>
          <div>
            <label className={labelCls}>Password</label>
            <input type="password" className={inputCls} placeholder="8+ characters"
              value={form.password} onChange={(e) => set('password', e.target.value)} />
          </div>
          <button className={`${primaryBtn} w-full`}
            disabled={!form.fullName || !form.email || form.password.length < 8}
            onClick={() => setStep(2)}>
            Continue
          </button>
        </div>
      )}

      {/* step 2, athlete: sport + grad year + divisions */}
      {step === 2 && role === 'athlete' && (
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Your sport</label>
            <select className={inputCls} value={form.sport}
              onChange={(e) => set('sport', e.target.value)}>
              <option value="">Choose a sport</option>
              {sports.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Graduation year</label>
            <select className={inputCls} value={form.gradYear}
              onChange={(e) => set('gradYear', e.target.value)}>
              <option value="">Choose your class</option>
              {gradYears.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Divisions you're interested in</label>
            <div className="flex gap-3">
              {['NAIA', 'D2', 'D3'].map((d) => (
                <button key={d}
                  className={`flex-1 rounded-lg border px-4 py-2.5 font-medium ${
                    form.divisions.includes(d)
                      ? 'border-forest bg-forest text-cream'
                      : 'border-line bg-cream text-moss'
                  }`}
                  onClick={() =>
                    set('divisions', form.divisions.includes(d)
                      ? form.divisions.filter((x) => x !== d)
                      : [...form.divisions, d])
                  }>
                  {d}
                </button>
              ))}
            </div>
          </div>
          <button className={`${primaryBtn} w-full`}
            disabled={!form.sport || !form.gradYear || form.divisions.length === 0}
            onClick={() => setStep(3)}>
            Continue
          </button>
        </div>
      )}

      {/* step 3, athlete: academics + location */}
      {step === 3 && role === 'athlete' && (
        <div className="space-y-4">
          <div>
            <label className={labelCls}>GPA (unweighted, optional)</label>
            <input className={inputCls} placeholder="3.6" inputMode="decimal"
              value={form.gpa} onChange={(e) => set('gpa', e.target.value)} />
            <p className="mt-1.5 text-xs text-moss">
              Coaches at academic D3 schools filter by GPA — adding it helps you
              get found.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>City</label>
              <input className={inputCls} placeholder="Portland"
                value={form.city} onChange={(e) => set('city', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>State</label>
              <select className={inputCls} value={form.state}
                onChange={(e) => set('state', e.target.value)}>
                <option value="">State</option>
                {states.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          {error && <p className="text-sm text-ochre">{error}</p>}
          <button className={`${primaryBtn} w-full`}
            disabled={!form.city || !form.state} onClick={finish}>
            Create my profile
          </button>
        </div>
      )}

      {/* step 2, coach: program details */}
      {step === 2 && role === 'coach' && (
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Your school</label>
            <input className={inputCls} placeholder="Kenyon College"
              value={form.school} onChange={(e) => set('school', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Sport you coach</label>
            <select className={inputCls} value={form.sport}
              onChange={(e) => set('sport', e.target.value)}>
              <option value="">Choose a sport</option>
              {sports.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Your title</label>
            <input className={inputCls} placeholder="Head coach, assistant coach, recruiting coordinator…"
              value={form.title} onChange={(e) => set('title', e.target.value)} />
          </div>
          {error && <p className="text-sm text-ochre">{error}</p>}
          <button className={`${primaryBtn} w-full`}
            disabled={!form.school || !form.sport || !form.title} onClick={finish}>
            Create my account
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-xs text-moss">
        We never sell your data. You control what recruiters see.
      </p>
    </section>
  )
}
