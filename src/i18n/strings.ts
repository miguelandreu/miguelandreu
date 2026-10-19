import type { SectionId } from '../data/sections'
import type { Localized } from './locale'

export interface UiStrings {
  skipToContent: string
  language: string
  navLabel: string
  theme: { toLight: string; toDark: string }
  sections: Record<SectionId, string>
  home: { viewProjects: string; contact: string }
  about: {
    education: string
    certifications: string
    issued: string
    expires: string
    viewCredential: string
  }
  present: string
}

export const strings: Localized<UiStrings> = {
  en: {
    skipToContent: 'Skip to content',
    language: 'Language',
    navLabel: 'Main',
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    sections: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    home: { viewProjects: 'View projects', contact: 'Get in touch' },
    about: {
      education: 'Education',
      certifications: 'Certifications',
      issued: 'Issued',
      expires: 'Expires',
      viewCredential: 'View credential',
    },
    present: 'Present',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    language: 'Idioma',
    navLabel: 'Principal',
    theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    sections: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    home: { viewProjects: 'Ver proyectos', contact: 'Contactar' },
    about: {
      education: 'Formación',
      certifications: 'Certificaciones',
      issued: 'Emitida',
      expires: 'Caduca',
      viewCredential: 'Ver credencial',
    },
    present: 'Actualidad',
  },
}
