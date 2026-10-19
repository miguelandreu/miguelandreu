import styles from './TagList.module.css'

interface TagListProps {
  /** Accessible name for the list, e.g. "Technologies". */
  label: string
  tags: string[]
}

export function TagList({ label, tags }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
