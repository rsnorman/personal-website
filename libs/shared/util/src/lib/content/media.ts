export const CATEGORIES = [
  { id: 'music', label: 'music' },
  { id: 'books', label: 'books' },
  { id: 'movies', label: 'movies' },
  { id: 'games', label: 'games' },
  { id: 'vinyl', label: 'vinyl' },
] as const;

export type MediaCategory = (typeof CATEGORIES)[number]['id'];
