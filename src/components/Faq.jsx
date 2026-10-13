import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most teams import docs and connect chat in under an hour. The guided import pulls your spaces, channels and tickets, then suggests a clean structure you can accept or edit.',
  },
  {
    q: 'Is my data used to train AI models?',
    a: 'No. Your workspace content is never used to train shared models. AI features run on isolated capacity with strict retention controls, and Scale plans can pin data to the EU.',
  },
  {
    q: 'Can I migrate from my current tools?',
    a: 'Yes. One click importers cover docs, boards and chat history from the tools you already use. Links and attachments carry over, and nothing is deleted at the source.',
  },
  {
    q: 'What happens when the trial ends?',
    a: 'You keep read access to everything, forever free. Paid features pause until you pick a plan, so there is no surprise bill and no lock in.',
  },
  {
    q: 'Do you offer discounts for startups or schools?',
    a: 'Yes. Early stage startups get 50 percent off Growth for the first year, and accredited schools use Pulse free. Write to us from your work email to apply.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Anytime, in two clicks, from billing settings. Annual plans are refunded pro rata within the first 60 days.',
  },
]

function Item({ faq, open, onToggle, index }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-panel shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-fog">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg leading-none ${
            open ? 'bg-accent text-accentink' : 'bg-raised text-fog'
          }`}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="faq-heading">
      <Reveal className="text-center">
        <p className="text-sm font-semibold text-accent">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
          Answers before you ask
        </h2>
      </Reveal>
      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 0.04}>
            <Item
              faq={faq}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
