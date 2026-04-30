import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, ExternalLink, Code2 } from 'lucide-react'

const roles = ['AI/ML Engineer', 'Generative AI Developer', 'LLM Systems Builder', 'RAG Pipeline Expert']

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

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Pavan </span>
          <span className="gradient-text">Ayithireddy</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 h-10">
          {displayed}<span className="animate-pulse">|</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Specializing in Generative AI, LLM-based systems, and end-to-end ML solutions.
          Building intelligent RAG pipelines, prompt engineering workflows, and AI-powered automation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="https://portfolio-1upm.onrender.com" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all glow hover:scale-105">
            <ExternalLink size={16} /> View Live Demo
          </a>
          <a href="https://github.com/pav16an" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-500/40 hover:border-indigo-400 text-slate-300 hover:text-white font-medium transition-all hover:scale-105">
            <Code2 size={16} /> GitHub
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center">
          {[
            { icon: <GithubIcon />, href: 'https://github.com/pav16an', label: 'GitHub' },
            { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/pavan-ayithireddy-67a487245', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:ayithireddypavan8466@gmail.com', label: 'Email' },
            { icon: <Phone size={20} />, href: 'tel:+919603698176', label: 'Phone' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all hover:scale-110">
              {icon}
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-indigo-500/40 rounded-full mx-auto flex justify-center pt-2">
            <div className="w-1 h-3 bg-indigo-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
