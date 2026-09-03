import { createContext, useContext, useState, useEffect } from 'react'
import es from './es.json'
import en from './en.json'

const translations = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('cv-lang')
      return saved === 'en' || saved === 'es' ? saved : 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cv-lang', lang)
    } catch {}
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  const t = (key) => {
    const dict = translations[lang]
    const value = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), dict)
    return value !== undefined ? value : key
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}