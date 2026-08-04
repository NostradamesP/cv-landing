import { motion } from 'framer-motion'
import { Rocket, MessageCircle, Shield, Layers3, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Layers3,
    title: 'Perfil híbrido real',
    desc: 'No solo programo: entiendo infraestructura, negocio y producción en vivo. Cierro el puente que casi siempre falta.',
  },
  {
    icon: Shield,
    title: 'Productos en producción',
    desc: 'Cada habilidad está respaldada por sistemas que ya usan empresas y equipos reales, no demos.',
  },
  {
    icon: Rocket,
    title: 'Entrega y autonomía',
    desc: 'Tomo el proyecto completo: análisis, arquitectura, código, despliegue y soporte posterior.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicación clara',
    desc: 'Explico decisiones técnicas en lenguaje de negocio y mantengo el avance visible en todo momento.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function WhyHireMe() {
  return (
    <section id="why-me" className="relative overflow-hidden bg-navy-900 py-24">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
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
            Why Hire Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Por qué trabajar <span className="gradient-text">conmigo</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Una combinación poco común de experiencia técnica y visión de producto
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-500 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
          >
            Hablemos de tu proyecto
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
