import { certifications } from '../data/certifications'
import { useLocale } from '../i18n/LocaleContext'
import styles from './CertificationBadges.module.css'

/** Badge images for the certifications that have one. */
export function CertificationBadges() {
  const { t } = useLocale()
  const withBadge = certifications.filter((item) => item.badge)

  if (withBadge.length === 0) return null

  return (
    <ul className={styles.badges} aria-label={t.credentials.certifications}>
      {withBadge.map((item) => (
        <li key={item.id}>
          <img src={item.badge} alt={item.name} width="48" height="48" />
        </li>
      ))}
    </ul>
  )
}
