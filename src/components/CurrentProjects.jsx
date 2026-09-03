import { motion } from 'framer-motion'
import { FileText, Kanban, Boxes, BrainCircuit } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function CurrentProjects() {
  const { t } = useLanguage()

  const projects = [
    {
      icon: FileText,
      title: 'FactuRD',
      tag: t('currentProjects.facturdTag'),
      tone: 'text-blue-600 bg-blue-50 border-blue-200',
      progress: 80,
      gradient: 'from-blue-500 to-indigo-400',
      desc: t('currentProjects.facturdDesc'),
    },
    {
      icon: Kanban,
      title: 'NoraHR — Kanban IT',
      tag: t('currentProjects.norahrTag'),
      tone: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      progress: 90,
      gradient: 'from-emerald-500 to-teal-400',
      desc: t('currentProjects.norahrDesc'),
    },
    {
      icon: Boxes,
      title: 'NoraStack',
      tag: t('currentProjects.norastackTag'),
      tone: 'text-violet-600 bg-violet-50 border-violet-200',
      progress: 65,
      gradient: 'from-violet-500 to-fuchsia-400',
      desc: t('currentProjects.norastackDesc'),
    },
    {
      icon: BrainCircuit,
      title: 'AI Video Pipeline',
      tag: t('currentProjects.aivideoTag'),
      tone: 'text-amber-600 bg-amber-50 border-amber-200',
      progress: 40,
      gradient: 'from-amber-500 to-orange-400',
      desc: t('currentProjects.aivideoDesc'),
    },
  ]

  return (
    <section id="current-projects" className="section-padding bg-white relative overflow-hidden">
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
            {t('currentProjects.sectionLabel')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            {t('currentProjects.sectionHeadingPrefix')} <span className="gradient-text">{t('currentProjects.sectionHeadingHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            {t('currentProjects.sectionSubtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {projects.map(({ icon: Icon, title, tag, tone, progress, gradient, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} />
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold rounded-full border ${tone}`}
                >
                  {tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-4">{desc}</p>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-500 tabular-nums">{progress}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}