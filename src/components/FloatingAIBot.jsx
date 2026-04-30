import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, User } from 'lucide-react'
import { RiRobot2Fill, RiRobot2Line } from 'react-icons/ri'
import { FaProjectDiagram, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt, FaCheckCircle, FaTools, FaDatabase, FaBrain } from 'react-icons/fa'
import { SiLangchain, SiPython } from 'react-icons/si'
import { MdOutlineContactMail } from 'react-icons/md'

const KB = {
  name: 'Pavan Ayithireddy',
  email: 'ayithireddypavan8466@gmail.com',
  phone: '+91 9603698176',
  location: 'Andhra Pradesh, India',
  linkedin: 'linkedin.com/in/pavan-ayithireddy-67a487245',
  github: 'github.com/pav16an',
  portfolio: 'portfolio-1upm.onrender.com',
  summary: 'AI/ML Engineer specializing in Generative AI, LLM-based systems, and end-to-end machine learning solutions. Experienced in building Retrieval-Augmented Generation (RAG) pipelines, prompt engineering workflows, and intelligent automation systems. Strong foundation in Python, SQL, and deep learning.',
  education: 'B.Tech in Computer Science Engineering (AI & ML) from Kakinada Institute of Engineering and Technology, affiliated to JNTUK. CGPA: 7.52/10. Duration: 2021–2025.',
  experience: [
    {
      role: 'AI/ML Intern', company: 'Code Crafters', period: 'May 2024 – Jun 2024',
      points: [
        'Developed an AI-powered HR Assistant for automated candidate screening',
        'Built LLM-based workflows for resume analysis and information extraction',
        'Designed prompt pipelines to improve response accuracy',
        'Implemented multi-step reasoning workflows',
        'Integrated backend logic for dynamic query handling',
      ],
    },
    {
      role: 'Machine Learning Intern', company: 'Feynn Labs', period: 'Aug 2024 – Oct 2024',
      points: [
        'Developed ML models for EV market segmentation',
        'Performed data preprocessing, feature engineering, and EDA',
        'Applied clustering and classification for customer segmentation',
        'Evaluated models using accuracy, precision, recall, and F1-score',
        'Generated insights to support EV market decision-making',
      ],
    },
  ],
  projects: [
    {
      name: 'Multi-Agent Document Intelligence System', type: 'AI-driven RAG',
      stack: 'LangChain, GPT-4, Pinecone, FastAPI, Python',
      live: 'https://multi-agentic-ai-app.onrender.com', accuracy: '94.2%',
      desc: 'Built a multi-agent system to analyze TXT, PDF, and DOCX documents using specialized LLM agents for summarization, action-item extraction, and risk/open-issue detection.',
    },
    {
      name: 'Text-to-SQL AI Chatbot', type: 'GenAI + Full Stack',
      stack: 'LLM, Flask, React, PostgreSQL, Python', accuracy: '91.5%',
      desc: 'Developed a chatbot to convert natural language queries into SQL queries. Built full-stack system using Flask APIs and React with schema-aware query generation.',
    },
    {
      name: 'AI-Based Number Plate Detection', type: 'Computer Vision',
      stack: 'YOLO, EasyOCR, OpenCV, Python, Flask', accuracy: '85%',
      desc: 'Built a system for license plate detection and recognition using YOLO and EasyOCR with super-resolution enhancement and preprocessing pipelines.',
    },
  ],
  skills: {
    programming: 'Python (95%), SQL (85%), JavaScript (70%)',
    ai_llm: 'Generative AI, LLMs, RAG Systems (92%), Prompt Engineering (90%), Embeddings (88%), Fine-Tuning (82%)',
    ml: 'Classification, Regression, Feature Engineering, Model Evaluation, Clustering',
    deep_learning: 'CNN (85%), YOLO (80%), Transformers (88%), RNNs (78%), Computer Vision',
    nlp: 'Text Processing, Semantic Search, NLP (87%)',
    frameworks: 'LangChain (90%), HuggingFace (88%), Scikit-learn, TensorFlow (82%), PyTorch (85%), Flask, React',
    databases: 'MySQL, Vector Databases (Pinecone), PostgreSQL',
    tools: 'Git, GitHub, Jupyter Notebook',
  },
  certifications: ['Python Programming — Edyst', 'Full Stack Data Science Pro — PW Skills', 'Machine Learning Internship — IIIT'],
}

