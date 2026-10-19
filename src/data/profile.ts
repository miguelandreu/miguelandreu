import type { Profile } from './types'

// Based on the LinkedIn summary. Keep intro in sync with the description in index.html.
export const profile: Profile = {
  name: 'Miguel Andreu',
  role: {
    en: 'Databricks Solutions Architect / Forward Deployed Engineer',
    es: 'Databricks Solutions Architect / Forward Deployed Engineer',
  },
  intro: {
    en: 'Data architect and tech lead with 8 years of experience designing and building scalable data platforms on Databricks, Azure and GCP.',
    es: 'Arquitecto de datos y tech lead con 8 años de experiencia diseñando e implementando plataformas de datos escalables en Databricks, Azure y GCP.',
  },
  bio: {
    en: [
      "I'm a data architect and tech lead with a Master's in Big Data and Data Science from the Universidad Autónoma de Madrid. Today I work as a Databricks Solutions Architect and Forward Deployed Engineer.",
      "Before that, I led the architecture and engineering of the foundational frameworks of Astellas Pharma's global data platform, managing internal and external teams across Asia, Europe and America.",
      'I have worked in the pharmaceutical, retail, automotive and chemical sectors, with deep knowledge of enterprise-grade Data Mesh, Data Lakehouse and DataOps.',
    ],
    es: [
      'Soy arquitecto de datos y tech lead, con un Máster en Big Data y Data Science por la Universidad Autónoma de Madrid. Actualmente trabajo como Databricks Solutions Architect y Forward Deployed Engineer.',
      'Antes lideré la arquitectura e ingeniería de los frameworks fundacionales de la plataforma de datos global de Astellas Pharma, gestionando equipos internos y externos en Asia, Europa y América.',
      'He trabajado en los sectores farmacéutico, minorista, automotriz y químico, con un profundo conocimiento de Data Mesh, Data Lakehouse y DataOps a nivel empresarial.',
    ],
  },
  contactIntro: {
    en: 'I am open to new opportunities and collaborations. The best way to reach me is by email.',
    es: 'Estoy abierto a nuevas oportunidades y colaboraciones. La mejor forma de contactarme es por correo.',
  },
}
