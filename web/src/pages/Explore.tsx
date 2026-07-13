import { useState } from 'react'
import { Link } from 'react-router-dom'

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`

const sports = [
  'Baseball', 'Basketball', 'Beach volleyball', 'Competitive dance', 'Cross country',
  'Field hockey', 'Football', 'Golf', 'Gymnastics', 'Ice hockey', 'Lacrosse',
  'Rowing', 'Soccer', 'Softball', 'Swim', 'Tennis', 'Track and field',
  'Volleyball', 'Water polo', 'Wrestling',
]
const gradYears = ['2026', '2027', '2028', '2029', '2030']

const athletes = [
  {
    slug: 'alina-fang',
    name: 'Alina Fang',
    photo: 'team/alina.jpg',
    sport: 'Competitive dance',
    gradYear: '2027',
    location: 'San Francisco, CA',
    status: 'Being recruited',
  },
]

const inputCls =
  'w-full rounded-lg border border-line bg-cream px-3 py-2 font-display text-sm text-forest-deep placeholder:text-moss/60 focus:border-forest focus:outline-none'

const labelCls = 'mb-1 block font-display text-xs font-medium text-moss'

export default function Explore() {
  const [sport, setSport] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [location, setLocation] = useState('')

  const results = athletes.filter(
    (a) =>
      (!sport || a.sport === sport) &&
      (!gradYear || a.gradYear === gradYear) &&
      (!location || a.location.toLowerCase().includes(location.toLowerCase())),
  )

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">Athletes</h1>
      <p className="mt-3 max-w-xl text-moss">
        Browse athlete profiles by sport, grad year, and location. More athletes
        join every week.
      </p>

      {/* search / filter bar */}
      <div className="mt-8 grid gap-3 rounded-xl border border-line bg-cream p-4 sm:grid-cols-3">
        <div>
          <label className={labelCls}>Sport</label>
          <select className={inputCls} value={sport} onChange={(e) => setSport(e.target.value)}>
            <option value="">All sports</option>
            {sports.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Grad year</label>
          <select className={inputCls} value={gradYear} onChange={(e) => setGradYear(e.target.value)}>
            <option value="">All years</option>
            {gradYears.map((y) => <option key={y}>{y}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Location</label>
          <input
            className={inputCls}
            placeholder="City or state"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-moss">
        {results.length} athlete{results.length === 1 ? '' : 's'}
        {(sport || gradYear || location) && (
          <button
            className="ml-3 font-medium text-forest underline"
            onClick={() => { setSport(''); setGradYear(''); setLocation('') }}
          >
            Clear filters
          </button>
        )}
      </p>

      {results.length === 0 ? (
        <p className="mt-10 text-center text-moss">
          No athletes match those filters yet. Try widening your search.
        </p>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a) => (
            <Link
              key={a.slug}
              to={`/athlete/${a.slug}`}
              className="group overflow-hidden rounded-xl border border-line bg-cream transition-colors hover:border-forest"
            >
              <img src={img(a.photo)} alt={a.name} className="aspect-[4/5] w-full object-cover object-[center_30%]" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-forest">{a.name}</h3>
                  <span className="rounded-full bg-ochre px-2.5 py-1 text-xs font-medium text-forest-deep">
                    {a.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-moss">{a.sport}</p>
                <p className="text-sm text-moss">Class of {a.gradYear} · {a.location}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
