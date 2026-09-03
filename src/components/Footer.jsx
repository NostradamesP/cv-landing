import { Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          {t('footer.copyright').replace('{year}', new Date().getFullYear())}
        </p>
        <p className="text-xs flex items-center gap-1">
          {t('footer.builtWith')} <Heart size={10} className="text-red-400" /> {t('footer.usingStack')}
        </p>
      </div>
    </footer>
  )
}