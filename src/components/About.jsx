import { motion } from 'framer-motion'
import { Shield, Server, Cloud, Network, Wrench, Code2 } from 'lucide-react'

const highlights = [
  { icon: Network, label: 'Fortinet & Networking', desc: 'FortiGate, VLAN, VPN, MSS clamping', color: 'from-red-500 to-orange-500' },
  { icon: Server, label: 'Infrastructure', desc: 'Active Directory, ManageEngine, Mosyle MDM', color: 'from-blue-500 to-cyan-500' },
  { icon: Cloud, label: 'Cloud Platforms', desc: 'Firebase, Supabase, Cloudflare, Docker', color: 'from-purple-500 to-pink-500' },
  { icon: Code2, label: 'Full-Stack Dev', desc: 'Flutter, React, Fastify, PostgreSQL', color: 'from-emerald-500 to-teal-500' },
  { icon: Shield, label: 'Security', desc: 'JWT, CSP, RBAC, OWASP, Firewall policies', color: 'from-amber-500 to-yellow-500' },
  { icon: Wrench, label: 'Automation', desc: 'n8n workflows, Python, CI/CD, LLM pipelines', color: 'from-indigo-500 to-violet-500' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function HighlightCard({ icon: Icon, label, desc, color }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 cursor-default"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={18} className="text-white" />
      </div>
      <h3 className="font-semibold text-sm text-slate-900 mb-1">{label}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
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
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Bridging IT Infrastructure &{' '}
            <span className="gradient-text">Software Development</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
              IT Support Specialist at <strong className="text-slate-900">Carol Morgan School</strong> managing 
              200+ devices, <strong>Fortinet</strong> firewalls, <strong>Active Directory</strong>, and{' '}
              <strong>ManageEngine</strong> endpoint infrastructure. Simultaneously architecting production-grade 
              applications across <strong>Firebase</strong>, <strong>Supabase</strong>, <strong>Cloudflare</strong>, and <strong>Docker</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              From configuring VLANs and firewall policies on FortiGate to deploying React + Fastify apps 
              with PostgreSQL and Redis, I bridge the gap between IT operations and modern software development. 
              Security-minded, automation-driven, and passionate about solving real problems with technology.
            </p>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-navy-900 rounded-2xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="font-semibold text-sm text-blue-300 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Quick Facts
              </h3>
              <div className="space-y-3.5 text-sm">
                {[
                  ['📍 Based in', 'Santo Domingo, DR'],
                  ['💼 Current Role', 'IT Support @ Carol Morgan School'],
                  ['📧 Email', 'norascript@gmail.com'],
                  ['📞 Phone', '809-943-1727'],
                  ['🌐 Languages', 'Spanish · English'],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex justify-between gap-4 border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-400">{label}</span>
                    <span className="text-right font-medium text-white/90">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {highlights.map((h) => (
            <HighlightCard key={h.label} {...h} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
