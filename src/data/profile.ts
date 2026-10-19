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
    en: 'Are you interested in knowing more about my work? The best way to reach me is by email.',
    es: '¿Estás interesado en saber más sobre mi trabajo? La mejor forma de contactarme es por correo.',
  },
}
