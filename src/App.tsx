import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useLocale } from './i18n/LocaleContext'

function App() {
  const { t } = useLocale()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Header />
      <main id="main" className="container">
        <h1>Miguel Andreu</h1>
      </main>
      <Footer />
    </>
  )
}

export default App
