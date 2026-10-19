import type { Education } from './types'

// Most recent first.
export const education: Education[] = [
  {
    id: 'uoc-project-management',
    institution: 'Universitat Oberta de Catalunya',
    degree: {
      en: 'Postgraduate Diploma in Project Management',
      es: 'Postgrado en Gestión de Proyectos',
    },
    startYear: 2025,
    endYear: 2025,
  },
  {
    id: 'uam-big-data',
    institution: 'Universidad Autónoma de Madrid',
    degree: {
      en: "Master's in Big Data and Data Science",
      es: 'Máster en Big Data y Data Science',
    },
    startYear: 2019,
    endYear: 2021,
  },
  {
    id: 'ucav-web-programming',
    institution: 'Universidad Católica de Ávila',
    degree: {
      en: 'Technical Specialization in Web Programming',
      es: 'Especialización Técnica en Programación Web',
    },
    startYear: 2016,
    endYear: 2017,
  },
  {
    id: 'teide-dam',
    institution: 'Centro Teide IV',
    degree: {
      en: 'Higher Technician in Multiplatform Application Development',
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    },
    startYear: 2012,
    endYear: 2014,
  },
]
