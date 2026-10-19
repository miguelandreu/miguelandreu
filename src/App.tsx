import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { profile } from './data/profile'
import { useLocale } from './i18n/LocaleContext'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Home } from './sections/Home'
import { Projects } from './sections/Projects'

function App() {
  const { locale, t } = useLocale()

  // index.html ships the English title and description; translate them for the visitor.
  useEffect(() => {
    document.title = `${profile.name} · ${profile.role[locale]}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', profile.intro[locale])
  }, [locale])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Header />
      <main id="main" className="container">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
