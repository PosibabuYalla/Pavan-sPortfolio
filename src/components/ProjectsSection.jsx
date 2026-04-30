import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2, ChevronDown } from 'lucide-react'
import GlassContainer from './GlassContainer'

const projects = [
  {
    title: 'Multi-Agent RAG System',
    subtitle: 'AI-driven Document Intelligence',
    stack: ['LangChain', 'GPT-4', 'Pinecone', 'FastAPI'],
    color: 'var(--neural-teal)',
    live: 'https://multi-agentic-ai-app.onrender.com',
    metrics: [{ label: 'Accuracy', value: '94.2%' }, { label: 'Latency', value: '1.2s' }, { label: 'Tokens', value: '847' }],
    logs: [
      '> Agent_Router: Analyzing query intent...',
      '> Agent_Retriever: Searching 3 knowledge bases...',
      '> Documents found: 12 | Relevance: 0.94',
      '> Agent_Synthesizer: Generating response...',
      '> Response ready | Tokens: 847 | Latency: 1.2s',
    ],
  },
  {
    title: 'Text-to-SQL Chatbot',
    subtitle: 'GenAI + Full Stack',
    stack: ['LLM', 'SQLAlchemy', 'Streamlit', 'PostgreSQL'],
    color: 'var(--logic-violet)',
    metrics: [{ label: 'Accuracy', value: '91.5%' }, { label: 'Latency', value: '0.8s' }, { label: 'Queries', value: '50+' }],
    logs: [
      '> Input: "Show top 10 customers by revenue"',
      '> Parsing natural language...',
      '> SQL: SELECT name, SUM(amount) FROM orders...',
      '> Query executed | Rows: 10 | Time: 0.3s',
      '> Visualization rendered: Bar Chart',
    ],
  },
  {
    title: 'Number Plate Detection',
    subtitle: 'Computer Vision + Super Resolution',
    stack: ['YOLO', 'OpenCV', 'Tesseract OCR', 'Flask'],
    color: 'var(--kinetic-orange)',
    metrics: [{ label: 'Accuracy', value: '97.1%' }, { label: 'FPS', value: '22' }, { label: 'Plates', value: '1000+' }],
    live: 'https://ai-based-number-plate-detection-with-njnw.onrender.com',
    logs: [
      '> Loading YOLO model weights...',
      '> Frame captured | Resolution: 1920x1080',
      '> Detection: 2 plates | Confidence: 0.97',
      '> OCR Processing: "KA-01-AB-1234"',
      '> Result stored | Processing: 45ms/frame',
    ],
  },
]

function ProjectCard({ project, delay }) {
  const [logIdx, setLogIdx] = useState(0)
  const [showMetrics, setShowMetrics] = useState(false)
  const intervalRef = useRef(null)

  const handleEnter = () => {
    setLogIdx(0); let i = 0
    intervalRef.current = setInterval(() => {
      i++
      if (i < project.logs.length) setLogIdx(i)
      else clearInterval(intervalRef.current)
    }, 300)
  }
  const handleLeave = () => { clearInterval(intervalRef.current); setLogIdx(0) }

  return (
    <GlassContainer delay={delay} className="flex flex-col glass-hover cursor-default h-full">
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-0.5" style={{ color: project.color }}>
              {project.subtitle}
            </span>
            <h3 className="font-bold text-sm text-[var(--text-main)] leading-tight">{project.title}</h3>
          </div>
          <div className="flex gap-1">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                className="p-1.5 rounded-lg border border-white/10 hover:border-[var(--neural-teal)] text-[var(--text-dim)] hover:text-[var(--neural-teal)] transition-all">
                <ExternalLink size={11} />
              </a>
            )}
            <a href="https://github.com/pav16an" target="_blank" rel="noreferrer"
              className="p-1.5 rounded-lg border border-white/10 hover:border-[var(--neural-teal)] text-[var(--text-dim)] hover:text-[var(--neural-teal)] transition-all">
              <Code2 size={11} />
            </a>
          </div>
        </div>

        <div className="rounded-lg p-2 mb-2 flex-1" style={{ background: 'rgba(0,0,0,0.4)', minHeight: '80px' }}>
          {project.logs.slice(0, logIdx + 1).map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-mono text-[10px] text-green-400 leading-relaxed">{line}</motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.stack.map(s => (
            <span key={s} className="font-mono text-[10px] px-1.5 py-0.5 rounded-full border border-white/10 text-[var(--text-dim)]">{s}</span>
          ))}
        </div>
      </div>

      <button onClick={() => setShowMetrics(!showMetrics)}
        className="flex items-center gap-1 font-mono text-[11px] transition-colors mt-auto"
        style={{ color: project.color }}>
        Metrics <motion.span animate={{ rotate: showMetrics ? 180 : 0 }}><ChevronDown size={11} /></motion.span>
      </button>

      <AnimatePresence>
        {showMetrics && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/5 mt-1">
              {project.metrics.map(m => (
                <div key={m.label} className="text-center p-1.5 rounded-lg" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <div className="font-bold text-xs" style={{ color: project.color }}>{m.value}</div>
                  <div className="font-mono text-[9px] text-[var(--text-dim)]">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassContainer>
  )
}

export default function ProjectsSection() {
  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto w-full px-6 py-4">
      <div className="mb-3">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--kinetic-orange)]">Module: Projects</span>
        <h2 className="text-2xl font-extrabold mt-1">Featured <span className="gradient-text">Work</span></h2>
      </div>
      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.1} />)}
      </div>
    </div>
  )
}
