// One source of truth for sports across the landing page, sign-up, and search.

export const sportGroups = [
  {
    label: 'Mainstream',
    sports: [
      'Basketball', 'Football', 'Soccer', 'Baseball', 'Softball', 'Volleyball',
      'Track and field', 'Cross country', 'Tennis', 'Swim', 'Golf', 'Wrestling',
    ],
  },
  {
    label: 'Widely known',
    sports: [
      'Field hockey', 'Gymnastics', 'Lacrosse', 'Water polo', 'Ice hockey',
      'Rowing', 'Beach volleyball', 'Cheerleading', 'Dance',
    ],
  },
  {
    label: 'Niche & emerging',
    sports: [
      'Fencing', 'Equestrian', 'Rugby', 'Badminton', 'Table tennis',
      'Boxing', 'Skiing',
    ],
  },
]

// Flat, alphabetical list for dropdowns and filters.
export const sports = sportGroups
  .flatMap((g) => g.sports)
  .sort((a, b) => a.localeCompare(b))
