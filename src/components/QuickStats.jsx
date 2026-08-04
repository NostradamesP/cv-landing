import { motion } from 'framer-motion'
import { Rocket, Boxes, Layers3, Cpu } from 'lucide-react'

const stats = [
  { icon: Rocket, label: 'Años de experiencia', value: '3+', desc: 'IT + desarrollo de producto' },
  { icon: Boxes, label: 'Proyectos en producción', value: '9+', desc: 'web, mobile y automatización' },
  { icon: Layers3, label: 'Sistemas desarrollados', value: '15+', desc: 'portales, dashboards y plataformas' },
  { icon: Cpu, label: 'Tecnologías', value: '20+', desc: 'infraestructura, cloud y AI' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function QuickStats() {
  return (
    <section id="stats" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label, value, desc }, i) => (
            <motion.div
              key={label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 text-center shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-500 text-white shadow-lg shadow-blue-500/25">
                <Icon size={22} />
              </div>
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
