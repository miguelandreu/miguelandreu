import type { Profile } from './types'

export const profile: Profile = {
  name: 'Miguel Andreu',
  // TODO: replace placeholder role, intro and bio.
  role: {
    en: 'Software Engineer',
    es: 'Ingeniero de software',
  },
  intro: {
    en: 'A short introduction goes here: what you do, what you care about and what you are looking for.',
    es: 'Aquí va una breve presentación: a qué te dedicas, qué te importa y qué estás buscando.',
  },
  bio: {
    en: [
      'A first paragraph about who you are: your background and how you got into this field.',
      'A second paragraph about how you work, what you enjoy and what you do outside of work.',
    ],
    es: [
      'Un primer párrafo sobre quién eres: tu trayectoria y cómo llegaste a este campo.',
      'Un segundo párrafo sobre cómo trabajas, qué disfrutas y qué haces fuera del trabajo.',
    ],
  },
}
