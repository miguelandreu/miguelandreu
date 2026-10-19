import type { Profile } from './types'

// Based on the LinkedIn profile. Keep intro in sync with the description in index.html.
export const profile: Profile = {
  name: 'Miguel Andreu',
  role: {
    en: 'Databricks Solutions Architect / Forward Deployed Engineer',
    es: 'Databricks Solutions Architect / Forward Deployed Engineer',
  },
  intro: {
    en: 'I help companies build data platforms that scale and get data products into production faster. My latest frameworks cut development time by over 70%.',
    es: 'Ayudo a las empresas a construir plataformas de datos que escalan y a llevar sus productos de datos a producción más rápido. Mis últimos frameworks redujeron el tiempo de desarrollo más de un 70 %.',
  },
  summary: {
    en: '8 years designing lakehouse and Data Mesh architectures on Databricks, Azure and GCP for the pharmaceutical, retail, automotive and chemical sectors. Master’s in Big Data and Data Science (Universidad Autónoma de Madrid) and Postgraduate Diploma in Project Management (Universitat Oberta de Catalunya).',
    es: '8 años diseñando arquitecturas lakehouse y Data Mesh en Databricks, Azure y GCP para los sectores farmacéutico, retail, automoción y químico. Máster en Big Data y Data Science (Universidad Autónoma de Madrid) y Postgrado en Gestión de Proyectos (Universitat Oberta de Catalunya).',
  },
  contactIntro: {
    en: 'Are you interested in knowing more about my work? The best way to reach me is by email.',
    es: '¿Estás interesado en saber más sobre mi trabajo? La mejor forma de contactarme es por correo.',
  },
}
