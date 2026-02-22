import { CareerExperience } from './types';

export const experiences: CareerExperience[] = [
  {
    id: 'primum',
    company: 'Primum',
    companyDescription:
      'Healthcare technology startup connecting community oncologists with expert peers for consultation on complex cancer cases.',
    roles: [
      {
        title: 'Principal Engineer',
        startYear: 2023,
        endYear: null,
      },
    ],
    highlights: [
      'Building the technical foundation for an oncology consultation platform serving 750+ oncologists across 37 states',
      'Driving engineering decisions at a high-growth startup where technology directly impacts cancer patient outcomes',
    ],
    order: 1,
  },
  {
    id: 'covermymeds',
    company: 'CoverMyMeds',
    companyDescription:
      'McKesson subsidiary removing medication access and affordability barriers for patients, providers, and pharmacies.',
    roles: [
      {
        title: 'Director of Engineering',
        startYear: 2021,
        endYear: 2023,
      },
      {
        title: 'Manager, Engineering',
        startYear: 2020,
        endYear: 2021,
      },
      {
        title: 'Staff Software Developer',
        startYear: 2019,
        endYear: 2020,
      },
      {
        title: 'Technical Lead',
        startYear: 2018,
        endYear: 2019,
      },
      {
        title: 'Senior Ruby on Rails Frontend Developer',
        startYear: 2016,
        endYear: 2018,
      },
    ],
    highlights: [
      'Led 50+ engineers and managers across multiple business units',
      'Established the strategic vision for technology platform modernization',
      'Architected the modernization of workforce management applications ensuring regulatory compliance',
      'Developed reference architecture and tooling foundations that enabled the launch of a new Specialty Hub product line',
      'Leveraged innovative products as catalysts for enterprise-wide technology advancement',
    ],
    order: 2,
  },
  {
    id: 'onlife-health',
    company: 'Onlife Health',
    companyDescription:
      'GuideWell company providing health and wellness programs for employers and health plans.',
    roles: [
      {
        title: 'Senior Ruby on Rails & AngularJS Developer',
        startYear: 2014,
        endYear: 2016,
      },
    ],
    highlights: [
      'Contributed to the transition of a health and wellness online program from .NET to Ruby on Rails',
    ],
    order: 3,
  },
  {
    id: 'dow-corning',
    company: 'Dow Corning',
    companyDescription:
      'Global leader in silicon-based technology, now part of Dow Inc.',
    roles: [
      {
        title: 'ASP.NET Programmer (Co-op)',
        startYear: 2008,
        endYear: 2010,
      },
    ],
    highlights: [
      'Built and updated websites and desktop applications used by thousands of employees',
    ],
    order: 4,
  },
];
