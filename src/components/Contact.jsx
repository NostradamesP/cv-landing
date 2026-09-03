import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Contact() {
  const { t } = useLanguage()

  const methods = [
    { icon: Mail, label: t('contact.emailLabel'), value: 'norascript@gmail.com', href: 'mailto:norascript@gmail.com' },
    { icon: Phone, label: t('contact.phoneLabel'), value: '829-578-6284', href: 'tel:18295786284' },
    {
      icon: MapPin,
      label: t('contact.locationLabel'),
      value: t('contact.locationValue'),
      href: 'https://www.google.com/maps/search/Santo+Domingo,+Dominican+Republic',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-12 text-center shadow-[0_24px_60px_-40px_rgba(15,23,42,0.3)] overflow-hidden relative"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
          >
            {t('contact.sectionLabel')}
          </motion.span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t('contact.sectionHeadingPrefix')} <span className="gradient-text">{t('contact.sectionHeadingHighlight')}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {t('contact.sectionSubtitle')}
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="mt-8 grid sm:grid-cols-3 gap-3"
          >
            {methods.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-500 text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {label}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900 break-all">{value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:norascript@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-blue-500 px-7 py-3 font-bold text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              <Send size={16} />
              <span>{t('contact.ctaEmail')}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/eduardo-velasquez-437a3422a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 font-bold text-slate-700 hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              <LinkedinIcon size={16} />
              <span>{t('contact.ctaLinkedin')}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}