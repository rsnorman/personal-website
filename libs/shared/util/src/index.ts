export { theme } from './lib/constants/theme';
export type { ThemeColors } from './lib/constants/theme';

export type {
  BioProfile,
  CareerExperience,
  CareerRole,
  Project,
  Education,
  SocialLink,
} from './lib/content/types';

export { bio } from './lib/content/bio';
export { socialLinks } from './lib/content/social';
export { experiences } from './lib/content/experience';
export { projects } from './lib/content/projects';
export { education } from './lib/content/education';

export type {
  SpotifyTimeRange,
  SpotifyTrack,
  SpotifyArtist,
  SpotifyTopTracksResponse,
  SpotifyTopArtistsResponse,
} from './lib/content/spotify';

export { VALID_RANGES } from './lib/content/spotify';

export { CATEGORIES } from './lib/content/media';
export type { MediaCategory } from './lib/content/media';
