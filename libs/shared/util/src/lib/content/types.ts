export interface BioProfile {
  name: string;
  title: string;
  location: string;
  summary: string;
  tagline: string;
  avatarAlt: string;
}

export interface CareerRole {
  title: string;
  startYear: number;
  endYear: number | null;
}

export interface CareerExperience {
  id: string;
  company: string;
  companyDescription: string;
  roles: CareerRole[];
  highlights: string[];
  order: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  activities?: string[];
  order: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  handle: string;
  icon: string;
}
