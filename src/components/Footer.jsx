import { Terminal } from 'lucide-react'

const tickerItems = [
  'GPT-4o achieves new MMLU benchmark record',
  'LangChain v0.3 introduces improved agent framework',
  'Meta releases Llama 3.1 with 405B parameters',
  'Google DeepMind advances protein structure prediction',
  'OpenAI launches o1 reasoning model',
  'Anthropic Claude 3.5 Sonnet tops coding benchmarks',
  'Mistral AI releases Mixtral 8x22B open-source model',
  'RAG systems outperform fine-tuning in enterprise deployments',
]

export default function Footer() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <footer className="border-t border-white/5 mt-auto" style={{ background: 'rgba(2,6,23,0.9)' }}>
      {/* Ticker */}
      <div className="overflow-hidden py-3 border-b border-white/5">
        <div className="flex gap-12 ticker-track whitespace-nowrap" style={{ width: 'max-content' }}>
          {doubled.map((item, i) => (
            <span key={i} className="font-mono text-xs text-[var(--text-dim)] flex items-center gap-3">
              <span className="text-[var(--neural-teal)]">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[var(--neural-teal)]" />
          <span className="font-mono text-xs text-[var(--text-dim)]">
            © 2025 Pavan Ayithireddy
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-dim)]">
          v1.0.0 // {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
