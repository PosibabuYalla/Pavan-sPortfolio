import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Multi-Agent Document Intelligence System',
    subtitle: 'AI-driven RAG',
    description: 'Multi-agent system to analyze TXT, PDF, and DOCX documents using specialized LLM agents for summarization, action-item extraction, and risk detection.',
    tags: ['LangChain', 'RAG', 'Vector DB', 'LLMs', 'Embeddings', 'Multi-Agent'],
    live: 'https://multi-agentic-ai-api.onrender.com',
    color: 'indigo',
    icon: '🤖',
    points: [
      'Dedicated agents for summarization, action-item extraction, and risk/open-issue detection.',
      'Embedding-based retrieval with vector databases for semantic search.',
      'Improved response quality using prompt engineering and structured workflows.',
    ],
  },
  {
    title: 'Text-to-SQL AI Chatbot',
    subtitle: 'GenAI + Full Stack',
    description: 'Chatbot that converts natural language queries into SQL queries for real-time database interaction with a full-stack React + Flask interface.',
    tags: ['GenAI', 'Flask', 'React', 'SQL', 'Prompt Engineering', 'NLP'],
    color: 'cyan',
    icon: '💬',
    points: [
      'Schema-aware query generation using database metadata and contextual prompts.',
      'Full-stack system with Flask APIs and React for real-time chat interface.',
      'Enhanced query accuracy using session-based context handling.',
    ],
  },
  {
    title: 'AI-Based Number Plate Detection',
    subtitle: 'Computer Vision + Super Resolution',
    description: 'License plate detection and recognition system using YOLO and EasyOCR with super-resolution enhancement for improved accuracy.',
    tags: ['YOLO', 'EasyOCR', 'Computer Vision', 'Super Resolution', 'PyTorch', 'OpenCV'],
    color: 'purple',
    icon: '🔍',
    points: [
      'Applied super-resolution to enhance image quality and improve OCR accuracy.',
      'Preprocessing pipelines to handle noise, blur, and lighting variations.',
      'End-to-end detection and recognition pipeline.',
    ],
  },
]

const cardBorder = { indigo: 'hover:border-indigo-400/50', cyan: 'hover:border-cyan-400/50', purple: 'hover:border-purple-400/50' }
const tagStyle = { indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20' }

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2">Featured <span className="gradient-text">Projects</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`card-bg rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl ${cardBorder[p.color]}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.icon}</span>
                <div className="flex gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="p-2 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all">
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a href="https://github.com/pav16an" target="_blank" rel="noreferrer"
                    className="p-2 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all">
                    <Code2 size={14} />
                  </a>
                </div>
              </div>
              <div className="mb-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tagStyle[p.color]}`}>{p.subtitle}</span>
              </div>
              <h3 className="text-white font-bold text-lg mt-2 mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.description}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-500 text-xs">
                    <span className="text-indigo-400 mt-0.5">▸</span> {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => (
                  <span key={tag} className={`px-2 py-0.5 rounded-full text-xs border ${tagStyle[p.color]}`}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
