import { Section } from '../components/Section'
import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { profile } from '../data/profile'
import type { Certification, Education } from '../data/types'
import { formatYearMonth } from '../i18n/format'
import { useLocale } from '../i18n/LocaleContext'
import styles from './About.module.css'

export function About() {
  const { locale, t } = useLocale()

  return (
    <Section id="about">
      <div className={styles.bio}>
        {profile.bio[locale].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.columns}>
        <div>
          <h3 className={styles.subtitle}>{t.about.education}</h3>
          <ul className={styles.list}>
            {education.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subtitle}>{t.about.certifications}</h3>
          <ul className={styles.list}>
            {certifications.map((item) => (
              <CertificationItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function EducationItem({ item }: { item: Education }) {
  const { locale, t } = useLocale()

  return (
    <li>
      <p className={styles.name}>{item.degree[locale]}</p>
      <p className={styles.meta}>
        {item.institutionUrl ? <a href={item.institutionUrl}>{item.institution}</a> : item.institution}
        {' · '}
        <time dateTime={String(item.startYear)}>{item.startYear}</time>
        {item.endYear !== item.startYear && (
          <>
            {' – '}
            {item.endYear ? <time dateTime={String(item.endYear)}>{item.endYear}</time> : t.present}
          </>
        )}
      </p>
      {item.description && <p className={styles.description}>{item.description[locale]}</p>}
    </li>
  )
}

function CertificationItem({ item }: { item: Certification }) {
  const { locale, t } = useLocale()

  return (
    <li>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.meta}>
        {item.issuer}
        {' · '}
        {t.about.issued} <time dateTime={item.issued}>{formatYearMonth(item.issued, locale)}</time>
        {item.expires && (
          <>
            {' · '}
            {t.about.expires} <time dateTime={item.expires}>{formatYearMonth(item.expires, locale)}</time>
          </>
        )}
      </p>
      {item.credentialUrl && (
        <a
          className={styles.credential}
          href={item.credentialUrl}
          aria-label={`${t.about.viewCredential}: ${item.name}`}
        >
          {t.about.viewCredential}
        </a>
      )}
    </li>
  )
}
