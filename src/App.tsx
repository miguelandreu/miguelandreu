import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useLocale } from './i18n/LocaleContext'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Home } from './sections/Home'
import { Projects } from './sections/Projects'

function App() {
  const { t } = useLocale()

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
