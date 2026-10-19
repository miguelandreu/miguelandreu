import { LanguageSwitch } from './LanguageSwitch'
import { Nav } from './Nav'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#home">
          Miguel Andreu
        </a>
        <Nav />
        <LanguageSwitch />
      </div>
    </header>
  )
}
