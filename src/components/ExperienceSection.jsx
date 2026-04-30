import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase } from 'lucide-react'
import GlassContainer from './GlassContainer'

const experiences = [
  {
    role: 'AI Developer Intern',
    company: 'Code Crafters',
    period: 'May 2024 – Jun 2024',
    color: 'var(--neural-teal)',
    points: [
      'Developed RAG-based chatbot systems for enterprise clients',
      'Engineered prompt templates achieving 40% improvement in accuracy',
      'Built data pipelines processing 100K+ documents for vector embeddings',
      'Collaborated with cross-functional teams on AI-powered product features',
    ],
    badges: ['LangChain', 'FastAPI', 'Pinecone', 'Python'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Feynn Labs',
    period: 'Aug 2024 – Oct 2024',
    color: 'var(--logic-violet)',
    points: [
      'Researched and implemented SOTA NLP models for text classification',
      'Developed computer vision pipeline for real-time object detection',
      'Created automated ML model evaluation and benchmarking framework',
      'Applied clustering and classification for EV market segmentation',
    ],
    badges: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
  },
]

function ExperienceEntry({ exp, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <GlassContainer delay={delay} className="glass-hover">
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl mt-0.5" style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
              <Briefcase size={16} style={{ color: exp.color }} />
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-main)] text-lg">{exp.role}</h3>
              <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
              <span className="font-mono text-xs text-[var(--text-dim)]">{exp.period}</span>
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
            className="mt-1 text-[var(--text-dim)]">
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden">
            <div className="pt-5 mt-4 border-t border-white/5">
              <ul className="space-y-2 mb-4">
                {exp.points.map((p, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-[var(--text-dim)]">
                    <span style={{ color: exp.color }} className="mt-1">▸</span> {p}
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.badges.map(b => (
                  <span key={b} className="font-mono text-[10px] px-2 py-1 rounded-full border"
                    style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}10` }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassContainer>
  )
}

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--kinetic-orange)]">
          Module: Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Work <span className="gradient-text">History</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--neural-teal), var(--logic-violet), transparent)' }} />
        <div className="pl-8 space-y-6">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative">
              <div className="absolute -left-[33px] w-3 h-3 rounded-full pulse-dot"
                style={{ backgroundColor: exp.color, top: '24px' }} />
              <ExperienceEntry exp={exp} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
