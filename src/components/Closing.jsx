import Reveal from './Reveal.jsx'

const columns = [
  {
    title: 'Product',
    links: ['Overview', 'AI answers', 'Automations', 'Integrations', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Templates', 'Community', 'Status', 'Roadmap'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA', 'Subprocessors'],
  },
]

export function Cta() {
  return (
    <section id="cta" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28" aria-labelledby="cta-heading">
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accentink">
            Get started
          </p>
          <h2 id="cta-heading" className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-accentink sm:text-5xl">
            Ship your next launch from one calm place
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-accentink">
            Join 12,000 teams already running on Pulse. Set up in an hour,
            feel the difference by Friday.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="w-full rounded-full bg-accentink px-8 py-3.5 text-sm font-semibold text-fog transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="#pricing"
              className="w-full rounded-full border-2 border-accentink px-8 py-3 text-sm font-semibold text-accentink transition-colors hover:bg-accentink hover:text-fog sm:w-auto"
            >
              Compare plans
            </a>
          </div>
          <p className="mt-5 text-xs text-accentink">
            Free 14 day trial. No credit card. Cancel anytime.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Pulse home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent" aria-hidden="true">
                <span className="h-3.5 w-3.5 rounded-full bg-accentink" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-fog">
                Pulse
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The AI workspace for teams that ship. Docs, tasks and chat in
              one calm view.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-panel px-3.5 py-1.5 text-xs text-muted shadow-card">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              All systems normal
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-fog">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted transition-colors hover:text-fog"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-dim">
            2026 Pulse Labs, Inc. Template for demo use.
          </p>
          <div className="flex items-center gap-5">
            {['X', 'GitHub', 'LinkedIn', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#top"
                className="text-xs text-dim transition-colors hover:text-fog"
                aria-label={`Pulse on ${s}`}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
