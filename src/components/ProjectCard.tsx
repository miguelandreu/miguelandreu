import type { Project } from '../data/types'
import { useLocale } from '../i18n/LocaleContext'
import { TagList } from './TagList'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale()
  const { repo, live } = project.links

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3>{project.title}</h3>
        {project.year && <span className={styles.year}>{project.year}</span>}
      </div>
      <p>{project.summary[locale]}</p>
      {project.tech.length > 0 && <TagList label={t.technologies} tags={project.tech} />}
      {(repo || live) && (
        <p className={styles.links}>
          {repo && (
            <a href={repo} aria-label={`${t.projects.code}: ${project.title}`}>
              {t.projects.code}
            </a>
          )}
          {live && (
            <a href={live} aria-label={`${t.projects.live}: ${project.title}`}>
              {t.projects.live}
            </a>
          )}
        </p>
      )}
    </li>
  )
}
