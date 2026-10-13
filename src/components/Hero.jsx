import { motion, useReducedMotion } from 'framer-motion'

const logos = ['Northbeam', 'Helios', 'Craftly', 'Moonshot', 'Kernel', 'Datum']

function ProductShot() {
  const reduce = useReducedMotion()
  const float = (delay) => ({
    animate: reduce ? {} : { y: [0, -8, 0] },
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
  })

  return (
    <div className="relative mx-auto mt-14 max-w-4xl sm:mt-16">
      {/* floating cards sit outside the window on large screens */}
      <motion.div
        {...float(0.6)}
        className="absolute -left-6 top-16 z-10 hidden rounded-2xl bg-raised p-4 shadow-pop shadow-card lg:block"
        aria-hidden="true"
      >
        <p className="text-xs text-dim">Shipped this week</p>
        <p className="mt-1 text-2xl font-semibold text-accent">+38%</p>
        <div className="mt-2 flex items-end gap-1">
          {[10, 16, 12, 22, 18, 28, 24].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className={`w-2 rounded-sm ${i === 5 ? 'bg-accent' : 'bg-line'}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        {...float(1.4)}
        className="absolute -right-6 top-40 z-10 hidden rounded-2xl bg-raised p-4 shadow-pop shadow-card lg:block"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accentink">
            AI
          </span>
          <p className="text-xs text-muted">Summary ready</p>
        </div>
        <p className="mt-2 max-w-[180px] text-sm text-fog">
          Standup notes condensed to 4 bullets.
        </p>
      </motion.div>

      {/* browser window mock, pure CSS */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl bg-panel shadow-pop shadow-card"
        role="img"
        aria-label="Preview of the Pulse workspace showing projects, an AI summary and a progress chart"
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="ml-3 hidden rounded-md bg-raised px-3 py-1 text-xs text-dim sm:block">
            pulse.app/overview
          </span>
        </div>
        <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[180px_1fr]">
          <div className="border-r border-line p-3 sm:p-4">
            <div className="mb-3 h-6 rounded-md bg-raised" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="mb-2 flex items-center gap-2">
                <span className={`h-6 w-1 rounded-full ${i === 0 ? 'bg-accent' : 'bg-transparent'}`} />
                <span className={`h-6 flex-1 rounded-md ${i === 0 ? 'bg-raised' : ''}`}>
                  <span className="sr-only">nav item</span>
                </span>
              </div>
            ))}
            <div className="mt-4 hidden rounded-lg bg-raised p-2 sm:block">
              <div className="h-2 w-2/3 rounded bg-line" />
              <div className="mt-2 h-2 w-1/2 rounded bg-line" />
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 w-32 rounded bg-raised sm:w-48" />
                <div className="mt-2 h-3 w-24 rounded bg-raised sm:w-32" />
              </div>
              <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accentink">
                Ask AI
              </span>
            </div>
            <div className="mt-4 rounded-xl bg-raised p-3 sm:p-4">
              <div className="h-3 w-40 rounded bg-line" />
              <div className="mt-2 h-3 w-full rounded bg-line" />
              <div className="mt-2 h-3 w-5/6 rounded bg-line" />
            </div>
            <div className="mt-4 flex h-28 items-end gap-2 sm:h-32" aria-hidden="true">
              {[34, 52, 44, 66, 58, 80, 72, 96, 88, 108, 100, 120].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.7 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                  style={{ height: `${(h / 120) * 100}%` }}
                  className={`flex-1 origin-bottom rounded-t-md ${i === 11 ? 'bg-accent' : 'bg-line'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      {/* decorative rings, solid borders only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="absolute -top-40 h-[480px] w-[480px] rounded-full border border-line" />
        <div className="absolute -top-24 h-[640px] w-[640px] rounded-full border border-line" />
        <div className="absolute -top-8 hidden h-[800px] w-[800px] rounded-full border border-line sm:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#product"
            className="inline-flex items-center gap-2 rounded-full bg-panel py-1.5 pl-2 pr-4 text-sm text-muted shadow-card transition-colors hover:text-fog"
          >
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accentink">
              New
            </span>
            Pulse 2.0 is live. See what changed
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-fog sm:text-6xl"
        >
          The AI workspace for teams that ship
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Pulse pulls docs, tasks and chat into one calm view, then drafts the
          update for you. Less status ping pong, more product out the door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="w-full rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accentink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
          >
            Start free trial
          </a>
          <a
            href="#product"
            className="w-full rounded-full bg-panel px-7 py-3.5 text-sm font-semibold text-fog shadow-card transition-colors hover:bg-raised sm:w-auto"
          >
            Watch demo
            <span className="ml-2 text-xs text-dim">2 min</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 text-xs text-dim"
        >
          Free 14 day trial. No credit card. Cancel anytime.
        </motion.p>

        <ProductShot />

        <div className="mt-14">
          <p className="text-xs uppercase tracking-widest text-dim">
            Powering product teams at
          </p>
          <ul className="mt-5 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((name) => (
              <li
                key={name}
                className="text-lg font-semibold tracking-tight text-dim transition-colors hover:text-muted"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
