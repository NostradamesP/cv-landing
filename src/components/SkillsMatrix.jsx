import { motion } from 'framer-motion'
import { LayoutDashboard, Server, Database, Cloud, GitBranch, Brain } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SkillsMatrix() {
  const { t } = useLanguage()

  const categories = [
    {
      icon: LayoutDashboard,
      title: t('skillsMatrix.categories.frontendTitle'),
      level: 90,
      color: 'from-blue-500 to-cyan-400',
      tools: t('skillsMatrix.categories.frontendTools'),
    },
    {
      icon: Server,
      title: t('skillsMatrix.categories.backendTitle'),
      level: 85,
      color: 'from-emerald-500 to-teal-400',
      tools: t('skillsMatrix.categories.backendTools'),
    },
    {
      icon: Database,
      title: t('skillsMatrix.categories.databasesTitle'),
      level: 80,
      color: 'from-violet-500 to-purple-400',
      tools: t('skillsMatrix.categories.databasesTools'),
    },
    {
      icon: Cloud,
      title: t('skillsMatrix.categories.cloudDeployTitle'),
      level: 85,
      color: 'from-cyan-500 to-sky-400',
      tools: t('skillsMatrix.categories.cloudDeployTools'),
    },
    {
      icon: GitBranch,
      title: t('skillsMatrix.categories.devopsTitle'),
      level: 75,
      color: 'from-amber-500 to-orange-400',
      tools: t('skillsMatrix.categories.devopsTools'),
    },
    {
      icon: Brain,
      title: t('skillsMatrix.categories.aiAutomationTitle'),
      level: 70,
      color: 'from-fuchsia-500 to-pink-400',
      tools: t('skillsMatrix.categories.aiAutomationTools'),
    },
  ]

  return (
    <section id="skills-matrix" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            {t('skillsMatrix.sectionBadge')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            {t('skillsMatrix.sectionHeadingPrefix')} <span className="gradient-text">{t('skillsMatrix.sectionHeadingGradient')}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            {t('skillsMatrix.sectionDescription')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="space-y-4"
        >
          {categories.map(({ icon: Icon, title, level, color, tools }) => (
            <motion.div
              key={title}
              variants={rowVariants}
              whileHover={{ x: 4 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md shadow-black/10`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                    <p className="text-[11px] text-slate-400">{tools}</p>
                  </div>
                </div>
                <span className="text-lg font-black text-slate-800 tabular-nums">{level}%</span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}