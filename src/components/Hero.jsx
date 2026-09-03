import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin, Phone, Download, Rocket, MessageCircle, Server, Users, Layers, Cpu } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function Hero() {
  const { t } = useLanguage()
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      })),
    []
  )

  const roles = [
    t('hero.role1'),
    t('hero.role2'),
    t('hero.role3'),
    t('hero.role4'),
  ]

  const headline = [t('hero.headline1'), t('hero.headline2'), t('hero.headline3')]

  const contactLinks = [
    { label: t('hero.contact.emailLabel'), value: 'norascript@gmail.com', href: 'mailto:norascript@gmail.com', icon: Mail },
    { label: t('hero.contact.phoneLabel'), value: '829-578-6284', href: 'tel:18295786284', icon: Phone },
    {
      label: t('hero.contact.locationLabel'),
      value: 'Santo Domingo, DR',
      href: 'https://www.google.com/maps/search/Santo+Domingo,+Dominican+Republic',
      icon: MapPin,
    },
  ]

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((r) => (r + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column */}
          <div className="w-full max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                />
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-2"
            >
              Eduardo Rojas{' '}
              <span className="gradient-text">Velasquez</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 mb-4"
            >
              <span className="text-lg sm:text-xl text-slate-300 font-medium">
                {roles[roleIndex].substring(0, charIndex)}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8"
            >
              {headline.map((item, i) => (
                <span key={item} className="flex items-center gap-x-3">
                  {i > 0 && <span className="h-4 w-px bg-blue-400/40" />}
                  <span className="text-base sm:text-lg font-bold gradient-text">{item}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA buttons — improved visual hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {/* Primary */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <Rocket size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                {t('hero.cta.projects')}
              </motion.button>

              {/* Secondary — accent tint */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-6 py-3.5 text-sm font-bold text-blue-300 backdrop-blur-sm hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <MessageCircle size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                {t('hero.cta.contact')}
              </motion.button>

              {/* Download — clean outline */}
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="/CV_Eduardo_Velasquez_ES.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                {t('hero.cta.downloadCv')}
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-white/10 text-white/60">PDF</span>
              </motion.a>
            </motion.div>

            {/* Tech stack tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-8"
            >
              {['Fortinet', 'Active Directory', 'ManageEngine', 'Firebase', 'Supabase', 'Cloudflare', 'n8n', 'React', 'Flutter', 'Fastify', 'Docker', 'PostgreSQL'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.04 }}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full hover:bg-white/10 hover:border-blue-400/30 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 grid gap-3 sm:grid-cols-3"
            >
              {contactLinks.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 select-text"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="block text-sm font-medium text-white break-words">{item.value}</span>
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              {[
                { icon: LinkedinIcon, href: 'https://linkedin.com/in/eduardo-velasquez-437a3422a' },
                { icon: GithubIcon, href: 'https://github.com/NostradamesP' },
                { icon: Mail, href: 'mailto:norascript@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-2.5 text-slate-500 hover:text-blue-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <span className="text-xs text-slate-500 ml-1">{t('hero.socials.description')}</span>
            </motion.div>
          </div>

          {/* Right column — visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-md lg:max-w-lg flex-shrink-0"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent via-blue-500 to-cyan-400 opacity-25 blur-2xl" />

            {/* Terminal card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[1.75rem] border border-white/15 bg-navy-900/70 p-5 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">eduardo@itops:~$</span>
              </div>

              <div className="space-y-2.5 font-mono text-[13px] leading-relaxed">
                <p className="text-slate-300">
                  <span className="text-blue-300">{t('hero.terminal.label1')}</span>
                  <span className="text-slate-500"> → </span>
                  <span className="text-emerald-300">Fortinet · AD · MDM</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-blue-300">{t('hero.terminal.label2')}</span>
                  <span className="text-slate-500"> → </span>
                  <span className="text-emerald-300">React · Fastify · PostgreSQL</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-blue-300">{t('hero.terminal.label3')}</span>
                  <span className="text-slate-500"> → </span>
                  <span className="text-emerald-300">n8n · OpenAI · Gemini</span>
                </p>
                <p className="flex items-center text-blue-300">
                  <span className="text-slate-500">$ </span>
                  <span className="ml-2">deploy --prod --everything</span>
                  <span className="typewriter-cursor" />
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: Server, value: '200+', label: t('hero.stat.devices'), delay: 0.5 },
                { icon: Layers, value: '9+', label: t('hero.stat.inProduction'), delay: 0.58 },
                { icon: Users, value: '3+', label: t('hero.stat.years'), delay: 0.66 },
                { icon: Cpu, value: '20+', label: t('hero.stat.tech'), delay: 0.74 },
              ].map(({ icon: Icon, value, label, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:border-blue-400/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-lg font-black text-white leading-none">{value}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute -top-5 -right-4 rounded-full border border-white/10 bg-navy-900/80 px-4 py-2 backdrop-blur-md shadow-xl"
            >
              <span className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {t('hero.floatingBadge')}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('demos')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate-600 hover:text-slate-400 transition-colors z-10"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}