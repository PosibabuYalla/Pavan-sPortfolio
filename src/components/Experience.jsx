import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'Code Crafters',
    period: 'May 2024 – Jun 2024',
    color: 'cyan',
    points: [
      'Developed an AI-powered HR Assistant for automated candidate screening.',
      'Built LLM-based workflows for resume analysis and information extraction.',
      'Designed prompt pipelines to improve response accuracy.',
      'Implemented multi-step reasoning workflows.',
      'Integrated backend logic for dynamic query handling.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Feynn Labs',
    period: 'Aug 2024 – Oct 2024',
    color: 'indigo',
    points: [
      'Developed ML models for EV market segmentation to identify customer groups.',
      'Performed data preprocessing, feature engineering, and exploratory data analysis.',
      'Applied clustering and classification techniques for customer segmentation.',
      'Evaluated models using accuracy, precision, recall, and F1-score.',
      'Generated insights to support EV market decision-making.',
    ],
  },
]

const borderColor = { cyan: 'border-cyan-500', indigo: 'border-indigo-500' }
const dotColor = { cyan: 'bg-cyan-500', indigo: 'bg-indigo-500' }
const badgeColor = { cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' }

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Career Path</span>
          <h2 className="text-4xl font-bold text-white mt-2">Work <span className="gradient-text">Experience</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16">
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 ${borderColor[exp.color]} ${dotColor[exp.color]} opacity-80`} />
                <div className="card-bg rounded-2xl p-6 hover:border-indigo-400/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-indigo-400" />
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      </div>
                      <p className="text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badgeColor[exp.color]}`}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-indigo-400 mt-1">▸</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
