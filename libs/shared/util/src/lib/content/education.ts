import { Education } from './types';

export const education: Education[] = [
  {
    id: 'northwood',
    institution: 'Northwood University',
    degree: 'MBA',
    location: 'Midland, MI',
    order: 1,
  },
  {
    id: 'svsu',
    institution: 'Saginaw Valley State University',
    degree: 'B.S. Computer Science',
    location: 'University Center, MI',
    activities: [
      "Men's Soccer (#15) — 3 goals in 7 starts with a game-winning goal",
    ],
    order: 2,
  },
];
