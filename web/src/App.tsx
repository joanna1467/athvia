import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import type { User } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import Survey from './Survey'
import Chatbot from './Chatbot'

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={`${import.meta.env.BASE_URL}logo.png?v=2`}
        alt=""
        className="h-10 w-auto"
      />
      <span className="font-display text-2xl font-semibold text-forest">AthVia</span>
    </Link>
  )
}

const links = [
  { to: '/explore', label: 'Athletes' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/schools', label: 'Schools' },
  { to: '/events', label: 'Events' },
  { to: '/pricing', label: 'Plans' },
  { to: '/about', label: 'About' },
  { to: '/demo', label: 'Demo' },
]

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) =>
      setUser(session?.user ?? null),
    )
    return () => sub.subscription.unsubscribe()
  }, [])

  const firstName =
    (user?.user_metadata?.full_name as string | undefined)?.split(' ')[0] ??
    user?.email?.split('@')[0]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-sage/95 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Wordmark />
          <div className="hidden items-center gap-6 text-sm font-medium text-moss md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  isActive ? 'text-forest-deep' : 'hover:text-forest-deep'
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-forest-deep sm:block">
                Hi, {firstName}!
              </span>
              <button
                onClick={() => supabase?.auth.signOut()}
                className="rounded-lg border border-forest px-4 py-2 text-sm font-medium text-forest hover:bg-leaf/40"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="rounded-lg bg-forest px-4 py-2 text-sm font-medium text-cream hover:bg-forest-deep"
            >
              Sign in
            </Link>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-moss">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <p className="font-display text-lg font-semibold text-forest">AthVia</p>
              <p className="mt-2 max-w-sm">
                Honest recruiting for high school athletes headed to D3, D2, and
                NAIA programs.
              </p>
            </div>
            <div className="max-w-sm">
              <p className="font-medium text-forest-deep">Our privacy pledge</p>
              <p className="mt-2">
                We never sell your data. Recruiters see only what you choose to
                share.
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-line pt-4 text-xs">
            © 2026 AthVia. If you or someone you know is struggling, call or
            text 988 (Suicide &amp; Crisis Lifeline).
          </p>
        </div>
      </footer>
      <Survey />
      <Chatbot />
    </div>
  )
}
