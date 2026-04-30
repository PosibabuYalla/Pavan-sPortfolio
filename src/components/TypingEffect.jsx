import { useState, useEffect } from 'react'

const skills = [
  'Large Language Models',
  'RAG Systems',
  'AI Agents',
  'Computer Vision',
  'Natural Language Processing',
  'Generative AI',
]

export default function TypingEffect() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = skills[idx]
    if (typing) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setIdx((idx + 1) % skills.length)
        setTyping(true)
      }
    }
  }, [text, typing, idx])

  return (
    <span className="text-[var(--neural-teal)]">
      {text}<span className="animate-pulse">█</span>
    </span>
  )
}
