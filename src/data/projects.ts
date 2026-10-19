import type { Project } from './types'

// Personal projects, most recent first.
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    summary: {
      en: 'This website: a bilingual (English/Spanish) portfolio built with React and TypeScript and deployed on Cloudflare Workers.',
      es: 'Esta web: un portfolio bilingüe (inglés/español) hecho con React y TypeScript y desplegado en Cloudflare Workers.',
    },
    year: 2026,
    tech: ['React', 'TypeScript', 'Cloudflare Workers'],
    links: { repo: 'https://github.com/miguelandreu/miguelandreu' },
  },
  {
    id: 'weekly-menu-helper',
    title: 'Weekly Menu Agent',
    summary: {
      en: 'A planner for the weekly meal menu. Based on meal preferences, dietary restrictions and available ingredients, it generates a weekly menu with recipes and a shopping list.',
      es: 'Un planificador del menú semanal. Basado en las preferencias de comida, restricciones dietéticas y los ingredientes disponibles, genera un menú semanal con recetas y una lista de compras.',
    },
    year: 2026,
    tech: ['OpenAI API', 'GitHub Actions', 'Python'],
    // TODO: add the repo link (https://github.com/miguelandreu/weekly_menu_helper) once the
    // repository is public; it is private now, so the link would 404 for visitors.
    links: {},
  },
  {
    id: 'dabs-metadata',
    title: 'SDP Metadata-driven Medallion Pipelines',
    summary: {
      en: 'Metadata-driven medallion pipelines on Databricks: Spark Declarative Pipelines generated from configuration and deployed with Databricks Asset Bundles.',
      es: 'Pipelines medallón dirigidos por metadatos en Databricks: Spark Declarative Pipelines generados a partir de configuración y desplegados con Databricks Asset Bundles.',
    },
    year: 2025,
    tech: ['Python', 'Databricks', 'Asset Bundles', 'Spark Declarative Pipelines'],
    links: { repo: 'https://github.com/miguelandreu/dabs-metadata' },
  },
]