function getResponse(msg) {
  const m = msg.toLowerCase()
  if (m.match(/^(hi|hello|hey|howdy|sup)/))
    return `Hello! I'm Pavan's AI assistant. I know everything about him — his **projects**, **skills**, **experience**, **education**, and **contact** details. What would you like to know?`
  if (m.match(/who (is|are) pavan|about pavan|tell me about|introduce|summary|overview/))
    return `**Pavan Ayithireddy** is an AI/ML Engineer from Andhra Pradesh, India.\n\n${KB.summary}\n\nLocation: ${KB.location} | B.Tech CSE (AI & ML) | CGPA: 7.52`
  if (m.match(/project|built|portfolio|demo|rag system|sql|number plate|chatbot/))
    return KB.projects.map(p => `**${p.name}** (${p.type})\n${p.desc}\nStack: ${p.stack}\nAccuracy: ${p.accuracy}${p.live ? `\nLive: ${p.live}` : ''}`).join('\n\n')
  if (m.match(/skill|tech|know|language|framework|tool|python|langchain|pytorch|tensorflow/))
    return `**Pavan's Technical Skills:**\n\n**Programming**: ${KB.skills.programming}\n**AI & LLM**: ${KB.skills.ai_llm}\n**ML**: ${KB.skills.ml}\n**Deep Learning**: ${KB.skills.deep_learning}\n**NLP**: ${KB.skills.nlp}\n**Frameworks**: ${KB.skills.frameworks}\n**Databases**: ${KB.skills.databases}\n**Tools**: ${KB.skills.tools}`
  if (m.match(/experience|intern|work|job|company|feynn|code crafter/))
    return KB.experience.map(e => `**${e.role} @ ${e.company}** (${e.period})\n${e.points.map(p => `• ${p}`).join('\n')}`).join('\n\n')
  if (m.match(/education|college|university|degree|btech|cgpa|grade|jntuk|kiet/))
    return `**Education**\n\n${KB.education}`
  if (m.match(/certif|course|training/))
    return `**Certifications:**\n\n${KB.certifications.map(c => `• ${c}`).join('\n')}`
  if (m.match(/contact|email|phone|reach|linkedin|github|social/))
    return `**Contact Pavan:**\n\nEmail: **${KB.email}**\nPhone: **${KB.phone}**\nLinkedIn: **${KB.linkedin}**\nGitHub: **${KB.github}**\nPortfolio: **${KB.portfolio}**\nLocation: **${KB.location}**`
  if (m.match(/hire|available|open|opportunit|freelance|job|role/))
    return `**Pavan is open to opportunities!**\n\nHe's available for:\n• AI/ML Engineer roles\n• Generative AI & LLM projects\n• Freelance AI development\n• Research collaborations\n\nReach him at: **${KB.email}**\nResponse time: ~24 hours`
  if (m.match(/generat|llm|gpt|language model|transformer/))
    return `**Pavan & Generative AI:**\n\nPavan specializes in **Generative AI** and **LLM-based systems**:\n• Building **RAG pipelines** with LangChain + Pinecone\n• **Prompt engineering** for improved accuracy\n• **Multi-agent workflows** for document intelligence\n• **Text-to-SQL** using schema-aware LLM prompting\n• Fine-tuning and embedding models via HuggingFace`
  if (m.match(/location|where|india|andhra/))
    return `Pavan is based in **Andhra Pradesh, India** and is open to remote opportunities worldwide.`
  return `I can answer anything about Pavan! Try asking about:\n\n• **Projects** — RAG system, SQL chatbot, CV detection\n• **Skills** — Python, LangChain, PyTorch, etc.\n• **Experience** — Code Crafters, Feynn Labs\n• **Education** — B.Tech AI & ML\n• **Contact** — email, LinkedIn, GitHub\n• **Hiring** — availability & roles`
}

