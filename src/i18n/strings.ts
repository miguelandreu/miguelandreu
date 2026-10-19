import type { SectionId } from '../data/sections'
import type { SocialId } from '../data/types'
import type { Localized } from './locale'

export interface UiStrings {
  skipToContent: string
  language: string
  navLabel: string
  theme: { toLight: string; toDark: string }
  sections: Record<SectionId, string>
  home: { contact: string }
  about: {
    education: string
    certifications: string
    viewCredential: string
  }
  projects: { title: string; code: string; live: string }
  present: string
  technologies: string
  social: Record<SocialId, string>
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
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: { contact: 'Get in touch' },
    about: {
      education: 'Education',
      certifications: 'Certifications',
      viewCredential: 'View credential',
    },
    projects: { title: 'Personal projects', code: 'Code', live: 'Live site' },
    present: 'Present',
    technologies: 'Technologies',
    social: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
  },
  es: {
    skipToContent: 'Saltar al contenido',
    language: 'Idioma',
    navLabel: 'Principal',
    theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    sections: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    home: { contact: 'Contactar' },
    about: {
      education: 'Formación',
      certifications: 'Certificaciones',
      viewCredential: 'Ver credencial',
    },
    projects: { title: 'Proyectos personales', code: 'Código', live: 'Ver web' },
    present: 'Actualidad',
    technologies: 'Tecnologías',
    social: { email: 'Correo', github: 'GitHub', linkedin: 'LinkedIn' },
  },
}
