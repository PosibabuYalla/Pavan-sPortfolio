import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassContainer from './GlassContainer'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Technologies Used', value: 25, suffix: '+' },
  { label: 'Models Built', value: 10, suffix: '+' },
]

const skills = [
  { name: 'Python', pct: 95, color: 'var(--neural-teal)' },
  { name: 'Machine Learning', pct: 90, color: 'var(--logic-violet)' },
  { name: 'LLMs & RAG', pct: 88, color: 'var(--kinetic-orange)' },
  { name: 'Deep Learning', pct: 85, color: 'var(--neural-teal)' },
  { name: 'Data Science', pct: 92, color: 'var(--logic-violet)' },
  { name: 'NLP', pct: 87, color: 'var(--kinetic-orange)' },
]

const timeline = [
  { year: '2021', text: 'Started B.Tech in AI & Data Science at KIET', color: 'var(--neural-teal)' },
  { year: '2023', text: 'ML Intern — Feynn Labs: EV market segmentation & clustering', color: 'var(--logic-violet)' },
  { year: '2024', text: 'AI Developer Intern — Code Crafters: LLM workflows & RAG systems', color: 'var(--kinetic-orange)' },
  { year: '2025', text: 'Building Advanced RAG & Multi-Agent AI Systems', color: 'var(--neural-teal)' },
]

function SkillBar({ name, pct, color, inView }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-xs text-[var(--text-dim)]">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function AboutSection() {
  const skillsRef = useRef(null)
  const skillsInView = useInView(skillsRef, { once: true })

  return (
    <section className="h-full flex flex-col max-w-7xl mx-auto w-full px-6 py-4">
      {/* Section header */}
      <div className="mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--neural-teal)]">
          Module: Identity
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {stats.map((s, i) => (
          <GlassContainer key={s.label} delay={i * 0.1} className="text-center">
            <div className="text-4xl font-black mb-1" style={{ color: 'var(--neural-teal)' }}>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
            </div>
            <div className="font-mono text-xs text-[var(--text-dim)] tracking-widest uppercase">{s.label}</div>
          </GlassContainer>
        ))}
      </div>

      {/* Two-column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills */}
        <GlassContainer meta="Core Competency Matrix" accentColor="var(--neural-teal)" delay={0.1}>
          <div ref={skillsRef}>
            {skills.map(s => (
              <SkillBar key={s.name} {...s} inView={skillsInView} />
            ))}
          </div>
        </GlassContainer>

        {/* Timeline */}
        <GlassContainer meta="Journey Timeline" accentColor="var(--logic-violet)" delay={0.2}>
          <div className="relative pl-6 border-l border-white/10 space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full border-2 pulse-dot"
                  style={{ backgroundColor: item.color, borderColor: item.color }} />
                <div className="font-mono text-xs mb-1" style={{ color: item.color }}>{item.year}</div>
                <p className="text-sm text-[var(--text-dim)]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </GlassContainer>
      </div>
    </section>
  )
}
