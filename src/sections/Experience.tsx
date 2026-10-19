import { Section } from '../components/Section'
import { TagList } from '../components/TagList'
import { experience } from '../data/experience'
import type { Experience as ExperienceEntry } from '../data/types'
import { formatYearMonth } from '../i18n/format'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section id="experience">
      <ol className={styles.list}>
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </ol>
    </Section>
  )
}

function ExperienceItem({ item }: { item: ExperienceEntry }) {
  const { locale, t } = useLocale()

  return (
    <li className={styles.item}>
      <p className={styles.dates}>
        <time dateTime={item.start}>{formatYearMonth(item.start, locale)}</time>
        {' – '}
        {item.end ? <time dateTime={item.end}>{formatYearMonth(item.end, locale)}</time> : t.present}
      </p>
      <div>
        <h3>{item.role[locale]}</h3>
        <p className={styles.company}>
          {item.companyUrl ? <a href={item.companyUrl}>{item.company}</a> : item.company}
          {item.location && ` · ${item.location[locale]}`}
        </p>
        {item.highlights[locale].length > 0 && (
          <ul className={styles.highlights}>
            {item.highlights[locale].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {item.tech.length > 0 && <TagList label={t.technologies} tags={item.tech} />}
      </div>
    </li>
  )
}
