import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUserAstronaut, FaBrain, FaRocket, FaBriefcase, FaRobot, FaEnvelope } from 'react-icons/fa'
import BootSequence from '../components/BootSequence'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CursorGlow from '../components/CursorGlow'
import NeuralBackground from '../components/NeuralBackground'

const sectionPreviews = [
  {
    to: '/about',
    label: 'Module: Identity',
    title: 'About Me',
    accent: 'var(--neural-teal)',
    icon: <FaUserAstronaut size={18} />,
    preview: [
      { stat: '15+', label: 'Projects' },
      { stat: '25+', label: 'Technologies' },
      { stat: '10+', label: 'Models Built' },
    ],
    desc: 'B.Tech CSE (AI & ML) · CGPA 7.52 · Andhra Pradesh, India',
  },
  {
    to: '/skills',
    label: 'Module: Capabilities',
    title: 'Skills & Expertise',
    accent: 'var(--logic-violet)',
    icon: <FaBrain size={18} />,
    preview: [
      { stat: '95%', label: 'Python' },
      { stat: '92%', label: 'RAG Systems' },
      { stat: '90%', label: 'LangChain' },
    ],
    desc: 'LLMs · RAG · Prompt Engineering · Computer Vision · NLP',
  },
  {
    to: '/projects',
    label: 'Module: Projects',
    title: 'Featured Work',
    accent: 'var(--kinetic-orange)',
    icon: <FaRocket size={18} />,
    preview: [
      { stat: '94.2%', label: 'RAG Accuracy' },
      { stat: '97.1%', label: 'CV Accuracy' },
      { stat: '91.5%', label: 'SQL Accuracy' },
    ],
    desc: 'Multi-Agent RAG · Text-to-SQL · Number Plate Detection',
  },
  {
    to: '/experience',
    label: 'Module: Experience',
    title: 'Work History',
    accent: 'var(--neural-teal)',
    icon: <FaBriefcase size={18} />,
    preview: [
      { stat: '2', label: 'Internships' },
      { stat: '40%', label: 'Accuracy Boost' },
      { stat: '100K+', label: 'Docs Processed' },
    ],
    desc: 'AI Developer @ Code Crafters · ML Intern @ Feynn Labs',
  },
  {
    to: '/ai-demo',
    label: 'Module: AI_Demo',
    title: 'Live AI Assistant',
    accent: 'var(--logic-violet)',
    icon: <FaRobot size={18} />,
    preview: [
      { stat: '~24ms', label: 'Latency' },
      { stat: '94.2%', label: 'Accuracy' },
      { stat: '4.2MB', label: 'KB Size' },
    ],
    desc: 'Interactive portfolio assistant · Ask about projects, skills & more',
  },
  {
    to: '/contact',
    label: 'Module: Contact',
    title: 'Get In Touch',
    accent: 'var(--kinetic-orange)',
    icon: <FaEnvelope size={18} />,
    preview: [
      { stat: '~24h', label: 'Response' },
      { stat: 'Open', label: 'To Roles' },
      { stat: 'IN', label: 'Location' },
    ],
    desc: 'ayithireddypavan8466@gmail.com · +91 9603698176',
  },
]

export default function Home() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <CursorGlow />
      <NeuralBackground />

      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />

        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          {/* Hero — full viewport */}
          <div className="h-[calc(100vh-64px)]">
            <HeroSection />
          </div>

          {/* Section previews */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8"
            style={{ background: 'rgba(2,6,23,0.95)' }}>
            <div className="mb-6 text-center">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--neural-teal)]">
                System Overview
              </span>
              <h2 className="text-2xl font-extrabold mt-1 text-[var(--text-main)]">
                Explore <span className="gradient-text">Portfolio</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectionPreviews.map((s, i) => (
                <motion.div key={s.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}>
                  <Link to={s.to} className="block group">
                    <div className="glass rounded-2xl p-4 glass-hover transition-all duration-300 h-full"
                      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: s.accent }} />
                          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: s.accent }}>
                            {s.label}
                          </span>
                        </div>
                        <span style={{ color: s.accent }}>{s.icon}</span>
                      </div>

                      <h3 className="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--neural-teal)] transition-colors">
                        {s.title}
                      </h3>

                      {/* Mini stats */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {s.preview.map(p => (
                          <div key={p.label} className="text-center rounded-lg py-1.5"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="font-bold text-xs" style={{ color: s.accent }}>{p.stat}</div>
                            <div className="font-mono text-[9px] text-[var(--text-dim)]">{p.label}</div>
                          </div>
                        ))}
                      </div>

                      <p className="font-mono text-[10px] text-[var(--text-dim)] leading-relaxed">{s.desc}</p>

                      {/* CTA */}
                      <div className="mt-3 flex items-center gap-1 font-mono text-[10px] transition-colors"
                        style={{ color: s.accent }}>
                        View Section
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}>
                          →
                        </motion.span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
