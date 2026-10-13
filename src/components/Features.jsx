import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

function Icon({ d }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

const paths = {
  spark: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  zap: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  link: 'M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5',
  shield: 'M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
}

function Card({ icon, title, copy, children, span = '' }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group rounded-2xl bg-panel p-6 shadow-card transition-shadow hover:shadow-glow sm:p-7 ${span}`}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-raised text-accent transition-colors group-hover:bg-accent group-hover:text-accentink">
        <Icon d={paths[icon]} />
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-fog">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
      {children}
    </motion.article>
  )
}

export default function Features() {
  return (
    <section id="product" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold text-accent">Product</p>
        <h2 id="features-heading" className="mt-3 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
          Everything you need to move faster
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Six tools in one surface. Each one quiet until you need it, then
          exactly where your cursor already is.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal className="sm:col-span-2">
          <Card
            icon="spark"
            title="Ask anything, get the brief"
            copy="Type a question in plain words. Pulse reads your docs and tickets, then writes the answer with sources attached."
            span="h-full"
          >
            <div className="mt-5 rounded-xl bg-ink p-4" aria-hidden="true">
              <p className="text-sm text-fog">
                <span className="text-accent">You</span> Where did launch slip?
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-full rounded bg-raised" />
                <div className="h-2.5 w-11/12 rounded bg-raised" />
                <div className="h-2.5 w-2/3 rounded bg-raised" />
              </div>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-raised px-2.5 py-1 text-xs text-muted">Design doc</span>
                <span className="rounded-full bg-raised px-2.5 py-1 text-xs text-muted">Ticket 482</span>
                <span className="rounded-full bg-raised px-2.5 py-1 text-xs text-muted">Standup notes</span>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card
            icon="chart"
            title="Progress you can see"
            copy="Cycle time, throughput and load in one live view. Spot the jam before the sprint review does."
            span="h-full"
          >
            <div className="mt-5 flex h-20 items-end gap-1.5" aria-hidden="true">
              {[30, 45, 38, 60, 52, 74, 66, 88].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm ${i === 7 ? 'bg-accent' : 'bg-raised'}`}
                />
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card
            icon="zap"
            title="Busywork on autopilot"
            copy="Triage, labels, follow ups and changelogs write themselves from rules you approve once."
            span="h-full"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Card
            icon="link"
            title="Plays well with your stack"
            copy="Two way sync with the tools you already pay for. Set up in minutes, not a migration quarter."
            span="h-full"
          >
            <div className="mt-5 flex gap-2" aria-hidden="true">
              {['GH', 'SL', 'FG', 'LN', '+9'].map((t) => (
                <span
                  key={t}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-raised text-xs font-semibold text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.16}>
          <Card
            icon="shield"
            title="Private by default"
            copy="SOC 2 Type II, SSO and EU data residency. Your data never trains shared models."
            span="h-full"
          >
            <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
              <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">SOC 2</span>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">SSO</span>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">GDPR</span>
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-4 sm:col-span-2 lg:col-span-3">
        <motion.article
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="group flex flex-col gap-6 rounded-2xl bg-panel p-6 shadow-card transition-shadow hover:shadow-glow sm:p-7 lg:flex-row lg:items-center"
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-raised text-accent transition-colors group-hover:bg-accent group-hover:text-accentink">
            <Icon d={paths.users} />
          </span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold tracking-tight text-fog">
              Live multiplayer editing
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Cursors, comments and votes update live for the whole crew.
              Nobody refreshes, nobody asks for the link twice.
            </p>
          </div>
          <div className="flex items-center" aria-hidden="true">
            <div className="flex -space-x-2">
              {['AK', 'JM', 'RS', '+5'].map((t, i) => (
                <span
                  key={t}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ring-2 ring-panel ${i === 3 ? 'bg-accent text-accentink' : 'bg-raised text-fog'}`}
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="ml-3 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />8 online
            </span>
          </div>
        </motion.article>
      </Reveal>
    </section>
  )
}
