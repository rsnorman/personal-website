import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'julysoundcheck',
    name: 'July Sound Check',
    description:
      'Tweet-sized reviews of albums for new-to-you artists. A daily music discovery challenge.',
    technologies: ['Ruby'],
    githubUrl: 'https://github.com/rsnorman/julysoundcheck',
    featured: true,
  },
  {
    id: 'tripsplit',
    name: 'TripSplit',
    description:
      'Web application for splitting trip expenses among travel companions.',
    technologies: ['Ruby', 'React Native'],
    githubUrl: 'https://github.com/rsnorman/tripsplit',
    featured: true,
  },
  {
    id: 'review-randomizer',
    name: 'Review Randomizer',
    description:
      'Assigns random team members for pull request review, streamlining the code review process.',
    technologies: ['Ruby'],
    githubUrl: 'https://github.com/rsnorman/review-randomizer',
    featured: true,
  },
  {
    id: 'weekly-album-anniversaries',
    name: 'Weekly Album Anniversaries',
    description:
      'Displays weekly album anniversaries to celebrate music milestones.',
    technologies: ['HTML', 'JavaScript'],
    githubUrl: 'https://github.com/rsnorman/weekly_album_anniversaries',
    featured: false,
  },
  {
    id: 'avengersassemble',
    name: 'Avengers Assemble',
    description: 'A fun JavaScript project inspired by the Marvel universe.',
    technologies: ['JavaScript'],
    githubUrl: 'https://github.com/rsnorman/avengersassemble',
    featured: false,
  },
];
