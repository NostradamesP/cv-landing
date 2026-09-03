import { motion } from 'framer-motion'
import { Target, Puzzle, Network, TrendingUp, FileText, Kanban, MonitorPlay } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function CaseStudies() {
  const { t } = useLanguage()

  const steps = [
    { key: 'challenge', label: t('cases.steps.challenge'), icon: Target, tone: 'bg-rose-500' },
    { key: 'solution', label: t('cases.steps.solution'), icon: Puzzle, tone: 'bg-amber-500' },
    { key: 'architecture', label: t('cases.steps.architecture'), icon: Network, tone: 'bg-cyan-500' },
    { key: 'result', label: t('cases.steps.result'), icon: TrendingUp, tone: 'bg-emerald-500' },
  ]

  const caseStudies = [
    {
      icon: FileText,
      title: 'FactuRD',
      gradient: 'from-blue-600 to-indigo-600',
      summary: t('cases.facturd.summary'),
      items: {
        challenge: t('cases.facturd.challenge'),
        solution: t('cases.facturd.solution'),
        architecture: t('cases.facturd.architecture'),
        result: t('cases.facturd.result'),
      },
      tags: ['React 19', 'FastAPI', 'PostgreSQL', 'Tauri', 'Docker'],
    },
    {
      icon: Kanban,
      title: 'NoraHR — Kanban IT',
      gradient: 'from-emerald-500 to-teal-500',
      summary: t('cases.norahr.summary'),
      items: {
        challenge: t('cases.norahr.challenge'),
        solution: t('cases.norahr.solution'),
        architecture: t('cases.norahr.architecture'),
        result: t('cases.norahr.result'),
      },
      tags: ['React', 'Firebase', '@dnd-kit', 'GitHub Actions'],
    },
    {
      icon: MonitorPlay,
      title: 'Event Pro Jinaite',
      gradient: 'from-rose-500 to-pink-500',
      summary: t('cases.eventpro.summary'),
      items: {
        challenge: t('cases.eventpro.challenge'),
        solution: t('cases.eventpro.solution'),
        architecture: t('cases.eventpro.architecture'),
        result: t('cases.eventpro.result'),
      },
      tags: ['Vanilla JS', 'Supabase', 'Cloudflare', 'CMS'],
    },
  ]

  return (
    <section id="case-studies" className="section-padding bg-white relative overflow-hidden">
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
            {t('cases.sectionBadge')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            {t('cases.sectionHeadingPrefix')} <span className="gradient-text">{t('cases.sectionHeadingGradient')}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            {t('cases.sectionDescription')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="space-y-6"
        >
          {caseStudies.map(({ icon: Icon, title, gradient, summary, items, tags }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.45)] transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-black/10`}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-500">{summary}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white text-slate-600 text-[11px] font-medium rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {steps.map(({ key, label, icon: StepIcon, tone }) => (
                  <div key={key} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${tone} text-white`}>
                        <StepIcon size={14} />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {label}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{items[key]}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
