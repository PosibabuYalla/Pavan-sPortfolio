import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import GlassContainer from './GlassContainer'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-ayithireddy-67a487245', icon: <FaLinkedin size={16} />, color: 'var(--neural-teal)' },
  { label: 'GitHub', href: 'https://github.com/pav16an', icon: <FaGithub size={16} />, color: 'var(--logic-violet)' },
  { label: 'Portfolio', href: 'https://portfolio-1upm.onrender.com', icon: <ExternalLink size={16} />, color: 'var(--kinetic-orange)' },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    window.location.href = `mailto:ayithireddypavan8466@gmail.com?subject=${f.subject.value}&body=${f.message.value}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none transition-all"

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--neural-teal)]">
          Module: Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Get In <span className="gradient-text">Touch</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Form — 3/5 */}
        <GlassContainer className="lg:col-span-3" meta="Send Message" accentColor="var(--neural-teal)" delay={0}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle size={48} className="text-[var(--neural-teal)]" />
                <p className="font-mono text-[var(--neural-teal)] text-lg font-bold">Message Sent!</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <input name="name" placeholder="Your Name" required
                  className={inputClass}
                  style={{ '--tw-ring-color': 'var(--neural-teal)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--neural-teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <input name="email" type="email" placeholder="Your Email" required
                  className={inputClass}
                  onFocus={e => e.target.style.borderColor = 'var(--neural-teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <input name="subject" placeholder="Subject" required
                  className={inputClass}
                  onFocus={e => e.target.style.borderColor = 'var(--neural-teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <textarea name="message" placeholder="Your Message" rows={4} required
                  className={`${inputClass} resize-none`}
                  onFocus={e => e.target.style.borderColor = 'var(--neural-teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, var(--neural-teal), var(--logic-violet))', color: 'white' }}>
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </GlassContainer>

        {/* Right side — 2/5 */}
        <div className="lg:col-span-2 space-y-4">
          {/* Social links */}
          <GlassContainer meta="Connect" accentColor="var(--logic-violet)" delay={0.1}>
            <div className="space-y-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-[var(--neural-teal)] transition-all group"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <span className="font-mono text-sm text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </GlassContainer>

          {/* Availability */}
          <GlassContainer meta="Availability" accentColor="var(--kinetic-orange)" delay={0.2}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-green-400 pulse-dot" />
              <span className="font-bold text-[var(--text-main)]">Available for Opportunities</span>
            </div>
            <p className="text-sm text-[var(--text-dim)] mb-2">Open to AI/ML roles, freelance projects, and collaborations.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--kinetic-orange)]">Response time:</span>
              <span className="font-mono text-xs text-[var(--text-dim)]">~24 hours</span>
            </div>
          </GlassContainer>

          {/* Contact info */}
          <GlassContainer meta="Direct Contact" accentColor="var(--neural-teal)" delay={0.3}>
            <div className="space-y-2">
              <a href="mailto:ayithireddypavan8466@gmail.com" className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)] hover:text-[var(--neural-teal)] transition-colors">
                <Mail size={12} style={{ color: 'var(--neural-teal)' }} /> ayithireddypavan8466@gmail.com
              </a>
              <a href="tel:+919603698176" className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)] hover:text-[var(--neural-teal)] transition-colors">
                <Phone size={12} style={{ color: 'var(--neural-teal)' }} /> +91 9603698176
              </a>
              <p className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)]">
                <MapPin size={12} style={{ color: 'var(--neural-teal)' }} /> Andhra Pradesh, India
              </p>
            </div>
          </GlassContainer>
        </div>
      </div>
    </section>
  )
}
