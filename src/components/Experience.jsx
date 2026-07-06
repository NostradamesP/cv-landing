import { motion } from 'framer-motion'
import { Calendar, Briefcase, ShieldCheck, Rocket, Users, Layers3, ArrowRight } from 'lucide-react'

const careerSnapshot = [
  { label: 'Years shipping', value: '3+', icon: Rocket },
  { label: 'Daily users supported', value: '200+', icon: Users },
  { label: 'Core environments', value: 'IT + Product', icon: Layers3 },
  { label: 'Security-first', value: 'Yes', icon: ShieldCheck },
]

const experiences = [
  {
    role: 'IT Support Specialist',
    company: 'Carol Morgan School',
    location: 'Santo Domingo, DR',
    period: 'Jul 2025 – Present',
    summary:
      'Own frontline support while keeping the network, identity, and endpoint stack healthy for a fast-moving school environment.',
    bullets: [
      'Frontline technical support for 200+ faculty, staff, and students across hardware, software, and network issues.',
      'Manage Fortinet FortiGate firewalls: VLAN segmentation, MSS clamping, VPN tunnels, firewall policies, and traffic shaping.',
      'Administer Active Directory: user/group management, GPO, organizational units, and account lifecycle.',
      'Deploy and maintain endpoint management via ManageEngine Endpoint Central and ServiceDesk.',
    ],
    chips: ['Fortinet', 'Active Directory', 'ManageEngine', 'Mosyle MDM', 'Google Workspace'],
  },
  {
    role: 'Full-Stack Developer & Software Architect',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 – Present',
    summary:
      'Design and ship production applications across web, mobile, and automation, from real-time collaboration tools to game systems.',
    bullets: [
      'Digital Signage Platform: Fastify 5 + React + PostgreSQL + Docker, WebSocket real-time pairing, Redis caching, MinIO S3, JWT auth.',
      'Mini Studio Web: Multi-track audio DAW with Flutter + Web Audio API, waveform rendering, PCM WAV export, Firebase backend.',
      'NoraHR: Production Kanban system (React + Firebase) with Gantt charts, SLA tracking, real-time chat, CI/CD via GitHub Actions.',
      'AI Video Pipeline: n8n-orchestrated automation with OpenAI/Gemini APIs and reusable content workflows.',
    ],
    chips: ['React', 'Flutter', 'Fastify', 'PostgreSQL', 'n8n'],
  },
]

const bulletVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.38, ease: 'easeOut' },
  }),
}

function SnapshotCard({ item }) {
  const Icon = item.icon

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">{item.label}</p>
          <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-500 text-white shadow-lg shadow-blue-500/20">
          <Icon size={18} />
        </div>
      </div>
    </motion.div>
  )
}

function TimelineCard({ exp, index, isLast }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative pl-10 md:pl-0"
    >
      <div className="absolute left-0 top-1 md:left-1 md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, delay: index * 0.1 }}
          className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-accent shadow-[0_0_0_6px_rgba(59,130,246,0.08)]"
        />
        {!isLast && (
          <div className="absolute left-1/2 top-4 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-blue-200 to-transparent" />
        )}
      </div>

      <div className="md:ml-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(15,23,42,0.5)]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                <Calendar size={10} />
                {exp.period}
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{exp.role}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {exp.company} · {exp.location}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              <Briefcase size={14} className="text-accent" />
              Current chapter
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
            {exp.summary}
          </p>

          <div className="mt-5 grid gap-3">
            {exp.bullets.map((bullet, i) => (
              <motion.div
                key={bullet}
                custom={i}
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
                className="flex items-start gap-3 rounded-2xl bg-slate-50/90 p-3.5"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/70" />
                <p className="text-sm leading-relaxed text-slate-600">{bullet}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {exp.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),_transparent_28%),linear-gradient(180deg,_#0a1628_0%,_#0b1630_45%,_#0f172a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            Career
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A career built at the intersection of{' '}
            <span className="gradient-text">operations and product</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I combine day-to-day IT reliability with hands-on software delivery, turning support knowledge
            into cleaner systems, better tooling, and shipped product work.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Career Snapshot</p>
                <h3 className="mt-2 text-xl font-semibold text-white">What I bring to a team</h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <ArrowRight size={14} className="text-blue-300" />
                Real-world execution
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {careerSnapshot.map((item) => (
                <SnapshotCard key={item.label} item={item} />
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-navy-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Working style</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I move comfortably between tickets, architecture, and implementation. That means I can
                troubleshoot the production issue, improve the underlying workflow, and leave the system
                easier to maintain than I found it.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-3xl border border-blue-400/15 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Current focus</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Support today, build for tomorrow</h3>
              </div>
              <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                <ShieldCheck size={18} />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                'Keeping school systems stable, secure, and easy to use.',
                'Shipping internal tools that save time for staff and users.',
                'Designing infrastructure with automation and maintainability in mind.',
              ].map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <p className="text-sm leading-relaxed text-slate-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Featured outcome</p>
              <h4 className="mt-2 text-lg font-semibold text-white">Facturd</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                My most complete application so far: a full invoicing platform with a stronger product
                scope, polished workflows, and the kind of structure that shows the widest range of my
                software and systems work.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="mb-6 flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Timeline</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Professional experience</h3>
            </div>
            <p className="hidden sm:block max-w-md text-right text-sm text-slate-400">
              Two parallel tracks that feed each other: operational discipline and product delivery.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[17px] top-0 h-full w-px bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent md:left-1 md:translate-x-0" />
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <TimelineCard key={exp.role} exp={exp} index={index} isLast={index === experiences.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
