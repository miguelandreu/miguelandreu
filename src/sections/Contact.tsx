import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { profile } from '../data/profile'
import { socialLinks } from '../data/social'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Contact.module.css'

/** 'mailto:you@example.com' → 'you@example.com', 'https://www.github.com/x' → 'github.com/x'. */
function displayHref(href: string) {
  return href.replace(/^(mailto:|https?:\/\/(www\.)?)/, '').replace(/\/$/, '')
}

export function Contact() {
  const { locale, t } = useLocale()

  return (
    <Section id="contact">
      <p className={styles.intro}>{profile.contactIntro[locale]}</p>
      <ul className={styles.links}>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a className={styles.link} href={link.href}>
              <SocialIcon id={link.id} />
              <span className={styles.label}>{t.social[link.id]}</span>
              <span className={styles.value}>{displayHref(link.href)}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
