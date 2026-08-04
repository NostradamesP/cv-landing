import { motion } from 'framer-motion'
import { Lightbulb, DraftingCompass, Brain, TestTube2, Rocket, RefreshCw } from 'lucide-react'

const process = [
  { icon: Lightbulb, title: 'Idea', desc: 'Definir el problema real y el objetivo de negocio antes de escribir código.' },
  { icon: DraftingCompass, title: 'Arquitectura', desc: 'Diseño del sistema: stack, datos, seguridad y despliegue.' },
  { icon: Brain, title: 'IA', desc: 'Automatización inteligente y asistencia con IA donde aporta valor real.' },
  { icon: TestTube2, title: 'Testing', desc: 'Validación de flujos críticos y calidad antes de salir a producción.' },
  { icon: Rocket, title: 'Deploy', desc: 'Publicación con CI/CD, monitoreo y despliegue en la nube.' },
  { icon: RefreshCw, title: 'Mejora continua', desc: 'Iterar con métricas, feedback y mantenimiento sostenible.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function DevelopmentProcess() {
  return (
    <section id="process" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Development Process
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Cómo paso de la idea <span className="gradient-text">al producto</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Un proceso iterativo que convierte necesidades de negocio en software en producción
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {process.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-accent/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-black text-white shadow-lg shadow-blue-500/30">
                {i + 1}
              </span>
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-[11px] leading-relaxed text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
