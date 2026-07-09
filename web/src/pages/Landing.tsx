import { Link } from 'react-router-dom'

const sports = [
  'Baseball', 'Basketball', 'Beach volleyball', 'Cross country', 'Field hockey',
  'Football', 'Golf', 'Gymnastics', 'Ice hockey', 'Lacrosse', 'Rowing',
  'Soccer', 'Softball', 'Swim', 'Tennis', 'Track and field', 'Volleyball',
  'Water polo', 'Wrestling',
]

const features = [
  {
    title: 'A fit score, not an exposure score',
    body: 'Based on your real stats, academics, and grad year, we show which levels you are genuinely competitive at — D3, D2, or NAIA — with the reasons, not a sales pitch.',
  },
  {
    title: 'Coach-verified highlights',
    body: 'College coaches verify with their school email. Verified coaches confirm your film, so recruiters trust what they watch — no AI-generated fakes.',
  },
  {
    title: 'See who is actually recruiting',
    body: 'Schools that are active on AthVia are marked. No more sending film into the void and wondering if anyone is on the other end.',
  },
  {
    title: 'Your data is yours',
    body: 'We never sell your information. Your profile is visible only when you choose, and you can export or delete everything, anytime.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Build your free profile',
    body: 'Bio, academics, stats, and film — everything a college coach needs to evaluate you, in one link.',
  },
  {
    n: '2',
    title: 'Get your honest fit',
    body: 'See the division levels where athletes with your marks actually got recruited, and what closes the gap to the next one.',
  },
  {
    n: '3',
    title: 'Connect with real programs',
    body: 'Verified coaches at active D3, D2, and NAIA programs search, watch, and save athletes like you every week.',
  },
]

export default function Landing() {
  const hero = (f: string) => `${import.meta.env.BASE_URL}hero/${f}`
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden select-none md:block">
          <img src={hero('track-blocks.png')} alt="" className="floaty absolute left-[2%] top-10 w-16 -rotate-6 xl:left-[5%] xl:top-12 xl:w-28" />
          <img src={hero('field-hockey.png')} alt="" className="floaty-slow absolute -left-16 bottom-6 w-44 rotate-6 xl:-left-12 xl:bottom-10 xl:w-60" />
          <img src={hero('volleyball.png')} alt="" className="floaty-fast absolute bottom-48 left-[15%] hidden w-16 rotate-12 xl:block" />
          <img src={hero('basketball.png')} alt="" className="floaty-slow absolute right-[1%] top-10 w-20 rotate-2 xl:right-[4%] xl:top-14 xl:w-36" />
          <img src={hero('football.png')} alt="" className="floaty absolute bottom-36 right-[7%] hidden w-20 -rotate-12 xl:block" />
          <img src={hero('rowing.png')} alt="" className="floaty-fast absolute -right-14 bottom-4 w-56 -rotate-2 xl:-right-10 xl:bottom-8 xl:w-80" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 text-center md:pt-24">
          <p className="mx-auto mb-6 w-fit rounded-full border border-line bg-cream px-4 py-1 text-sm font-medium text-moss">
            Free forever for the essentials · We never sell your data
          </p>
          <h1 className="relative mx-auto max-w-3xl text-5xl font-semibold leading-tight text-forest md:text-6xl">
            <img src={hero('spark.png')} alt="" aria-hidden="true"
              className="absolute -left-12 -top-8 hidden w-10 rotate-12 md:block" />
            Recruiting for the 90%.
            <img src={hero('spark.png')} alt="" aria-hidden="true"
              className="absolute -bottom-2 -right-10 hidden w-7 -rotate-12 md:block" />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-moss">
            Most recruiting platforms sell exposure to a D1 dream. AthVia is the
            honest platform for high school athletes headed to D3, D2, and NAIA
            programs — free profiles, coach-verified film, and a fit score that
            tells you the truth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signin"
              className="rounded-lg bg-ochre px-6 py-3 font-medium text-forest-deep hover:brightness-95"
            >
              Create your free profile
            </Link>
            <Link
              to="/coaches"
              className="rounded-lg border border-forest px-6 py-3 font-medium text-forest hover:bg-leaf/40"
            >
              I'm a college coach
            </Link>
          </div>
          <img src={hero('rowing.png')} alt="A four-person rowing crew mid-stroke" className="mx-auto mt-12 w-72 md:hidden" />
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-sage p-6">
              <h3 className="text-xl font-semibold text-forest">{f.title}</h3>
              <p className="mt-3 text-moss">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-semibold text-forest">
          How AthVia works
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-cream">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-forest-deep">{s.title}</h3>
              <p className="mt-2 text-moss">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold">
            Recruiting help shouldn't cost thousands.
          </h2>
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-forest-deep p-6">
              <p className="text-sm uppercase tracking-wide text-leaf">Typical recruiting services</p>
              <p className="mt-2 font-display text-4xl font-semibold">$20–$1,000+</p>
              <p className="mt-2 text-sm text-leaf">per month, to promise exposure</p>
            </div>
            <div className="rounded-xl bg-cream p-6 text-forest-deep">
              <p className="text-sm uppercase tracking-wide text-moss">AthVia</p>
              <p className="mt-2 font-display text-4xl font-semibold">up to $24</p>
              <p className="mt-2 text-sm text-moss">essentials free forever — our priciest plan is $24/mo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-forest">Built for your sport</h2>
        <p className="mx-auto mt-3 max-w-xl text-moss">
          Nineteen sports at launch — including the ones other platforms overlook.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {sports.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-cream px-4 py-1.5 text-sm font-medium text-forest-deep"
            >
              {s}
            </span>
          ))}
        </div>
        <Link
          to="/signin"
          className="mt-12 inline-block rounded-lg bg-ochre px-8 py-3 font-medium text-forest-deep hover:brightness-95"
        >
          Get started free
        </Link>
      </section>
    </>
  )
}
