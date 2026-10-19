import type { ReactNode } from 'react'
import type { SectionId } from '../data/sections'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Section.module.css'

interface SectionProps {
  id: SectionId
  children: ReactNode
}

/** A page section with its anchor id and translated <h2> heading. */
export function Section({ id, children }: SectionProps) {
  const { t } = useLocale()
  const titleId = `${id}-title`

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.title}>
        {t.sections[id]}
      </h2>
      {children}
    </section>
  )
}
