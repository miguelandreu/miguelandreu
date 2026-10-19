import { certifications } from '../data/certifications'
import { useLocale } from '../i18n/LocaleContext'
import styles from './CertificationBadges.module.css'

/** Badge images for the certifications that have one, linked to their credential. */
export function CertificationBadges() {
  const { t } = useLocale()
  const withBadge = certifications.filter((item) => item.badge)

  if (withBadge.length === 0) return null

  return (
    <ul className={styles.badges} aria-label={t.about.certifications}>
      {withBadge.map((item) => {
        const image = <img src={item.badge} alt={item.name} width="80" height="80" />
        return (
          <li key={item.id}>
            {item.credentialUrl ? (
              <a className={styles.link} href={item.credentialUrl}>
                {image}
              </a>
            ) : (
              image
            )}
          </li>
        )
      })}
    </ul>
  )
}
