import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { getInitialLocale, saveLocale, type Locale } from './locale'
import { LocaleContext } from './LocaleContext'
import { strings } from './strings'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next: Locale) => {
        setLocaleState(next)
        saveLocale(next)
      },
      t: strings[locale],
    }),
    [locale],
  )

  return <LocaleContext value={value}>{children}</LocaleContext>
}
