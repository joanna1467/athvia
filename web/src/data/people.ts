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
    sport: 'Dance',
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
  {
    slug: 'maya-torres',
    name: 'Maya Torres',
    initials: 'MT',
    sport: 'Fencing',
    gradYear: '2026',
    city: 'Houston',
    state: 'TX',
    height: `5'6"`,
    status: 'Being recruited',
    target: ['D3', 'NAIA', 'D2'],
    bio: "Épée fencer with a C2024 rating and eight years of club training. I love the chess side of fencing — reading opponents, adjusting mid-bout. Looking for a selective D3 school where I can fence varsity and study biomedical engineering.",
    academics: [
      { label: 'GPA', value: '3.95', note: 'unweighted' },
      { label: 'SAT', value: '1520', note: '' },
      { label: 'ACT', value: '—', note: 'not taken' },
    ],
    fitSummary: 'Strong D3 fit',
    fitIntro: "Fencing is a small, academics-heavy college sport — most varsity programs sit at selective schools, so Maya's transcript is as much a recruiting asset as her rating.",
    academicFit: 'A 3.95 GPA with a 1520 SAT puts selective D3 programs squarely in range — in college fencing, that academic profile opens more doors than any single result.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'Her C rating and national-event experience match varsity D3 rosters, and her academics fit the selective schools where those programs live.' },
      { level: 'NAIA', verdict: 'Competitive', tone: 'mid', note: 'Few NAIA fencing programs exist — strong club options at NAIA schools are the realistic path.' },
      { level: 'NCAA D2', verdict: 'Developing', tone: 'low', note: 'D2 fencing programs are rare; keeping D3 focus is the honest play.' },
    ],
    stats: [
      { label: 'Weapon', value: 'Épée' },
      { label: 'USA Fencing rating', value: 'C2024' },
      { label: 'Club', value: 'Space City Fencing Academy' },
      { label: 'Years training', value: '8' },
    ],
    achievements: [
      'NAC Division II — top 16 (2025)',
      'Texas Division JO qualifier, 3 straight years',
      'Regional circuit — 2 gold, 4 podium finishes',
      'Club captain, 2025–26',
    ],
  },
  {
    slug: 'ethan-brooks',
    name: 'Ethan Brooks',
    initials: 'EB',
    sport: 'Football',
    gradYear: '2027',
    city: 'Columbus',
    state: 'OH',
    height: `6'2"`,
    status: 'Open to offers',
    target: ['D2', 'NAIA', 'D3'],
    bio: "Outside linebacker and special-teams captain. Film guy — I watch more tape than anyone on my team and it shows in my reads. Want a program where I can compete early and study sports management.",
    academics: [
      { label: 'GPA', value: '3.4', note: 'unweighted' },
      { label: 'SAT', value: '1210', note: '' },
      { label: 'ACT', value: '26', note: '' },
    ],
    fitSummary: 'Strong D2/NAIA fit',
    fitIntro: "Based on Ethan's measurables, junior-season film, and academics — compared against what linebackers actually had when D2 and NAIA programs signed them.",
    academicFit: 'A 3.4 GPA clears D2 and NAIA eligibility comfortably and keeps academic-money conversations open at both levels.',
    fitRows: [
      { level: 'NCAA D2', verdict: 'Strong fit', tone: 'strong', note: 'His frame, 4.7 forty, and two-way film sit in the real range for D2 linebacker signees.' },
      { level: 'NAIA', verdict: 'Strong fit', tone: 'strong', note: 'NAIA football offers scholarships and recruits actively in Ohio — his profile matches starters at strong programs.' },
      { level: 'NCAA D3', verdict: 'Competitive', tone: 'mid', note: 'A safety-net level with excellent programs — his academics travel well here too.' },
    ],
    stats: [
      { label: 'Position', value: 'OLB / special teams' },
      { label: '40-yard dash', value: '4.72' },
      { label: 'Tackles (junior yr)', value: '87 (11 TFL)' },
      { label: 'Bench / squat', value: '265 / 405' },
    ],
    achievements: [
      'All-conference second team (2025)',
      'Special teams captain, two seasons',
      'Team defensive MVP (2025)',
      'Academic honor roll, 5 semesters',
    ],
  },
  {
    slug: 'priya-natarajan',
    name: 'Priya Natarajan',
    initials: 'PN',
    sport: 'Tennis',
    gradYear: '2028',
    city: 'Edison',
    state: 'NJ',
    height: `5'4"`,
    status: 'Building profile',
    target: ['D3', 'NAIA', 'D2'],
    bio: "Baseline grinder with a 7.9 UTR, climbing fast — up from 6.8 a year ago. I play USTA tournaments year-round. Early in my recruiting journey and using my sophomore year to get on coaches' radars.",
    academics: [
      { label: 'GPA', value: '4.0', note: 'unweighted' },
      { label: 'PSAT', value: '1380', note: 'SAT junior year' },
      { label: 'ACT', value: '—', note: 'not yet' },
    ],
    fitSummary: 'Strong D3 trajectory',
    fitIntro: "Priya is a 2028 grad, so this fit is a trajectory read: her UTR trend and academics compared against where players like her ended up signing two years later.",
    academicFit: 'A 4.0 through sophomore year makes academic D3 programs — where tennis rosters are strongest — a natural target list.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'A 7.9 UTR trending up is already in range for mid-tier D3 lineups — two more years of growth points higher.' },
      { level: 'NAIA', verdict: 'Competitive', tone: 'mid', note: 'NAIA tennis recruits internationally, so UTR bars can be high — but her curve keeps this open.' },
      { level: 'NCAA D2', verdict: 'Developing', tone: 'low', note: 'Reachable if the UTR climb continues into junior year — worth revisiting after spring results.' },
    ],
    stats: [
      { label: 'UTR', value: '7.9 (↑ from 6.8)' },
      { label: 'Play style', value: 'Baseline, heavy topspin' },
      { label: 'USTA section', value: 'Middle States' },
      { label: 'Tournaments/yr', value: '~20' },
    ],
    achievements: [
      'USTA L4 singles finalist (2026)',
      'Varsity #1 singles as a freshman',
      'County champion (2025)',
      '4.0 student — every semester',
    ],
  },
  {
    slug: 'marcus-webb',
    name: 'Marcus Webb',
    initials: 'MW',
    sport: 'Wrestling',
    gradYear: '2026',
    city: 'Des Moines',
    state: 'IA',
    height: `5'8"`,
    status: 'Being recruited',
    target: ['NAIA', 'D3', 'D2'],
    bio: "138-pounder, three-year varsity starter, 4th at state as a junior. Iowa wrestling is a different animal and I've earned every match. Looking for a room that trains hard and a school where I can study exercise science.",
    academics: [
      { label: 'GPA', value: '3.5', note: 'unweighted' },
      { label: 'ACT', value: '24', note: '' },
      { label: 'SAT', value: '—', note: 'not taken' },
    ],
    fitSummary: 'Strong NAIA fit',
    fitIntro: "Iowa high school wrestling is one of the toughest proving grounds in the country — a state placement there carries real recruiting weight at every level below D1.",
    academicFit: 'A 3.5 GPA and 24 ACT clear NAIA and D3 standards with room, keeping academic aid on the table alongside NAIA athletic money.',
    fitRows: [
      { level: 'NAIA', verdict: 'Strong fit', tone: 'strong', note: 'NAIA wrestling is deep in the Midwest and offers scholarships — a 4th-place Iowa state finish is exactly what these rooms recruit.' },
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'D3 wrestling in the Midwest is excellent, and his record matches nationally-ranked D3 lineups.' },
      { level: 'NCAA D2', verdict: 'Competitive', tone: 'mid', note: 'In range for D2 rosters — a state final appearance this year would seal it.' },
    ],
    stats: [
      { label: 'Weight class', value: '138 lbs' },
      { label: 'Record (junior yr)', value: '38–6' },
      { label: 'Career wins', value: '104' },
      { label: 'Style', value: 'Attacking, folkstyle + freestyle' },
    ],
    achievements: [
      'Iowa state — 4th place, 3A (2025)',
      'District champion, two years',
      '100-win club, junior year',
      'Freestyle state qualifier (USA Wrestling)',
    ],
  },
  {
    slug: 'sofia-reyes',
    name: 'Sofia Reyes',
    initials: 'SR',
    sport: 'Soccer',
    gradYear: '2027',
    city: 'San Diego',
    state: 'CA',
    height: `5'5"`,
    status: 'Open to offers',
    target: ['D3', 'D2', 'NAIA'],
    bio: "Attacking midfielder with an ECNL club and a motor that doesn't quit. I create — 14 assists last season. Bilingual, team-first, and looking for a program with real style of play and a strong psychology department.",
    academics: [
      { label: 'GPA', value: '3.7', note: 'unweighted' },
      { label: 'SAT', value: '1290', note: '' },
      { label: 'ACT', value: '—', note: 'not taken' },
    ],
    fitSummary: 'Strong D3 fit',
    fitIntro: "Based on Sofia's ECNL minutes, production, and academics — benchmarked against what attacking midfielders had when D3 and D2 programs recruited them.",
    academicFit: 'A 3.7 GPA with a 1290 SAT fits strong-academic D3 soccer schools and clears D2/NAIA standards everywhere.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'Consistent ECNL starter minutes plus real production is the classic profile of a strong D3 recruit in Southern California.' },
      { level: 'NCAA D2', verdict: 'Competitive', tone: 'mid', note: 'In range for D2 — a standout showcase season would push this to strong.' },
      { level: 'NAIA', verdict: 'Competitive', tone: 'mid', note: 'California NAIA programs recruit her profile actively; a genuine scholarship path.' },
    ],
    stats: [
      { label: 'Position', value: 'Attacking mid (8/10)' },
      { label: 'Club', value: 'ECNL — San Diego' },
      { label: 'Goals / assists (2025)', value: '9 / 14' },
      { label: 'Languages', value: 'English, Spanish' },
    ],
    achievements: [
      'ECNL playoff qualifier, two seasons',
      'League all-tournament team (2025)',
      'Varsity captain, junior year',
      'Club assist leader (2025)',
    ],
  },
  {
    slug: 'grace-kim',
    name: 'Grace Kim',
    initials: 'GK',
    sport: 'Swim',
    gradYear: '2026',
    city: 'Bellevue',
    state: 'WA',
    height: `5'7"`,
    status: 'Being recruited',
    target: ['D3', 'NAIA', 'D2'],
    bio: "Distance freestyler — the 500 is home. Year-round club swimmer, morning-practice person, spreadsheet keeper of my own splits. Chasing a D3 program with strong academics where I can swim all four years and study data science.",
    academics: [
      { label: 'GPA', value: '3.9', note: 'unweighted' },
      { label: 'SAT', value: '1450', note: '' },
      { label: 'ACT', value: '—', note: 'not taken' },
    ],
    fitSummary: 'Strong D3 fit',
    fitIntro: "Swimming is the most honest fit sport there is: times are verified and comparable. Grace's marks are matched directly against D3, D2, and NAIA roster times.",
    academicFit: 'A 3.9 GPA and 1450 SAT match the academic D3 schools where her times land — the rare case where athletic and academic fit point at the same list.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'A 5:04 in the 500 free scores at plenty of D3 conference meets today — she would contribute as a freshman.' },
      { level: 'NAIA', verdict: 'Strong fit', tone: 'strong', note: 'Her times sit comfortably within NAIA championship-qualifying range, with scholarship potential.' },
      { level: 'NCAA D2', verdict: 'Competitive', tone: 'mid', note: 'Dropping ~4 seconds in the 500 puts mid-pack D2 rosters in play — the trajectory says possible.' },
    ],
    stats: [
      { label: '500 free', value: '5:04.2' },
      { label: '200 free', value: '1:55.8' },
      { label: '1000 free', value: '10:32' },
      { label: 'Club', value: 'Bellevue Aquatics' },
    ],
    achievements: [
      'State meet finalist — 500 free (2025)',
      'Regional champion, 1000 free (2025)',
      'Club record, 17-18 1000 free',
      'Scholastic All-America nominee',
    ],
  },
  {
    slug: 'tyler-nguyen',
    name: 'Tyler Nguyen',
    initials: 'TN',
    sport: 'Cross country',
    gradYear: '2028',
    city: 'Sacramento',
    state: 'CA',
    height: `5'10"`,
    status: 'Building profile',
    target: ['D3', 'NAIA', 'D2'],
    bio: "Sophomore distance runner dropping time fast — 16:44 5K as a freshman, 15:58 this fall. I run 45-mile weeks and love the long game. Starting recruiting early because the numbers say I should.",
    academics: [
      { label: 'GPA', value: '3.8', note: 'unweighted' },
      { label: 'PSAT', value: '1310', note: 'SAT junior year' },
      { label: 'ACT', value: '—', note: 'not yet' },
    ],
    fitSummary: 'Strong D3 trajectory',
    fitIntro: "Tyler is a 2028 grad, so this is a trajectory read — and a 46-second freshman-to-sophomore drop is the kind of curve college distance coaches recruit on.",
    academicFit: 'A 3.8 GPA opens academic D3 programs — the deepest pool of strong cross country teams — and clears every NAIA standard.',
    fitRows: [
      { level: 'NCAA D3', verdict: 'Strong fit', tone: 'strong', note: 'A 15:58 5K as a sophomore already scores for many D3 programs; his improvement curve points toward top-half conference rosters.' },
      { level: 'NAIA', verdict: 'Competitive', tone: 'mid', note: 'NAIA cross country recruits his profile now — and offers scholarship money D3 cannot.' },
      { level: 'NCAA D2', verdict: 'Developing', tone: 'low', note: 'Sub-15:30 by junior fall makes D2 real. On his current curve, that is genuinely in reach.' },
    ],
    stats: [
      { label: '5K (XC)', value: '15:58' },
      { label: '3200m', value: '9:41' },
      { label: '1600m', value: '4:28' },
      { label: 'Weekly mileage', value: '45' },
    ],
    achievements: [
      'Section meet — 12th as a sophomore (2025)',
      'Freshman team record, 5K',
      'League all-first team (2025)',
      '46-second 5K drop in one year',
    ],
  },
  {
    slug: 'ava-mitchell',
    name: 'Ava Mitchell',
    initials: 'AM',
    sport: 'Cheerleading',
    gradYear: '2027',
    city: 'Nashville',
    state: 'TN',
    height: `5'2"`,
    status: 'Open to offers',
    target: ['NAIA', 'D2', 'D3'],
    bio: "Competitive cheerleader — flyer with a standing full and eight years of all-star experience. Most people don't know college cheer scholarships exist; I'm here to prove they do. Aiming NAIA, where competitive cheer is a real varsity sport.",
    academics: [
      { label: 'GPA', value: '3.6', note: 'unweighted' },
      { label: 'ACT', value: '25', note: '' },
      { label: 'SAT', value: '—', note: 'not taken' },
    ],
    fitSummary: 'Strong NAIA fit',
    fitIntro: "Competitive cheer is an NAIA emerging varsity sport with real scholarships, and STUNT is growing across NCAA D2 — Ava's fit reflects where funded programs actually exist.",
    academicFit: 'A 3.6 GPA and 25 ACT clear NAIA standards easily and add academic money to any athletic offer.',
    fitRows: [
      { level: 'NAIA', verdict: 'Strong fit', tone: 'strong', note: 'NAIA competitive cheer programs recruit elite all-star flyers with her skill set — standing full + flyer flexibility is exactly the profile.' },
      { level: 'NCAA D2', verdict: 'Competitive', tone: 'mid', note: 'STUNT is expanding fast at D2 — her skills transfer directly, and new programs mean open roster spots.' },
      { level: 'NCAA D3', verdict: 'Competitive', tone: 'mid', note: 'Strong club and game-day programs at D3 schools, though mostly without varsity status.' },
    ],
    stats: [
      { label: 'Position', value: 'Flyer' },
      { label: 'Top tumbling', value: 'Standing full, running double' },
      { label: 'All-star level', value: 'Level 6 (Worlds team)' },
      { label: 'Years', value: '8' },
    ],
    achievements: [
      'Cheerleading Worlds — team finalist (2025)',
      'NCA All-Star Nationals — 2nd, Level 6 (2024)',
      'Varsity game-day captain',
      'All-American nominee (2025)',
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
  {
    slug: 'marcus-hale',
    name: 'Marcus Hale',
    initials: 'MH',
    title: 'Head Coach, Track & Field',
    school: 'Grand Valley State University',
    division: 'D2',
    location: 'Allendale, MI',
    sport: 'Track and field',
    verified: true,
    active: 'Active this week',
    bio: "Fifteen years building sprinters and throwers at the D2 level. We win national trophies at GVSU, but I recruit development, not just marks — show me your progression and your work ethic and we'll talk.",
    recruiting: [
      'Classes of 2026 and 2027',
      'Sprints, hurdles, and throws — men\'s and women\'s',
      'Verified marks from sanctioned meets (progression matters as much as PRs)',
      'Partial athletic scholarships available',
    ],
  },
  {
    slug: 'dana-whitfield',
    name: 'Dana Whitfield',
    initials: 'DW',
    title: 'Head Coach, Competitive Cheer & Dance',
    school: 'College of Idaho',
    division: 'NAIA',
    location: 'Caldwell, ID',
    sport: 'Cheerleading',
    verified: true,
    active: 'Active today',
    bio: "I run one of the NAIA's emerging competitive cheer and dance programs — varsity status, real scholarships, real practice schedule. If you've been told your sport 'doesn't count' in college, send me your skills video.",
    recruiting: [
      'All-star cheerleaders — flyers and bases, Level 5+',
      'Competitive dancers — jazz, pom, and hip-hop backgrounds',
      'Skills video required (tumbling passes / technique reel)',
      'Athletic + academic scholarship stacking available',
    ],
  },
  {
    slug: 'james-oconnor',
    name: "James O'Connor",
    initials: 'JO',
    title: "Head Coach, Men's Soccer",
    school: 'Williams College',
    division: 'D3',
    location: 'Williamstown, MA',
    sport: 'Soccer',
    verified: true,
    active: 'Active this week',
    bio: "We play possession soccer at one of the strongest academic D3s in the country. Admissions is the first cut here — bring the transcript, then bring the film. Our players go pro in things other than soccer, and they're proud of it.",
    recruiting: [
      'Class of 2027 — center backs and attacking mids priority',
      'Full club season film (not just highlights)',
      'A- average or better — admissions drives everything',
      'Showcase schedule welcome; we travel to watch',
    ],
  },
]

export const findAthlete = (slug: string) => athletes.find((a) => a.slug === slug)
export const findCoach = (slug: string) => coaches.find((c) => c.slug === slug)
