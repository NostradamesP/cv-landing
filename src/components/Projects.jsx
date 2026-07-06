import { motion } from 'framer-motion'
import { Music, Gamepad2, Kanban, Monitor, ShoppingCart, Globe, ExternalLink } from 'lucide-react'

const GithubIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const projects = [
  {
    title: 'Mini Studio Web',
    desc: 'Professional multi-track audio DAW with waveform rendering, PCM 16-bit WAV export, and real-time audio processing via AudioWorklet.',
    tags: ['Flutter', 'Dart', 'Web Audio API', 'Firebase', 'Provider'],
    icon: Music,
    gradient: 'from-violet-500 to-indigo-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/mini-studio-web',
  },
  {
    title: 'Digital Signage Platform',
    desc: 'Enterprise signage system with multi-tenancy, WebSocket real-time screen pairing, content scheduling, and Dockerized deployment.',
    tags: ['Fastify', 'React', 'PostgreSQL', 'Docker', 'Redis', 'WebSocket'],
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/signage-platform',
  },
  {
    title: 'NoraHR — Kanban IT',
    desc: 'Production-operational Kanban system with drag-and-drop boards, Gantt charts, SLA tracking, real-time chat, and CI/CD via GitHub Actions.',
    tags: ['React 18', 'Tailwind', 'Firebase', 'GitHub Actions', '@dnd-kit'],
    icon: Kanban,
    gradient: 'from-emerald-500 to-teal-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/HHRR',
  },
  {
    title: 'Event Pro Jinaite',
    desc: 'Landing page with custom CMS for an audiovisual production company. Supabase backend, Cloudflare deployment, and full admin panel.',
    tags: ['Vanilla JS', 'Supabase', 'Cloudflare', 'CMS'],
    icon: Globe,
    gradient: 'from-rose-500 to-pink-500',
    status: 'live',
    url: 'https://eventpro.com.do',
    repo: 'https://github.com/NostradamesP/eventpro-jinaite-web',
  },
  {
    title: 'Sharks Launchpad',
    desc: 'Zero-dependency CMS portal for Carol Morgan School faculty. Google OAuth restricted to @cms.edu.do, drag-and-drop admin, real-time CRUD.',
    tags: ['Vanilla JS', 'Firebase', 'Cloudflare', 'Google OAuth'],
    icon: Globe,
    gradient: 'from-orange-500 to-rose-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/sharks-launchpad',
  },
  {
    title: 'EL JUEGO',
    desc: 'Sandbox simulation game set in a Dominican neighborhood. 8 playable roles, dynamic economy, NPC AI, procedural maps with Python/Pillow.',
    tags: ['Godot 4.6', 'GDScript', 'Python', 'Pillow'],
    icon: Gamepad2,
    gradient: 'from-amber-500 to-yellow-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/el-juego',
  },
  {
    title: 'Tienda Xtrógeno',
    desc: 'Full e-commerce platform for brand-name clothing with product catalog, cart, checkout, and responsive design built with React 19.',
    tags: ['React 19', 'Vite', 'Tailwind', 'React Router'],
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-purple-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/tiendaxtrogeno-web',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const statusConfig = {
  live: { label: 'Live', bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  offline: { label: 'Local', bg: 'bg-slate-100', text: 'text-slate-500', dot: 'bg-slate-400' },
}

function ProjectCard({ project }) {
  const status = statusConfig[project.status]

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

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-black/10 flex-shrink-0`}
            >
              <project.icon size={18} className="text-white" />
            </motion.div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-accent transition-colors duration-200 truncate">
              {project.title}
            </h3>
          </div>

          {/* Status badge */}
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 ${status.bg} ${status.text} text-[10px] font-semibold rounded-full flex-shrink-0`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === 'live' ? 'animate-pulse' : ''}`} />
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
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

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
            >
              <ExternalLink size={12} />
              <span>Visit</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              <GithubIcon size={12} />
              <span>Source</span>
            </a>
          )}
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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live in production
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Local development
          </span>
        </motion.div>
      </div>
    </section>
  )
}
