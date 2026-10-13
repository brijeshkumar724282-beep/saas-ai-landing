import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'

function Counter({ to, decimals = 0, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let frame
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(to * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const metrics = [
  { value: <Counter to={12} suffix="k" />, label: 'teams run on Pulse' },
  { value: <Counter to={99.99} decimals={2} suffix="%" />, label: 'uptime last year' },
  { value: <Counter to={4.9} decimals={1} />, label: 'average rating' },
  { value: <Counter to={38} suffix="%" />, label: 'faster sprint close' },
]

const quotes = [
  {
    quote:
      'We killed four tools the week we moved. Standup writes itself now and the roadmap finally matches reality.',
    name: 'Amara Osei',
    role: 'Head of Product, Northbeam',
    initials: 'AO',
  },
  {
    quote:
      'The AI answers cite the exact doc they came from. That one detail made our security review take a day, not a month.',
    name: 'Jonas Meyer',
    role: 'CTO, Helios',
    initials: 'JM',
  },
  {
    quote:
      'Our cycle time dropped by a third in one quarter. I open Pulse first every morning and close three tabs I used to need.',
    name: 'Rina Shah',
    role: 'Engineering Lead, Craftly',
    initials: 'RS',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-panel py-20 shadow-card sm:py-28" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-ink px-6 py-8 text-center">
              <dd className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {m.value}
              </dd>
              <dt className="mt-2 text-sm text-muted">{m.label}</dt>
            </div>
          ))}
        </dl>

        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-semibold text-accent">Reviews</p>
          <h2 id="reviews-heading" className="mt-3 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
            Loved by teams who live in it
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-ink p-7 shadow-card">
                <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fog">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-raised text-xs font-bold text-accent" aria-hidden="true">
                    {q.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fog">{q.name}</span>
                    <span className="block text-xs text-dim">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
