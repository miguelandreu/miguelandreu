import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import styles from './ThemeToggle.module.css'

type Theme = 'light' | 'dark'

// Must match the inline script in index.html that applies the saved theme before first paint.
const storageKey = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'

function getInitialTheme(): Theme {
  const forced = document.documentElement.dataset.theme
  if (forced === 'light' || forced === 'dark') return forced
  return matchMedia(darkQuery).matches ? 'dark' : 'light'
}

export function ThemeToggle() {
  const { t } = useLocale()
  const [theme, setTheme] = useState(getInitialTheme)

  // Follow system changes until the visitor picks a theme themselves.
  useEffect(() => {
    const query = matchMedia(darkQuery)
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setTheme(query.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // Not persisting the choice is acceptable.
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
      onClick={toggle}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
