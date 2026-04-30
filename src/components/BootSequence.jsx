import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  '> INITIALIZING_KERNEL...',
  '> LOADING_NEURAL_WEIGHTS... [████████████████] 100%',
  '> CALIBRATING_ATTENTION_HEADS...',
  '> TOKENIZER_READY',
  '> EMBEDDING_SPACE_MAPPED: 768 dimensions',
  '> LOADING_PORTFOLIO_DATA...',
  '> INTERFACE_READY.',
  '> WELCOME, USER.',
]

export default function BootSequence({ onDone }) {
  const [shown, setShown] = useState([])
  const [done, setDone] = useState(false)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < lines.length) {
        setShown(prev => [...prev, lines[i]])
        i++
      } else {
        clearInterval(interval)
        setDone(true)
        setTimeout(() => {
          setExit(true)
          setTimeout(onDone, 900)
        }, 800)
      }
    }, 180)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8"
        >
          <div className="max-w-xl w-full">
            <div className="font-mono text-sm space-y-2">
              {shown.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={line.includes('WELCOME') ? 'text-[var(--neural-teal)] font-bold text-base' : 'text-green-400'}
                >
                  {line}
                </motion.div>
              ))}
              {done && (
                <span className="text-[var(--neural-teal)] animate-pulse">█</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
