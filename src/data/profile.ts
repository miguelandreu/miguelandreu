import type { Profile } from './types'

// Based on the LinkedIn summary. Keep intro in sync with the description in index.html.
export const profile: Profile = {
  name: 'Miguel Andreu',
  role: {
    en: 'Databricks Solutions Architect / Forward Deployed Engineer',
    es: 'Databricks Solutions Architect / Forward Deployed Engineer',
  },
  intro: {
    en: "Data architect and tech lead with 8 years of experience designing scalable data platforms on Databricks, Azure and GCP for the pharmaceutical, retail, automotive and chemical sectors. Master's in Big Data and Data Science (Universidad Autónoma de Madrid) and Postgraduate Diploma in Project Management (Universitat Oberta de Catalunya).",
    es: 'Arquitecto de datos y tech lead con 8 años de experiencia diseñando plataformas de datos escalables en Databricks, Azure y GCP para los sectores farmacéutico, retail, automoción y químico. Máster en Big Data y Data Science (Universidad Autónoma de Madrid) y Postgrado en Gestión de Proyectos (Universitat Oberta de Catalunya).',
  },
  contactIntro: {
    en: 'Are you interested in knowing more about my work? The best way to reach me is by email.',
    es: '¿Estás interesado en saber más sobre mi trabajo? La mejor forma de contactarme es por correo.',
  },
}
