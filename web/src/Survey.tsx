import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

const roles = ['Athlete', 'Coach', 'Parent', 'Just curious']
const priorities = [
  'Honest fit guidance',
  'Verified highlights',
  'Affordable price',
  'Finding active schools',
]

const pill = (active: boolean) =>
  `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
    active
      ? 'border-forest bg-forest text-cream'
      : 'border-line bg-cream text-moss hover:border-forest'
  }`

export default function Survey() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [role, setRole] = useState('')
  const [likely, setLikely] = useState(0)
  const [priority, setPriority] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    const snoozeDays = { dismissed: 7, done: 30 }
    const raw = localStorage.getItem('athvia-survey')
    if (raw) {
      try {
        const { status, ts } = JSON.parse(raw)
        const days = snoozeDays[status as keyof typeof snoozeDays] ?? 7
        if (Date.now() - ts < days * 86_400_000) return
      } catch {
        // old permanent-flag format: fall through and show again
      }
    }
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 120) {
        setOpen(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!open) return null

  const dismiss = () => {
    localStorage.setItem('athvia-survey', JSON.stringify({ status: 'dismissed', ts: Date.now() }))
    setOpen(false)
  }

  async function submit() {
    localStorage.setItem('athvia-survey', JSON.stringify({ status: 'done', ts: Date.now() }))
    if (supabase) {
      await supabase.from('feedback').insert({
        role,
        likelihood: likely,
        priority,
        comment: comment.trim() || null,
      })
    }
    setSent(true)
    setTimeout(() => setOpen(false), 2500)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-xl border border-line bg-sage p-5 shadow-lg">
      {sent ? (
        <p className="py-6 text-center font-medium text-forest">
          Thank you — this genuinely helps us build a better AthVia. 💚
        </p>
      ) : (
        <>
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-lg font-semibold text-forest">
              30 seconds to make AthVia better?
            </p>
            <button
              onClick={dismiss}
              aria-label="Close survey"
              className="rounded p-1 text-moss hover:text-forest-deep"
            >
              ✕
            </button>
          </div>

          <p className="mt-4 text-sm font-medium text-forest-deep">1. Which are you?</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {roles.map((r) => (
              <button key={r} className={pill(role === r)} onClick={() => setRole(r)}>
                {r}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm font-medium text-forest-deep">
            2. How satisfied are you with AthVia's services?
          </p>
          <div className="mt-2 flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} className={pill(likely === n)} onClick={() => setLikely(n)}>
                {n}
              </button>
            ))}
            <span className="self-center text-xs text-moss">5 = very satisfied</span>
          </div>

          <p className="mt-4 text-sm font-medium text-forest-deep">
            3. What matters most to you?
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {priorities.map((p) => (
              <button key={p} className={pill(priority === p)} onClick={() => setPriority(p)}>
                {p}
              </button>
            ))}
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Anything we should add or improve? (optional)"
            rows={2}
            className="mt-4 w-full rounded-lg border border-line bg-cream px-3 py-2 text-sm text-forest-deep placeholder:text-moss/60 focus:border-forest focus:outline-none"
          />

          <button
            onClick={submit}
            disabled={!role || !likely || !priority}
            className="mt-3 w-full rounded-lg bg-forest py-2 text-sm font-medium text-cream hover:bg-forest-deep disabled:opacity-40"
          >
            Send feedback
          </button>
        </>
      )}
    </div>
  )
}