function parseMsg(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} style={{ color: 'var(--neural-teal)' }}>{p.slice(2, -2)}</strong>
      : p
  )
}

const quickQ = ['Who is Pavan?', 'Show projects', 'Technical skills', 'Work experience', 'How to hire?']

export default function FloatingAIBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Pavan's AI assistant. Ask me **anything** about him — projects, skills, experience, or how to hire him!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = (text || input).trim()
    if (!msg || typing) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: getResponse(msg) }])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-center">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative mb-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap cursor-pointer select-none"
              style={{
                background: 'linear-gradient(135deg, var(--neural-teal), var(--logic-violet))',
                color: 'var(--midnight)',
                boxShadow: '0 0 16px rgba(45,212,191,0.5)',
              }}
              onClick={() => setOpen(true)}>
              Ask me about Pavan!
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0"
                style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #A855F7' }} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            border: '2px solid var(--neural-teal)',
            boxShadow: '0 0 24px rgba(45,212,191,0.4)',
          }}>
          <motion.div className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ border: '2px solid var(--neural-teal)' }} />
          <RiRobot2Fill size={26} style={{ color: 'var(--neural-teal)' }} />
          <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#020617] pulse-dot" />
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-[200] flex flex-col rounded-2xl overflow-hidden"
            style={{
              width: '360px', height: '520px',
              background: 'rgba(15,23,42,0.97)',
              border: '1px solid rgba(45,212,191,0.25)',
              boxShadow: '0 0 40px rgba(45,212,191,0.15), 0 20px 60px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(20px)',
            }}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(45,212,191,0.05)' }}>
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(45,212,191,0.15)', border: '1px solid rgba(45,212,191,0.3)' }}>
                  <RiRobot2Fill size={16} style={{ color: 'var(--neural-teal)' }} />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border border-[#020617] pulse-dot" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-[var(--text-main)]">PA_Assistant</div>
                  <div className="font-mono text-[10px] text-green-400">ONLINE · Knows everything about Pavan</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'ai' && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(45,212,191,0.15)' }}>
                      <RiRobot2Line size={13} style={{ color: 'var(--neural-teal)' }} />
                    </div>
                  )}
                  <div className={`max-w-[82%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line
                    ${m.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                    style={{
                      background: m.role === 'user' ? 'rgba(168,85,247,0.3)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${m.role === 'user' ? 'rgba(168,85,247,0.3)' : 'rgba(255,255,255,0.07)'}`,
                      color: m.role === 'user' ? '#fff' : 'var(--text-dim)',
                    }}>
                    {parseMsg(m.text)}
                  </div>
                  {m.role === 'user' && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(168,85,247,0.2)' }}>
                      <User size={11} style={{ color: 'var(--logic-violet)' }} />
                    </div>
                  )}
                </div>
              ))}

              <AnimatePresence>
                {typing && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(45,212,191,0.15)' }}>
                      <RiRobot2Line size={13} style={{ color: 'var(--neural-teal)' }} />
                    </div>
                    <div className="flex gap-1 px-3 py-2 rounded-2xl rounded-tl-sm"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      {[0, 1, 2].map(i => (
                        <motion.span key={i} className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--neural-teal)' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Quick queries */}
            <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
              {quickQ.map(q => (
                <button key={q} onClick={() => send(q)} disabled={typing}
                  className="flex-shrink-0 px-2.5 py-1 rounded-full font-mono text-[10px] border transition-all disabled:opacity-40 hover:scale-105"
                  style={{ borderColor: 'rgba(45,212,191,0.3)', color: 'var(--neural-teal)', background: 'rgba(45,212,191,0.05)' }}>
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 pb-3 flex-shrink-0">
              <div className="flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Ask anything about Pavan..."
                  disabled={typing}
                  className="flex-1 rounded-xl px-3 py-2 text-xs text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none transition-colors disabled:opacity-50"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--neural-teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <button onClick={() => send()} disabled={typing || !input.trim()}
                  className="p-2 rounded-xl transition-all disabled:opacity-40 hover:scale-105 flex-shrink-0"
                  style={{ background: 'var(--neural-teal)', color: 'var(--midnight)' }}>
                  <Send size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
