import type { SectionId } from '../data/sections'
import type { Localized } from './locale'

export interface UiStrings {
  skipToContent: string
  language: string
  navLabel: string
  theme: { toLight: string; toDark: string }
  sections: Record<SectionId, string>
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
  },
}
