import type { Education } from './types'

// TODO: replace placeholder entries. Most recent first.
export const education: Education[] = [
  {
    id: 'masters',
    institution: 'University Name',
    degree: {
      en: "Master's in Software Engineering",
      es: 'Máster en Ingeniería del Software',
    },
    startYear: 2019,
    endYear: 2020,
  },
  {
    id: 'bachelors',
    institution: 'University Name',
    degree: {
      en: "Bachelor's in Computer Science",
      es: 'Grado en Ingeniería Informática',
    },
    startYear: 2015,
    endYear: 2019,
    description: {
      en: 'Optional note, e.g. a specialization or final project.',
      es: 'Nota opcional, por ejemplo una especialidad o el trabajo de fin de grado.',
    },
  },
]
