import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'AI Demo', to: '/ai-demo' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5"
      style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="PA Logo" className="w-16 h-16" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const active = pathname === l.to
            return (
              <Link key={l.to} to={l.to}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 font-mono
                  ${active
                    ? 'bg-[rgba(45,212,191,0.1)] text-[var(--neural-teal)] border border-[rgba(45,212,191,0.2)]'
                    : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'
                  }`}>
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Status + hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono text-xs text-green-400 tracking-widest">ONLINE</span>
          </div>
          <button className="md:hidden text-[var(--text-dim)] p-1" onClick={() => setOpen(!open)}>
            <div className="space-y-1.5 w-5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 px-6 py-4 space-y-1"
            style={{ background: 'rgba(2,6,23,0.97)' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-lg font-mono text-sm transition-colors
                  ${pathname === l.to ? 'text-[var(--neural-teal)]' : 'text-[var(--text-dim)]'}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
