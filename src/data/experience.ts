import type { Experience } from './types'

const madrid = { en: 'Madrid, Spain', es: 'Madrid, España' }

// Most recent first. Job titles are kept in English in both languages, as on LinkedIn.
export const experience: Experience[] = [
  {
    id: 'databricks-rsa',
    company: 'Databricks',
    companyLogo: '/logos/databricks.webp',
    role: {
      en: 'Resident Solution Architect / Forward Deployed Engineer (contractor)',
      es: 'Resident Solution Architect / Forward Deployed Engineer (contractor)',
    },
    start: '2026-10',
    end: null,
    location: madrid,
    highlights: { en: [], es: [] },
    tech: ['Databricks'],
  },
  {
    id: 'ultra-tendency-sa',
    company: 'Ultra Tendency',
    companyLogo: '/logos/ultra-tendency.webp',
    role: {
      en: 'Databricks Solutions Architect',
      es: 'Databricks Solutions Architect',
    },
    start: '2026-09',
    end: null,
    location: madrid,
    highlights: { en: [], es: [] },
    tech: ['Databricks'],
  },
  {
    id: 'astellas-tech-lead',
    company: 'Astellas Pharma',
    companyLogo: '/logos/astellas.webp',
    role: {
      en: 'Tech Lead & Data Architect',
      es: 'Tech Lead & Data Architect',
    },
    start: '2026-04',
    end: '2026-09',
    location: madrid,
    highlights: {
      en: [
        'Led the architecture of the global data foundation frameworks, with teams in America, Asia and Europe.',
        'The frameworks cut development time by over 70% and deployment time by over 80%.',
      ],
      es: [
        'Lideré la arquitectura de los frameworks fundacionales de datos globales, con equipos en América, Asia y Europa.',
        'Los frameworks redujeron el tiempo de desarrollo más de un 70 % y el de despliegue más de un 80 %.',
      ],
    },
    tech: ['Databricks', 'Azure', 'Data Mesh'],
  },
  {
    id: 'astellas-senior-de',
    company: 'Astellas Pharma',
    companyLogo: '/logos/astellas.webp',
    role: {
      en: 'Senior Data Engineer',
      es: 'Senior Data Engineer',
    },
    start: '2025-02',
    end: '2026-03',
    location: madrid,
    highlights: {
      en: ['Built scalable Databricks solutions and was the expert for the ingestion framework, the data marketplace and Fivetran.'],
      es: ['Desarrollé soluciones escalables en Databricks y fui el experto del framework de ingesta, el marketplace de datos y Fivetran.'],
    },
    tech: ['Databricks', 'Unity Catalog', 'Fivetran'],
  },
  {
    id: 'capitole-lead-architect',
    company: 'Capitole',
    companyLogo: '/logos/capitole.webp',
    role: {
      en: 'Lead Data Engineering & Data Architect',
      es: 'Lead Data Engineering & Data Architect',
    },
    start: '2024-05',
    end: '2025-02',
    location: madrid,
    highlights: {
      en: ['Designed lakehouse and Data Mesh architectures on Databricks, Azure and GCP, including data modelling and CI/CD.'],
      es: ['Diseñé arquitecturas lakehouse y Data Mesh en Databricks, Azure y GCP, incluyendo modelado de datos y CI/CD.'],
    },
    tech: ['Databricks', 'Azure', 'GCP'],
  },
  {
    id: 'capitole-practice-lead',
    company: 'Capitole',
    companyLogo: '/logos/capitole.webp',
    role: {
      en: 'Data & AI Practice & Factory Lead',
      es: 'Data & AI Practice & Factory Lead',
    },
    start: '2023-10',
    end: '2025-02',
    location: madrid,
    highlights: {
      en: ['Led the Data & AI practice in Spain and managed the teams delivering Data, AI and DataOps projects.'],
      es: ['Lideré la práctica de Data & AI en España y gestioné los equipos que entregaban proyectos de Data, IA y DataOps.'],
    },
    tech: [],
  },
  {
    id: 'capitole-senior-de',
    company: 'Capitole',
    companyLogo: '/logos/capitole.webp',
    role: {
      en: 'Senior Data Engineer',
      es: 'Senior Data Engineer',
    },
    start: '2022-11',
    end: '2024-05',
    highlights: {
      en: ['Built Spark ETL pipelines on Databricks and Azure for one of the largest companies in the chemical sector.'],
      es: ['Desarrollé ETLs con Spark en Databricks y Azure para una de las mayores empresas del sector químico.'],
    },
    tech: ['Databricks', 'Spark', 'Python', 'Kafka', 'Azure DevOps'],
  },
  {
    id: 'capitole-de-ds',
    company: 'Capitole',
    companyLogo: '/logos/capitole.webp',
    role: {
      en: 'Data Engineer & Data Scientist',
      es: 'Data Engineer & Data Scientist',
    },
    start: '2020-12',
    end: '2022-11',
    highlights: {
      en: ['Built ETL pipelines and machine learning models on GCP for a major French retail multinational.'],
      es: ['Desarrollé ETLs y modelos de machine learning en GCP para una importante multinacional francesa del retail.'],
    },
    tech: ['GCP', 'BigQuery', 'Python', 'PostgreSQL'],
  },
  {
    id: 'samsung',
    company: 'Samsung España',
    companyLogo: '/logos/samsung.webp',
    role: {
      en: 'Software Engineer & Data Engineer',
      es: 'Software Engineer & Data Engineer',
    },
    start: '2018-11',
    end: '2020-11',
    highlights: {
      en: ['Automated ETL and reporting, and built apps for the Bixby voice assistant in the R&D department.'],
      es: ['Automaticé ETLs y reportes, y desarrollé aplicaciones para el asistente de voz Bixby en el departamento de I+D.'],
    },
    tech: ['Python', 'Elasticsearch', 'JavaScript', 'Java'],
  },
  {
    id: 'ikea',
    company: 'IKEA España',
    companyLogo: '/logos/ikea.webp',
    role: {
      en: 'Digitalization Specialist',
      es: 'Digitalization Specialist',
    },
    start: '2017-05',
    end: '2018-11',
    location: madrid,
    highlights: {
      en: ['Full-stack developer in the Web, eCommerce & Digital team.'],
      es: ['Desarrollador full-stack en el equipo de Web, eCommerce & Digital.'],
    },
    tech: [],
  },
]
