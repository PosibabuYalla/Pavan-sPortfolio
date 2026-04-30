import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const certs = [
  { name: 'Python Programming', issuer: 'Edyst', icon: '🐍', color: 'indigo' },
  { name: 'Full Stack Data Science Pro', issuer: 'PW Skills', icon: '📊', color: 'cyan' },
  { name: 'Machine Learning Internship', issuer: 'IIIT', icon: '🤖', color: 'purple' },
]

const certStyle = {
  indigo: 'border-indigo-500/30 hover:border-indigo-400/60 bg-indigo-500/5',
  cyan: 'border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-500/5',
  purple: 'border-purple-500/30 hover:border-purple-400/60 bg-purple-500/5',
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Academic Background</span>
          <h2 className="text-4xl font-bold text-white mt-2">Education & <span className="gradient-text">Certifications</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <GraduationCap size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Education</h3>
            </div>
            <div className="card-bg rounded-2xl p-6 hover:border-indigo-400/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-white font-bold">B.Tech in CSE (AI & ML)</h4>
                  <p className="text-indigo-400 font-medium mt-1">Kakinada Institute of Engineering and Technology</p>
                  <p className="text-slate-500 text-sm mt-1">Affiliated to JNTUK</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                  2021 – 2025
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 text-sm">CGPA</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: '75.2%' } : {}} transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                  </div>
                  <span className="text-white font-bold">7.52 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Award size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <motion.div key={cert.name}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className={`rounded-xl border p-4 flex items-center gap-4 transition-all duration-300 ${certStyle[cert.color]}`}>
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{cert.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
