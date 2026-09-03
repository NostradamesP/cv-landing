import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const skillCategoryKeys = [
  'infra',
  'cloud',
  'frontend',
  'backend',
  'security',
  'automation',
  'gamedev',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function SkillCategory({ categoryKey }) {
  const { t } = useLanguage()
  const title = t(`skills.category.${categoryKey}`)
  const skills = t(`skills.skills.${categoryKey}`)

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, scale: 1.01 }}
      className="skill-card bg-white rounded-xl border border-slate-200 p-5 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-semibold text-sm text-navy-600 mb-3 flex items-center gap-2">
        <span className="w-1 h-1 bg-accent rounded-full" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ scale: 1.05, y: -1 }}
            className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-100 hover:bg-accent/5 hover:border-accent/20 hover:text-accent transition-all duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding bg-slate-50 relative overflow-hidden">
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
            {t('skills.sectionLabel')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            <span className="gradient-text">{t('skills.heading')}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategoryKeys.map((key) => (
            <SkillCategory key={key} categoryKey={key} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
