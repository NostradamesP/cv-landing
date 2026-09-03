import { motion } from 'framer-motion'
import { MonitorPlay, Volume2, Clapperboard, Sun, Cable, Wrench } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function LiveEvent() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: MonitorPlay,
      title: t('liveEvent.skills.ledTitle'),
      desc: t('liveEvent.skills.ledDesc'),
    },
    {
      icon: Volume2,
      title: t('liveEvent.skills.audioTitle'),
      desc: t('liveEvent.skills.audioDesc'),
    },
    {
      icon: Clapperboard,
      title: t('liveEvent.skills.camerasTitle'),
      desc: t('liveEvent.skills.camerasDesc'),
    },
    {
      icon: Sun,
      title: t('liveEvent.skills.lightingTitle'),
      desc: t('liveEvent.skills.lightingDesc'),
    },
    {
      icon: Cable,
      title: t('liveEvent.skills.assemblyTitle'),
      desc: t('liveEvent.skills.assemblyDesc'),
    },
    {
      icon: Wrench,
      title: t('liveEvent.skills.troubleshootingTitle'),
      desc: t('liveEvent.skills.troubleshootingDesc'),
    },
  ]

  return (
    <section id="live-event" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent uppercase tracking-[0.2em]"
          >
            {t('liveEvent.sectionBadge')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            {t('liveEvent.sectionHeadingPrefix')} <span className="gradient-text">{t('liveEvent.sectionHeadingGradient')}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            {t('liveEvent.sectionDescription')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{title}</h3>
              <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}