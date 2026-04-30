import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import GlassContainer from './GlassContainer'

const radarData = [
  { subject: 'NLP', A: 87 },
  { subject: 'Vision', A: 82 },
  { subject: 'RAG', A: 92 },
  { subject: 'LLMs', A: 95 },
  { subject: 'Data Sci', A: 88 },
  { subject: 'MLOps', A: 75 },
]

const categories = [
  {
    title: 'Programming',
    color: 'var(--neural-teal)',
    skills: [{ name: 'Python', pct: 95 }, { name: 'SQL', pct: 85 }],
  },
  {
    title: 'AI & LLM',
    color: 'var(--logic-violet)',
    skills: [
      { name: 'Generative AI', pct: 92 },
      { name: 'LLMs', pct: 95 },
      { name: 'RAG', pct: 92 },
      { name: 'Prompt Engineering', pct: 90 },
      { name: 'Embeddings', pct: 88 },
    ],
  },
  {
    title: 'Machine Learning',
    color: 'var(--kinetic-orange)',
    skills: [
      { name: 'Classification', pct: 88 },
      { name: 'Regression', pct: 85 },
      { name: 'Feature Engineering', pct: 87 },
      { name: 'Model Evaluation', pct: 88 },
    ],
  },
  {
    title: 'Deep Learning & CV',
    color: 'var(--neural-teal)',
    skills: [
      { name: 'CNN', pct: 85 },
      { name: 'YOLO', pct: 80 },
      { name: 'Computer Vision', pct: 82 },
    ],
  },
  {
    title: 'NLP',
    color: 'var(--logic-violet)',
    skills: [
      { name: 'Text Processing', pct: 87 },
      { name: 'Semantic Search', pct: 85 },
    ],
  },
  {
    title: 'Frameworks',
    color: 'var(--kinetic-orange)',
    skills: [
      { name: 'LangChain', pct: 90 },
      { name: 'HuggingFace', pct: 88 },
      { name: 'Scikit-learn', pct: 86 },
      { name: 'TensorFlow', pct: 82 },
      { name: 'PyTorch', pct: 85 },
    ],
  },
  {
    title: 'Data Analysis',
    color: 'var(--neural-teal)',
    skills: [
      { name: 'EDA', pct: 88 },
      { name: 'Data Cleaning', pct: 87 },
      { name: 'Visualization', pct: 85 },
    ],
  },
  {
    title: 'Tools & Databases',
    color: 'var(--logic-violet)',
    skills: [
      { name: 'Git / GitHub', pct: 88 },
      { name: 'Jupyter Notebook', pct: 90 },
      { name: 'MySQL', pct: 82 },
      { name: 'Vector Databases', pct: 85 },
    ],
  },
]

function MiniBar({ name, pct, color, inView }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-0.5">
        <span className="font-mono text-[11px] text-[var(--text-dim)]">{name}</span>
        <span className="font-mono text-[11px]" style={{ color }}>{pct}%</span>
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
    <div className="max-w-7xl mx-auto w-full px-6 py-4" ref={ref}>
      <div className="mb-4">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--logic-violet)]">
          Module: Capabilities
        </span>
        <h2 className="text-2xl font-extrabold mt-1">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Radar chart */}
        <GlassContainer meta="Skill Radar" accentColor="var(--neural-teal)" delay={0} className="lg:col-span-1">
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="subject"
                tick={{ fill: 'var(--text-dim)', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
              <Radar dataKey="A" stroke="#2DD4BF" fill="#2DD4BF" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </GlassContainer>

        {/* All skill categories — responsive grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <GlassContainer key={cat.title} meta={cat.title} accentColor={cat.color} delay={i * 0.07}>
              {cat.skills.map(s => (
                <MiniBar key={s.name} name={s.name} pct={s.pct} color={cat.color} inView={inView} />
              ))}
            </GlassContainer>
          ))}
        </div>
      </div>
    </div>
  )
}
