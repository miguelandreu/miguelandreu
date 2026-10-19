import { InfoCard } from '../components/InfoCard'
import { Section } from '../components/Section'
import { certifications } from '../data/certifications'
import { education } from '../data/education'
import type { Education } from '../data/types'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Certifications.module.css'

export function Certifications() {
  const { locale, t } = useLocale()

  return (
    <Section id="certifications" title={t.credentials.title}>
      <h3 className={styles.subtitle}>{t.credentials.education}</h3>
      <ul className={styles.grid}>
        {education.map((item) => (
          <li key={item.id}>
            <InfoCard
              title={item.degree[locale]}
              subtitle={<EducationSubtitle item={item} />}
              href={item.institutionUrl}
            />
          </li>
        ))}
      </ul>

      <h3 className={styles.subtitle}>{t.credentials.certifications}</h3>
      <ul className={styles.grid}>
        {certifications.map((item) => (
          <li key={item.id}>
            <InfoCard
              title={item.name}
              subtitle={
                <>
                  {item.issuer} · <time dateTime={item.issued}>{item.issued.slice(0, 4)}</time>
                </>
              }
              href={item.credentialUrl}
              linkLabel={t.credentials.viewCredential}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}

/** 'Institution · 2019 – 2021', or a single year when start and end match. */
function EducationSubtitle({ item }: { item: Education }) {
  const { t } = useLocale()

  return (
    <>
      {item.institution} ·{' '}
      <span className={styles.years}>
        <time dateTime={String(item.startYear)}>{item.startYear}</time>
        {item.endYear !== item.startYear && (
          <>
            {' – '}
            {item.endYear ? <time dateTime={String(item.endYear)}>{item.endYear}</time> : t.present}
          </>
        )}
      </span>
    </>
  )
}
