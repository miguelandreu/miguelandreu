import { Section } from '../components/Section'
import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { profile } from '../data/profile'
import type { Certification, Education } from '../data/types'
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

      <h3 className={styles.subtitle}>{t.about.education}</h3>
      <ul className={styles.list}>
        {education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </ul>

      <h3 className={styles.subtitle}>{t.about.certifications}</h3>
      <ul className={styles.grid}>
        {certifications.map((item) => (
          <CertificationCard key={item.id} item={item} />
        ))}
      </ul>
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

/** Name, issuer and year; the whole card links to the credential when there is one. */
function CertificationCard({ item }: { item: Certification }) {
  const { t } = useLocale()
  const year = item.issued.slice(0, 4)

  const content = (
    <>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.meta}>
        {item.issuer} · <time dateTime={item.issued}>{year}</time>
      </span>
    </>
  )

  return (
    <li>
      {item.credentialUrl ? (
        <a className={`${styles.card} ${styles.cardLink}`} href={item.credentialUrl}>
          {content}
          <span className="visually-hidden">{t.about.viewCredential}</span>
          <svg className={styles.linkIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      ) : (
        <div className={styles.card}>{content}</div>
      )}
    </li>
  )
}
