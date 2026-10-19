import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projects } from '../data/projects'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useLocale()

  return (
    <Section id="projects" title={t.projects.title}>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  )
}
