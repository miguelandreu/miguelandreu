import type { Experience } from './types'

// TODO: replace placeholder entries. Most recent first.
export const experience: Experience[] = [
  {
    id: 'current-company',
    company: 'Company Name',
    companyUrl: 'https://example.com',
    role: {
      en: 'Software Engineer',
      es: 'Ingeniero de software',
    },
    start: '2022-03',
    end: null,
    location: {
      en: 'Remote',
      es: 'En remoto',
    },
    highlights: {
      en: [
        'A key achievement, ideally with a measurable result.',
        'Another responsibility or project you are proud of.',
      ],
      es: [
        'Un logro clave, idealmente con un resultado medible.',
        'Otra responsabilidad o proyecto del que estés orgulloso.',
      ],
    },
    tech: ['TypeScript', 'React', 'Node.js'],
  },
  {
    id: 'previous-company',
    company: 'Previous Company',
    role: {
      en: 'Junior Developer',
      es: 'Desarrollador júnior',
    },
    start: '2020-01',
    end: '2022-02',
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    highlights: {
      en: ['What you worked on and what you learned.'],
      es: ['En qué trabajaste y qué aprendiste.'],
    },
    tech: ['JavaScript', 'SQL'],
  },
]
