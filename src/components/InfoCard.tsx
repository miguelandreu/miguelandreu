import type { ReactNode } from 'react'
import styles from './InfoCard.module.css'

interface InfoCardProps {
  title: string
  subtitle: ReactNode
  /** When set, the whole card links here. */
  href?: string
  /** Screen-reader text appended to the link, e.g. "View credential". */
  linkLabel?: string
}

/** A compact card with a title and a muted subtitle, optionally linking out. */
export function InfoCard({ title, subtitle, href, linkLabel }: InfoCardProps) {
  const content = (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </>
  )

  if (!href) return <div className={styles.card}>{content}</div>

  return (
    <a className={`${styles.card} ${styles.link}`} href={href}>
      {content}
      {linkLabel && <span className="visually-hidden">{linkLabel}</span>}
      <svg className={styles.icon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </a>
  )
}
