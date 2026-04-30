import { motion } from 'framer-motion'

export default function GlassContainer({ children, className = '', meta, accentColor = 'var(--neural-teal)', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-2xl p-4 glass-hover transition-all duration-300 ${className}`}
    >
      {meta && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: accentColor }} />
          <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: accentColor }}>
            {meta}
          </span>
        </div>
      )}
      {children}
    </motion.div>
  )
}
