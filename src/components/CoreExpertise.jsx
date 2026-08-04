import { motion } from 'framer-motion'
import { Server, Code2, Brain, MonitorPlay } from 'lucide-react'

const areas = [
  {
    icon: Server,
    title: 'IT Operations',
    color: 'from-blue-500 to-cyan-500',
    desc: 'Administración de infraestructura y endpoints: Fortinet, Active Directory, ManageEngine y Mosyle MDM.',
    points: ['FortiGate / VLAN / VPN', 'Active Directory & GPO', 'Endpoint & MDM', 'Google Workspace Admin'],
  },
  {
    icon: Code2,
    title: 'Business Software Development',
    color: 'from-emerald-500 to-teal-500',
    desc: 'Sistemas de negocio en producción: facturación electrónica, portales, kanban y plataformas multi-tenant.',
    points: ['React / Flutter', 'Fastify / Node.js', 'PostgreSQL / Firebase', 'Multi-tenant & RBAC'],
  },
  {
    icon: Brain,
    title: 'AI Automation',
    color: 'from-violet-500 to-fuchsia-500',
    desc: 'Pipelines de automatización con IA: n8n, APIs de OpenAI y Gemini para flujos de contenido y datos.',
    points: ['n8n workflows', 'OpenAI / Gemini', 'Python scripting', 'Automatización de video'],
  },
  {
    icon: MonitorPlay,
    title: 'Live Event Technology',
    color: 'from-amber-500 to-orange-500',
    desc: 'Producción audiovisual en vivo: LED, sonido, cámaras y montaje técnico para eventos y empresas.',
    points: ['Pantallas LED', 'Sonido y cámaras', 'Iluminación', 'Montaje & troubleshooting'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CoreExpertise() {
  return (
    <section id="expertise" className="section-padding bg-white relative overflow-hidden">
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
            Core Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Cuatro pilares, <span className="gradient-text">un solo profesional</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Infraestructura, desarrollo de negocio, automatización con IA y tecnología de eventos en vivo
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
          {areas.map(({ icon: Icon, title, color, desc, points }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg shadow-black/10`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {points.map((point) => (
                  <span
                    key={point}
                    className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-100 group-hover:border-accent/20"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
