import { NavLink, Link, Outlet } from 'react-router-dom'

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <path
          d="M6 26 L16 5 L26 26"
          fill="none"
          stroke="#294720"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 20 Q10 16 16 20 T28 20"
          fill="none"
          stroke="#7ca06d"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-2xl font-semibold text-forest">AthVia</span>
    </Link>
  )
}

const links = [
  { to: '/explore', label: 'Athletes' },
  { to: '/schools', label: 'Schools' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/pricing', label: 'Pricing' },
]

export default function App() {
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
          <Link
            to="/signin"
            className="rounded-lg bg-forest px-4 py-2 text-sm font-medium text-cream hover:bg-forest-deep"
          >
            Sign in
          </Link>
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
                share, and you can delete everything, anytime.
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-line pt-4 text-xs">
            © 2026 AthVia. If you or someone you know is struggling, call or
            text 988 (Suicide &amp; Crisis Lifeline).
          </p>
        </div>
      </footer>
    </div>
  )
}
