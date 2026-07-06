import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'IT Infrastructure',
    skills: ['Fortinet FortiGate', 'Active Directory', 'ManageEngine EPM/ServiceDesk', 'Mosyle MDM', 'Google Workspace Admin', 'VLAN / DHCP / DNS'],
  },
  {
    title: 'Cloud & BaaS',
    skills: ['Firebase (Auth, Firestore, Storage, Hosting)', 'Supabase (Auth, DB, Storage, Realtime)', 'Cloudflare (Pages, DNS, CDN, Workers)', 'Docker Compose', 'MinIO (S3-compatible)', 'GitHub Actions CI/CD'],
  },
  {
    title: 'Frontend',
    skills: ['React 18/19', 'Flutter 3.38 / Dart', 'Tailwind CSS 3', 'Vite 6/8', 'GSAP / Lenis', 'Framer Motion', 'Vanilla JS / HTML5 / CSS3'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js / Fastify 5', 'PostgreSQL 16', 'Redis 7', 'Firestore', 'Drizzle ORM', 'REST APIs / WebSockets', 'Zod Validation'],
  },
  {
    title: 'Security & Networking',
    skills: ['Fortinet (FortiGate, VPN, MSS)', 'JWT / bcrypt', 'CSP Headers', 'RBAC', 'Firestore / Supabase RLS', 'OWASP Top 10'],
  },
  {
    title: 'Automation & AI',
    skills: ['n8n Workflows', 'Python Scripting', 'OpenAI / Gemini APIs', 'Google Apps Script', 'Automated Video Pipelines', 'LLM Integrations'],
  },
  {
    title: 'Game Development',
    skills: ['Godot Engine 4.6+', 'GDScript 2.0', 'Procedural Generation', 'Tile-based 2D', 'NPC AI / Economy Systems'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function SkillCategory({ category }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, scale: 1.01 }}
      className="skill-card bg-white rounded-xl border border-slate-200 p-5 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-semibold text-sm text-navy-600 mb-3 flex items-center gap-2">
        <span className="w-1 h-1 bg-accent rounded-full" />
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill, i) => (
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
  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
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
            Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            From firewall configuration to full-stack deployment — a comprehensive toolkit across infrastructure, cloud, and development
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
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.title} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
