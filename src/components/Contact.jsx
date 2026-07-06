import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_24px_60px_-40px_rgba(15,23,42,0.3)] sm:p-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
          >
            Contact
          </motion.span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Open to the right opportunity
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            If you want a more direct conversation, the full contact details live in the hero.
            This space is just a clean closing note for projects, roles, or collaborations.
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:norascript@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-600 px-6 py-3 font-medium text-white shadow-lg shadow-navy-600/20 transition-all duration-200 hover:bg-navy-700 hover:shadow-navy-600/30"
          >
            <Send size={16} />
            <span>Send me an email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
