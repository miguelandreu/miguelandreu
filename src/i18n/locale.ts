export const locales = ['en', 'es'] as const

export type Locale = (typeof locales)[number]

/** A value that must be provided for every supported locale. */
export type Localized<T = string> = Record<Locale, T>

/** Each language's name in that language, for the language switch. */
export const localeNames: Localized = { en: 'English', es: 'Español' }

const defaultLocale: Locale = 'en'
const storageKey = 'locale'

function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale)
}

/**
 * The visitor's saved choice if there is one, otherwise the first supported
 * language in their browser preferences, otherwise English.
 */
export function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(storageKey)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
  }

  for (const language of navigator.languages) {
    const base = language.slice(0, 2).toLowerCase()
    if (isLocale(base)) return base
  }

  return defaultLocale
}

export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(storageKey, locale)
  } catch {
    // Not persisting the choice is acceptable.
  }
}
