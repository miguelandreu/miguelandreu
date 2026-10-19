import { localeNames, locales } from '../i18n/locale'
import { useLocale } from '../i18n/LocaleContext'
import styles from './LanguageSwitch.module.css'

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className={styles.switch} role="group" aria-label={t.language}>
      {locales.map((option) => (
        <button
          key={option}
          type="button"
          className={styles.option}
          lang={option}
          aria-label={localeNames[option]}
          aria-pressed={option === locale}
          onClick={() => setLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
