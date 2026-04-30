import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const contacts = [
  { icon: <Mail size={18} />, label: 'Email', value: 'ayithireddypavan8466@gmail.com', href: 'mailto:ayithireddypavan8466@gmail.com' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 9603698176', href: 'tel:+919603698176' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Andhra Pradesh, India', href: null },
]

const socials = [
  { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/pav16an', color: 'hover:border-slate-400 hover:text-slate-300' },
  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-ayithireddy-67a487245', color: 'hover:border-blue-400 hover:text-blue-400' },
  { icon: <ExternalLink size={20} />, label: 'Portfolio', href: 'https://portfolio-1upm.onrender.com', color: 'hover:border-indigo-400 hover:text-indigo-400' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl font-bold text-white mt-2">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Open to AI/ML roles, freelance projects, and collaborations. Let's build something intelligent together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4">
            {contacts.map((c) => (
              <div key={c.label} className="card-bg rounded-xl p-4 flex items-center gap-4 hover:border-indigo-400/40 transition-all duration-300">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">{c.icon}</div>
                <div>
                  <p className="text-slate-500 text-xs">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-white text-sm font-medium hover:text-indigo-400 transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-white text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 text-slate-400 text-sm font-medium transition-all duration-300 ${s.color}`}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="card-bg rounded-2xl p-6">
            <h3 className="text-white font-bold mb-5">Send a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:ayithireddypavan8466@gmail.com?subject=${e.target.subject.value}&body=${e.target.message.value}` }}
              className="space-y-4">
              <input name="name" placeholder="Your Name" required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              <input name="subject" placeholder="Subject" required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              <textarea name="message" placeholder="Your Message" rows={4} required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
              <button type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 glow hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
