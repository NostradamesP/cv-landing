import { motion } from 'framer-motion'
import { Music, Gamepad2, Kanban, Monitor, ShoppingCart, Globe, ExternalLink, FileText } from 'lucide-react'

// Inline SVG for GitHub (not in lucide-react v1.23)
const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [
  {
    title: 'FactuRD',
    desc: 'Full electronic invoicing system for Dominican Republic (DGII). Multi-company, inventory with FIFO Kardex, drag-and-drop invoice designer, e-CF generation, and JWT auth. Desktop native (Tauri) + Web + PWA.',
    tags: ['React 19', 'FastAPI', 'PostgreSQL', 'Supabase', 'Tauri', 'Docker', 'Python'],
    icon: FileText,
    gradient: 'from-blue-600 to-indigo-600',
    status: 'live',
    url: 'https://nostradamesp.github.io/facturd-landing/',
    repo: 'https://github.com/NostradamesP/facturd-landing',
  },
  {
    title: 'NoraHR — Kanban IT',
    desc: 'Production-operational Kanban system with drag-and-drop boards, Gantt charts, SLA tracking, real-time chat, role-based access, and CI/CD via GitHub Actions.',
    tags: ['React 18', 'Tailwind', 'Firebase', 'GitHub Actions', '@dnd-kit'],
    icon: Kanban,
    gradient: 'from-emerald-500 to-teal-500',
    status: 'live',
    url: 'https://nostradamesp.github.io/HHRR/',
    repo: 'https://github.com/NostradamesP/HHRR',
    badge: 'Production',
  },
  {
    title: 'Sharks Launchpad',
    desc: 'Zero-dependency CMS portal for Carol Morgan School faculty. Google OAuth restricted to @cms.edu.do, drag-and-drop admin panel, real-time CRUD, and image upload with canvas resize.',
    tags: ['Vanilla JS', 'Firebase', 'Cloudflare', 'Google OAuth'],
    icon: Globe,
    gradient: 'from-orange-500 to-rose-500',
    status: 'live',
    url: 'https://nostradamesp.github.io/sharks-launchpad/',
    repo: 'https://github.com/NostradamesP/sharks-launchpad',
    badge: 'Used daily by staff',
  },
  {
    title: 'Event Pro Jinaite',
    desc: 'Landing page with custom CMS for an audiovisual production company (LED screens, sound, lighting, CCTV). Supabase backend with full admin panel, deployed on Cloudflare.',
    tags: ['Vanilla JS', 'Supabase', 'Cloudflare', 'CMS'],
    icon: Globe,
    gradient: 'from-rose-500 to-pink-500',
    status: 'live',
    url: 'https://eventpro.com.do',
    repo: 'https://github.com/NostradamesP/eventpro-jinaite-web',
  },
  {
    title: 'Tienda Xtrógeno',
    desc: 'Full e-commerce platform for brand-name clothing at opportunity prices. Product catalog, cart, checkout flow, and responsive design built with React 19.',
    tags: ['React 19', 'Vite', 'Tailwind', 'React Router'],
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-purple-500',
    status: 'live',
    url: 'https://nostradamesp.github.io/tiendaxtrogeno-web/',
    repo: 'https://github.com/NostradamesP/tiendaxtrogeno-web',
  },
  {
    title: 'Solo el Music',
    desc: 'Premium portfolio for a music producer and YouTube content creator. Scroll-driven animations, animated EQ bars, custom loading screen, and SVG masks.',
    tags: ['Vanilla JS', 'GSAP', 'Lenis', 'Plyr', 'ScrollTrigger'],
    icon: Music,
    gradient: 'from-violet-500 to-indigo-500',
    status: 'live',
    url: 'https://nostradamesp.github.io/solo-el-music/',
    repo: 'https://github.com/NostradamesP/solo-el-music',
  },
  {
    title: 'Mini Studio Web',
    desc: 'Professional multi-track audio DAW in the browser with waveform rendering, PCM 16-bit WAV export, and real-time processing via AudioWorklet. Cross-platform: web, macOS, Android, iOS.',
    tags: ['Flutter', 'Dart', 'Web Audio API', 'Firebase', 'Provider'],
    icon: Music,
    gradient: 'from-cyan-500 to-blue-600',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/mini-studio-web',
  },
  {
    title: 'Digital Signage Platform',
    desc: 'Enterprise signage system with multi-tenancy, WebSocket real-time screen pairing (6-char codes, 30s heartbeat), content scheduling, and Dockerized deployment.',
    tags: ['Fastify', 'React', 'PostgreSQL', 'Docker', 'Redis', 'WebSocket'],
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/signage-platform',
  },
  {
    title: 'EL JUEGO',
    desc: 'Sandbox simulation game set in a Dominican neighborhood. 8 playable roles, dynamic economy with supply/demand, NPC AI, procedural maps with Python/Pillow.',
    tags: ['Godot 4.6', 'GDScript', 'Python', 'Pillow'],
    icon: Gamepad2,
    gradient: 'from-amber-500 to-yellow-500',
    status: 'offline',
    repo: 'https://github.com/NostradamesP/el-juego',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const statusConfig = {
  live: {
    label: 'Live',
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    dot: 'bg-emerald-500',
  },
  offline: {
    label: 'Local',
    bg: 'bg-slate-100',
    text: 'text-slate-500',
    dot: 'bg-slate-400',
  },
}

function ProjectCard({ project }) {
  const status = statusConfig[project.status]

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group project-card bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-default"
    >
      {/* Gradient top bar */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-1/2 bg-white/20 skew-x-12"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-black/10 flex-shrink-0`}
            >
              <project.icon size={18} className="text-white" />
            </motion.div>
            <div className="min-w-0">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-accent transition-colors duration-200 truncate">
                {project.title}
              </h3>
              {project.badge && (
                <span className="text-[10px] text-slate-400 font-medium truncate block">
                  {project.badge}
                </span>
              )}
            </div>
          </div>

          {/* Status badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 ${status.bg} ${status.text} text-[10px] font-semibold rounded-full flex-shrink-0`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === 'live' ? 'animate-pulse' : ''}`}
            />
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
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
        <div className="flex items-center gap-4 pt-3 border-t border-slate-100 mt-auto">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
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
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              <GithubIcon size={13} />
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
    <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
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
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Projects &{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Production applications and tools I've built — from e-invoicing to audio DAWs
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
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live — deployed & accessible
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Local — development only
          </span>
        </motion.div>
      </div>
    </section>
  )
}
