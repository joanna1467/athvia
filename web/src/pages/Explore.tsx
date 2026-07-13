import { Link } from 'react-router-dom'

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`

const athletes = [
  {
    slug: 'alina-fang',
    name: 'Alina Fang',
    photo: 'team/alina.jpg',
    sport: 'Competitive dance',
    meta: 'Class of 2027 · San Francisco, CA',
    status: 'Being recruited',
  },
]

export default function Explore() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-forest">Athletes</h1>
      <p className="mt-3 max-w-xl text-moss">
        Browse athlete profiles by sport, grad year, and location. More athletes
        join every week.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {athletes.map((a) => (
          <Link
            key={a.slug}
            to={`/athlete/${a.slug}`}
            className="group overflow-hidden rounded-xl border border-line bg-cream transition-colors hover:border-forest"
          >
            <img src={img(a.photo)} alt={a.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-forest">{a.name}</h3>
                <span className="rounded-full bg-ochre px-2.5 py-1 text-xs font-medium text-forest-deep">
                  {a.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-moss">{a.sport}</p>
              <p className="text-sm text-moss">{a.meta}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
