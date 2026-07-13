export type FitRow = { level: string; verdict: string; tone: 'strong' | 'mid' | 'low'; note: string }

export type Athlete = {
  slug: string
  name: string
  photo?: string
  initials: string
  sport: string
  gradYear: string
  city: string
  state: string
  height: string
  status: string
  target: string[]
  bio: string
  academics: { label: string; value: string; note: string }[]
  fitSummary: string
  fitIntro: string
  academicFit: string
  fitRows: FitRow[]
  stats: { label: string; value: string }[]
  achievements: string[]
}

export type Coach = {
  slug: string
  name: string
  initials: string
  title: string
  school: string
  division: string
  location: string
  sport: string
  verified: boolean
  active: string
  bio: string
  recruiting: string[]
}

export const athletes: Athlete[] = [
  {
    slug: 'alina-fang',
    name: 'Alina Fang',
    photo: 'team/alina.jpg',
    initials: 'AF',
    sport: 'Competitive dance',
    gradYear: '2027',
    city: 'San Francisco',
    state: 'CA',
    height: `5'5½"`,
    status: 'Being recruited',
    target: ['NAIA', 'D3', 'D2'],
    bio: "I'm a competitive dancer from San Francisco training across jazz, contemporary, pom, and hip-hop, and I captain my varsity team. Twelve years in the studio have taught me discipline, performance under pressure, and how to lift a team — and I bring the same drive to the classroom. I'm looking for an NAIA program where I can keep growing as an artist and a student.",
    academics: [
      { label: 'GPA', value: '4.0', note: 'unweighted' },
      { label: 'SAT', value: '1600', note: 'perfect score' },
      { label: 'ACT', value: '36', note: 'perfect score' },
    ],
    fitSummary: 'Strong NAIA fit',
    fitIntro:
      'Based on Alina\'s training level, competition history, academics, and graduation year — with the reasons, not a sales pitch. College dance is organized through the NDA and UDA circuits rather than as an NCAA championship sport, so fit reflects where her profile matches real teams at each level.',
    academicFit:
      'A 4.0 GPA with a 1600 SAT and 36 ACT clears every NAIA academic standard with enormous room to spare — academics will be an asset, not a barrier, at any level she targets.',
    fitRows: [
      { level: 'NAIA', verdict: 'Strong fit', tone: 'strong', note: 'NAIA sponsors competitive dance as an emerging varsity sport — her training level, captaincy, and national-stage experience line up with these rosters.' },
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'Most D3 schools field competitive dance teams (NDA/UDA circuits), and her academics make even the most selective D3 programs realistic.' },
      { level: 'NCAA D2', verdict: 'Competitive', tone: 'mid', note: 'D2 schools also field competitive dance teams — reachable with another strong competition season and updated film.' },
    ],
    stats: [
      { label: 'Styles', value: 'Jazz, contemporary, pom, hip-hop' },
      { label: 'Years training', value: '12' },
      { label: 'Studio', value: 'Golden Gate Dance Company' },
      { label: 'Team role', value: 'Varsity captain' },
    ],
    achievements: [
      'NDA National Championship — top 10 team finish (2025)',
      'Regional soloist finalist, contemporary (2025)',
      'Studio company member, 8 consecutive seasons',
      'Choreography award, spring showcase (2024)',
    ],
  },
  {
    slug: 'jordan-ellis',
    name: 'Jordan Ellis',
    initials: 'JE',
    sport: 'Rowing',
    gradYear: '2026',
    city: 'Seattle',
    state: 'WA',
    height: `6'1"`,
    status: 'Open to offers',
    target: ['D3', 'NAIA', 'D2'],
    bio: "Port-side sweep rower out of Seattle, four seasons with my club program. I love the grind of winter training and the quiet focus right before a race. I'm looking for a program where I can keep dropping my 2k and study environmental science.",
    academics: [
      { label: 'GPA', value: '3.8', note: 'unweighted' },
      { label: 'SAT', value: '1400', note: '' },
      { label: 'ACT', value: '31', note: '' },
    ],
    fitSummary: 'Strong D3 fit',
    fitIntro:
      "Based on Jordan's 2k erg time, race results, academics, and graduation year — benchmarked against what rowers actually posted in high school when they were recruited at each level, not against seasoned college crews.",
    academicFit:
      'A 3.8 GPA with a 1400 SAT opens doors at academically selective D3 programs and clears NAIA standards comfortably — a genuine asset in recruiting.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'A 6:42 2k sits in the competitive range for D3 men\'s rosters, and the academics match selective D3 programs well.' },
      { level: 'NAIA', verdict: 'Competitive', tone: 'mid', note: 'Within range for NAIA rowing programs — a strong spring season would make this a clear fit.' },
      { level: 'NCAA D2', verdict: 'Developing', tone: 'low', note: 'Reachable by dropping toward a 6:20 2k over the next year; the trajectory is there.' },
    ],
    stats: [
      { label: '2k erg', value: '6:42.0' },
      { label: 'Side', value: 'Port (sweep)' },
      { label: 'Club', value: 'Lake Union Youth Rowing' },
      { label: 'Seasons', value: '4' },
    ],
    achievements: [
      'Regional Championships — 2nd, varsity 4+ (2025)',
      'Club record holder, novice 2k (2023)',
      'Team captain, 2025–26 season',
      'Head of the Lake finalist (2024)',
    ],
  },
]

export const coaches: Coach[] = [
  {
    slug: 'rebecca-lin',
    name: 'Rebecca Lin',
    initials: 'RL',
    title: 'Head Coach, Women\'s Rowing',
    school: 'Kenyon College',
    division: 'D3',
    location: 'Gambier, OH',
    sport: 'Rowing',
    verified: true,
    active: 'Active this week',
    bio: "I've led Kenyon women's rowing for eight seasons, building a program that competes hard and graduates thoughtful people. I recruit for grit and coachability as much as splits — if you love the work, we want to talk.",
    recruiting: [
      'Classes of 2026 and 2027',
      'Women\'s sweep rowers and coxswains',
      'Sub-7:45 2k erg (walk-on spots for developing rowers)',
      'GPA 3.3+ — Kenyon is academics-first',
    ],
  },
]

export const findAthlete = (slug: string) => athletes.find((a) => a.slug === slug)
export const findCoach = (slug: string) => coaches.find((c) => c.slug === slug)
