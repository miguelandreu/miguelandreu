import { LanguageSwitch } from './LanguageSwitch'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#home">
          Miguel Andreu
        </a>
        <Nav />
        <div className={styles.controls}>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
