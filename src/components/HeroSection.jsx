import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import NeuralBackground from './NeuralBackground'
import TypingEffect from './TypingEffect'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

export default function HeroSection() {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      <div className="absolute inset-0 dot-grid opacity-30 z-[1]" />
      <div className="absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--midnight))' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div {...fadeUp(0.3)} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
          <span className="font-mono text-xs tracking-widest text-[var(--text-dim)]">
            STATUS: ACTIVE // SYSTEM: ONLINE
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.5)} className="text-5xl md:text-6xl font-black mb-4 leading-tight">
          <span className="text-[var(--text-main)]">Pavan </span>
          <span className="gradient-text">Ayithireddy</span>
        </motion.h1>

        <motion.div {...fadeUp(0.7)} className="glass rounded-xl px-6 py-3 mb-4 inline-block text-left">
          <span className="font-mono text-sm text-[var(--text-dim)]">~/engineer $ </span>
          <TypingEffect />
        </motion.div>

        <motion.p {...fadeUp(0.85)} className="text-base md:text-lg text-[var(--text-dim)] mb-6 max-w-2xl mx-auto">
          Building Intelligent Systems with <span className="text-[var(--neural-teal)]">Generative AI</span> &amp; <span className="text-[var(--logic-violet)]">Data Science</span>
        </motion.p>

        <motion.div {...fadeUp(1.0)} className="flex flex-wrap gap-3 justify-center mb-6">
          <Link to="/projects"
            className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 glow-teal hover:scale-105"
            style={{ background: 'var(--neural-teal)', color: 'var(--midnight)' }}>
            View Projects
          </Link>
          <a href="/Ayithireddy_pavan.pdf" download="Ayithireddy_pavan.pdf"
            className="px-6 py-2.5 rounded-full font-semibold text-sm border transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'var(--logic-violet)', color: 'var(--logic-violet)' }}>
            Download Resume
          </a>
          <Link to="/ai-demo"
            className="px-6 py-2.5 rounded-full font-semibold text-sm border transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'var(--kinetic-orange)', color: 'var(--kinetic-orange)' }}>
            Live AI Demo
          </Link>
        </motion.div>

        
      </div>
    </section>
  )
}
