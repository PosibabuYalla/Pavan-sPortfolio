import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'AI & Generative AI',
    color: 'indigo',
    icon: '🤖',
    skills: ['Generative AI', 'LLMs', 'RAG Pipelines', 'Prompt Engineering', 'Embeddings', 'Semantic Search'],
  },
  {
    category: 'Machine Learning',
    color: 'purple',
    icon: '🧠',
    skills: ['Classification', 'Regression', 'Clustering', 'Feature Engineering', 'Model Evaluation', 'EDA'],
  },
  {
    category: 'Deep Learning & CV',
    color: 'cyan',
    icon: '👁️',
    skills: ['CNN', 'YOLO', 'Computer Vision', 'TensorFlow', 'PyTorch', 'Super Resolution'],
  },
  {
    category: 'Frameworks & Tools',
    color: 'violet',
    icon: '⚙️',
    skills: ['LangChain', 'HuggingFace', 'Scikit-learn', 'Flask', 'React', 'Git/GitHub'],
  },
  {
    category: 'Programming & Data',
    color: 'teal',
    icon: '💻',
    skills: ['Python', 'SQL', 'NLP', 'Text Processing', 'Data Visualization', 'Jupyter'],
  },
  {
    category: 'Databases',
    color: 'blue',
    icon: '🗄️',
    skills: ['MySQL', 'Vector Databases', 'Schema Design', 'Query Optimization'],
  },
]

const colorMap = {
  indigo: 'border-indigo-500/30 hover:border-indigo-400/60 bg-indigo-500/5',
  purple: 'border-purple-500/30 hover:border-purple-400/60 bg-purple-500/5',
  cyan: 'border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-500/5',
  violet: 'border-violet-500/30 hover:border-violet-400/60 bg-violet-500/5',
  teal: 'border-teal-500/30 hover:border-teal-400/60 bg-teal-500/5',
  blue: 'border-blue-500/30 hover:border-blue-400/60 bg-blue-500/5',
}

const tagColorMap = {
  indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20',
  purple: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
  cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  violet: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  teal: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  blue: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Technical Arsenal</span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills & <span className="gradient-text">Expertise</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 transition-all duration-300 cursor-default ${colorMap[group.color]}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium border ${tagColorMap[group.color]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
