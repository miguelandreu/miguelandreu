import { createContext, useContext } from 'react'
import type { Locale } from './locale'
import type { UiStrings } from './strings'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UiStrings
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
