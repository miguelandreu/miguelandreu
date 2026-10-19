import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useLocale } from './i18n/LocaleContext'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Home } from './sections/Home'

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
      </main>
      <Footer />
    </>
  )
}

export default App
