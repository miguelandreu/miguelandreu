import type { Localized } from './locale'

export interface UiStrings {
  skipToContent: string
  language: string
  nav: {
    label: string
    home: string
    about: string
    projects: string
    experience: string
    contact: string
  }
}

export const strings: Localized<UiStrings> = {
  en: {
    skipToContent: 'Skip to content',
    language: 'Language',
    nav: {
      label: 'Main',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
  },
  es: {
    skipToContent: 'Saltar al contenido',
    language: 'Idioma',
    nav: {
      label: 'Principal',
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
  },
}
