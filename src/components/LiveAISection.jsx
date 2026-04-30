import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Cpu, Bot, User } from 'lucide-react'
import GlassContainer from './GlassContainer'

const responses = {
  projects: `Here are my featured projects:\n\n**Multi-Agent RAG System** — Accuracy: 94.2%, Latency: 1.2s\nBuilt with LangChain, GPT-4, Pinecone, FastAPI\n\n**Text-to-SQL Chatbot** — Accuracy: 91.5%, Latency: 0.8s\nConverts natural language to SQL queries in real-time\n\n**Number Plate Detection** — Accuracy: 97.1%, FPS: 22\nYOLO + EasyOCR with super-resolution enhancement`,
  skills: `My technical skills:\n\n🐍 **Programming**: Python 95%, SQL 85%, JavaScript 70%\n🤖 **AI & LLM**: RAG Systems 92%, Prompt Engineering 90%, Embeddings 88%\n🧠 **ML/DL**: CNN 85%, YOLO 80%, Transformers 88%\n⚙️ **Frameworks**: LangChain 90%, HuggingFace 88%, PyTorch 85%`,
  rag: `**RAG (Retrieval-Augmented Generation)** in 3 steps:\n\n**Step 1 — Index**: Documents are chunked and converted to vector embeddings, stored in a vector database like Pinecone.\n\n**Step 2 — Retrieve**: When a query arrives, it's embedded and semantically similar chunks are retrieved from the vector store.\n\n**Step 3 — Generate**: The retrieved context + query are passed to an LLM (like GPT-4) to generate a grounded, accurate response.`,
  experience: `My work experience:\n\n**AI Developer Intern @ Code Crafters** (2024)\nBuilt LLM-based HR assistant, RAG workflows, prompt pipelines for automated candidate screening.\n\n**Machine Learning Intern @ Feynn Labs** (2024)\nEV market segmentation using clustering & classification. Feature engineering, EDA, model evaluation.`,
  contact: `You can reach Pavan through:\n\n📧 **Email**: ayithireddypavan8466@gmail.com\n📱 **Phone**: +91 9603698176\n💼 **LinkedIn**: linkedin.com/in/pavan-ayithireddy-67a487245\n🐙 **GitHub**: github.com/pav16an\n📍 **Location**: Andhra Pradesh, India`,
}

const getResponse = (msg) => {
  const m = msg.toLowerCase()
  if (m.includes('project')) return responses.projects
  if (m.includes('skill') || m.includes('tech')) return responses.skills
  if (m.includes('rag') || m.includes('retrieval')) return responses.rag
  if (m.includes('experience') || m.includes('work') || m.includes('intern')) return responses.experience
  if (m.includes('contact') || m.includes('email') || m.includes('reach')) return responses.contact
  return `I'm Pavan's AI portfolio assistant. I can tell you about his **projects**, **skills**, **RAG systems**, **experience**, or **contact** info. What would you like to know?`
}

const quickQueries = ['Tell me about projects', 'What are your skills?', 'Explain RAG', 'Work experience', 'How to contact?']

function parseMessage(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-[var(--neural-teal)]">{part.slice(2, -2)}</strong>
      : part
  )
}

export default function LiveAISection() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm Pavan's AI portfolio assistant. Ask me about his **projects**, **skills**, **experience**, or **contact** info!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [logs, setLogs] = useState(['[SYSTEM] Portfolio assistant initialized', '[READY] Awaiting queries...'])
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg || typing) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)
    setLogs(prev => [...prev, `[INPUT] ${msg}`, '[THINKING] Processing query...'])

    setTimeout(() => {
      const reply = getResponse(msg)
      setMessages(prev => [...prev, { role: 'ai', text: reply }])
      setTyping(false)
      setLogs(prev => [...prev, '[OUTPUT] Response generated', `[LATENCY] ${Math.floor(Math.random() * 200 + 100)}ms`])
    }, 1200 + Math.random() * 600)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--neural-teal)]">
          Module: AI_Demo
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Live <span className="gradient-text">AI Assistant</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Chat panel — 3/5 */}
        <div className="lg:col-span-3 glass rounded-2xl flex flex-col" style={{ height: 'calc(100vh - 220px)', minHeight: '420px' }}>
          {/* Chat header */}
          <div className="flex items-center gap-3 p-4 border-b border-white/5 flex-shrink-0">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(45,212,191,0.1)' }}>
              <Cpu size={16} className="text-[var(--neural-teal)]" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-[var(--text-main)]">PA_Assistant v1.0</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                <span className="font-mono text-[10px] text-green-400">ACTIVE // 24ms</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight: 0 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'ai' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(45,212,191,0.15)' }}>
                    <Bot size={14} className="text-[var(--neural-teal)]" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line
                  ${m.role === 'user'
                    ? 'rounded-tr-sm text-white'
                    : 'rounded-tl-sm text-[var(--text-dim)]'}`}
                  style={{
                    background: m.role === 'user'
                      ? 'rgba(168,85,247,0.25)'
                      : 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}>
                  {parseMessage(m.text)}
                </div>
                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(168,85,247,0.2)' }}>
                    <User size={14} className="text-[var(--logic-violet)]" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            <AnimatePresence>
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(45,212,191,0.15)' }}>
                    <Bot size={14} className="text-[var(--neural-teal)]" />
                  </div>
                  <div className="flex gap-1 px-4 py-3 rounded-2xl rounded-tl-sm"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {[0, 1, 2].map(i => (
                      <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--neural-teal)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 flex-shrink-0">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask about projects, skills, experience..."
                disabled={typing}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--neural-teal)] transition-colors disabled:opacity-50"
              />
              <button onClick={() => send()} disabled={typing || !input.trim()}
                className="p-2.5 rounded-xl transition-all disabled:opacity-40 hover:scale-105"
                style={{ background: 'var(--neural-teal)', color: 'var(--midnight)' }}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Side panels — 2/5 */}
        <div className="lg:col-span-2 space-y-4">
          {/* Quick queries */}
          <GlassContainer meta="Quick Queries" accentColor="var(--neural-teal)">
            <div className="space-y-2">
              {quickQueries.map(q => (
                <button key={q} onClick={() => send(q)} disabled={typing}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-[var(--text-dim)] border border-white/5 hover:border-[var(--neural-teal)] hover:text-[var(--neural-teal)] transition-all disabled:opacity-40 font-mono">
                  {q}
                </button>
              ))}
            </div>
          </GlassContainer>

          {/* System log */}
          <GlassContainer meta="System Log" accentColor="var(--logic-violet)">
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {logs.map((l, i) => (
                <div key={i} className={`font-mono text-[10px] ${l.includes('THINKING') ? 'text-[var(--kinetic-orange)]' : 'text-[var(--text-dim)]'}`}>
                  {l}
                </div>
              ))}
            </div>
          </GlassContainer>

          {/* Model info */}
          <GlassContainer meta="Model Info" accentColor="var(--kinetic-orange)">
            <div className="space-y-2">
              {[
                { label: 'Engine', value: 'PA_LLM v1.0' },
                { label: 'KB Size', value: '4.2 MB' },
                { label: 'Latency', value: '~24ms' },
                { label: 'Accuracy', value: '94.2%' },
              ].map(item => (
                <div key={item.label} className="flex justify-between">
                  <span className="font-mono text-xs text-[var(--text-dim)]">{item.label}</span>
                  <span className="font-mono text-xs text-[var(--neural-teal)]">{item.value}</span>
                </div>
              ))}
            </div>
          </GlassContainer>
        </div>
      </div>
    </section>
  )
}
