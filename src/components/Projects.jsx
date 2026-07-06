import { motion } from 'framer-motion'
import { Music, Gamepad2, Kanban, Monitor, ShoppingCart, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Mini Studio Web',
    desc: 'Professional multi-track audio DAW with waveform rendering, PCM 16-bit WAV export, and real-time audio processing via AudioWorklet.',
    tags: ['Flutter', 'Dart', 'Web Audio API', 'Firebase', 'Provider'],
    icon: Music,
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Digital Signage Platform',
    desc: 'Enterprise signage system with multi-tenancy, WebSocket real-time screen pairing, content scheduling, and Dockerized deployment.',
    tags: ['Fastify', 'React', 'PostgreSQL', 'Docker', 'Redis', 'WebSocket'],
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'NoraHR — Kanban IT',
    desc: 'Production-operational Kanban system with drag-and-drop boards, Gantt charts, SLA tracking, real-time chat, and CI/CD.',
    tags: ['React 18', 'Tailwind', 'Firebase', 'GitHub Actions', '@dnd-kit'],
    icon: Kanban,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Sharks Launchpad',
    desc: 'Zero-dependency CMS portal for Carol Morgan School faculty. Google OAuth, drag-and-drop admin, real-time CRUD.',
    tags: ['Vanilla JS', 'Firebase', 'Cloudflare', 'Google OAuth'],
    icon: Globe,
    gradient: 'from-orange-500 to-rose-500',
  },
  {
    title: 'EL JUEGO',
    desc: 'Sandbox simulation game set in a Dominican neighborhood. 8 playable roles, dynamic economy, NPC AI, procedural maps.',
    tags: ['Godot 4.6', 'GDScript', 'Python', 'Pillow'],
    icon: Gamepad2,
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Tienda Xtrógeno',
    desc: 'Full e-commerce platform for brand-name clothing with product catalog, cart, checkout, and responsive design.',
    tags: ['React 19', 'Vite', 'Tailwind', 'React Router'],
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-purple-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group project-card bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-default"
    >
      {/* Gradient top bar */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-1/2 bg-white/20 skew-x-12"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-black/10`}
          >
            <project.icon size={18} className="text-white" />
          </motion.div>
          <h3 className="font-bold text-slate-900 text-base group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05, y: -1 }}
              className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[11px] font-medium rounded-md border border-slate-100 hover:bg-accent/5 hover:border-accent/20 hover:text-accent transition-colors duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
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
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Production-grade applications across web, mobile, desktop, and game platforms
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
