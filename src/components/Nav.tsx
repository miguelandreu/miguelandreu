import { sectionIds } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Nav.module.css'

export function Nav() {
  const { t } = useLocale()
  const active = useActiveSection(sectionIds)

  return (
    <nav className={styles.nav} aria-label={t.navLabel}>
      <ul className={styles.list}>
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              className={styles.link}
              href={`#${id}`}
              aria-current={id === active ? 'true' : undefined}
            >
              {t.sections[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
