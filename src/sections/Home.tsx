import { CertificationBadges } from '../components/CertificationBadges'
import { profile } from '../data/profile'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Home.module.css'

export function Home() {
  const { locale, t } = useLocale()

  return (
    <section id="home" className={styles.home} aria-labelledby="home-title">
      <CertificationBadges />
      <h1 id="home-title">{profile.name}</h1>
      <p className={styles.role}>{profile.role[locale]}</p>
      <p className={styles.intro}>{profile.intro[locale]}</p>
      <p className={styles.summary}>{profile.summary[locale]}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#contact">
          {t.home.contact}
        </a>
      </div>
    </section>
  )
}
