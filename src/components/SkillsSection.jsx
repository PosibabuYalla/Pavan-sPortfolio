import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import GlassContainer from './GlassContainer'

const radarData = [
  { subject: 'NLP', A: 90 },
  { subject: 'Vision', A: 80 },
  { subject: 'RAG', A: 92 },
  { subject: 'LLMs', A: 95 },
  { subject: 'Data Sci', A: 88 },
  { subject: 'MLOps', A: 75 },
]

const categories = [
  {
    title: 'Programming',
    color: 'var(--neural-teal)',
    skills: [{ name: 'Python', pct: 95 }, { name: 'SQL', pct: 85 }, { name: 'JavaScript', pct: 70 }],
  },
  {
    title: 'AI & LLM',
    color: 'var(--logic-violet)',
    skills: [{ name: 'RAG Systems', pct: 92 }, { name: 'Prompt Engineering', pct: 90 }, { name: 'Embeddings', pct: 88 }, { name: 'Fine-Tuning', pct: 82 }],
  },
  {
    title: 'ML / Deep Learning',
    color: 'var(--kinetic-orange)',
    skills: [{ name: 'CNN', pct: 85 }, { name: 'YOLO', pct: 80 }, { name: 'Transformers', pct: 88 }, { name: 'RNNs', pct: 78 }],
  },
  {
    title: 'Tools & Frameworks',
    color: 'var(--neural-teal)',
    skills: [{ name: 'LangChain', pct: 90 }, { name: 'HuggingFace', pct: 88 }, { name: 'TensorFlow', pct: 82 }, { name: 'PyTorch', pct: 85 }],
  },
]

function MiniBar({ name, pct, color, inView }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-xs text-[var(--text-dim)]">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="max-w-7xl mx-auto px-6 py-8" ref={ref}>
      <div className="mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--logic-violet)]">
          Module: Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar chart */}
        <GlassContainer meta="Skill Radar" accentColor="var(--neural-teal)" delay={0}>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="subject"
                tick={{ fill: 'var(--text-dim)', fontSize: 11, fontFamily: 'JetBrains Mono' }} />
              <Radar dataKey="A" stroke="#2DD4BF" fill="#2DD4BF" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </GlassContainer>

        {/* Skill categories 2x2 */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <GlassContainer key={cat.title} meta={cat.title} accentColor={cat.color} delay={i * 0.1}>
              {cat.skills.map(s => (
                <MiniBar key={s.name} name={s.name} pct={s.pct} color={cat.color} inView={inView} />
              ))}
            </GlassContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
