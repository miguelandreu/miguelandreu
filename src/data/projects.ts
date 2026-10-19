import type { Project } from './types'

// TODO: replace placeholder entries. Personal projects, most recent first.
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    summary: {
      en: 'This website: a bilingual React portfolio deployed on Cloudflare Workers.',
      es: 'Esta web: un portfolio bilingüe en React desplegado en Cloudflare Workers.',
    },
    year: 2026,
    tech: ['React', 'TypeScript', 'Cloudflare Workers'],
    links: { repo: 'https://example.com' },
  },
  {
    id: 'project-two',
    title: 'Project Name',
    summary: {
      en: 'One or two sentences on what it does, why you built it and what you learned.',
      es: 'Una o dos frases sobre qué hace, por qué lo creaste y qué aprendiste.',
    },
    year: 2025,
    tech: ['Python', 'FastAPI'],
    links: { repo: 'https://example.com', live: 'https://example.com' },
  },
  {
    id: 'project-three',
    title: 'Another Project',
    summary: {
      en: 'A short description of another personal project.',
      es: 'Una breve descripción de otro proyecto personal.',
    },
    year: 2024,
    tech: ['Go'],
    links: {},
  },
]
