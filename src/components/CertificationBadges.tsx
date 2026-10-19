import { certifications } from '../data/certifications'
import { useLocale } from '../i18n/LocaleContext'
import styles from './CertificationBadges.module.css'

/** Badge images for the certifications that have one, grouped by issuer. */
export function CertificationBadges() {
  const { t } = useLocale()
  // sort() is stable, so badges from the same issuer keep their data order (newest first).
  const withBadge = certifications
    .filter((item) => item.badge)
    .sort((a, b) => a.issuer.localeCompare(b.issuer))

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
