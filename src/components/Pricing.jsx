import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const tiers = [
  {
    name: 'Starter',
    blurb: 'For small crews finding their rhythm.',
    monthly: 12,
    yearly: 9,
    cta: 'Start free',
    featured: false,
    features: [
      'Up to 10 seats',
      'Docs plus tasks plus chat',
      '100 AI answers a month',
      'Core integrations',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    blurb: 'For teams shipping every week.',
    monthly: 29,
    yearly: 23,
    cta: 'Start free',
    featured: true,
    features: [
      'Unlimited seats and guests',
      'Unlimited AI answers',
      'Automations plus approvals',
      'All integrations plus API',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    blurb: 'For orgs with rules and regions.',
    monthly: 79,
    yearly: 63,
    cta: 'Talk to sales',
    featured: false,
    features: [
      'Everything in Growth',
      'SSO plus audit log',
      'EU data residency',
      'Dedicated success manager',
      'Custom retention rules',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="pricing-heading">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-accent">Pricing</p>
        <h2 id="pricing-heading" className="mt-3 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
          Simple pricing that scales with you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Start free, upgrade when the whole company lives in Pulse.
        </p>

        <div
          className="mt-7 inline-flex items-center rounded-full bg-panel p-1 shadow-card"
          role="group"
          aria-label="Billing period"
        >
          {[
            { label: 'Monthly', value: false },
            { label: 'Yearly', value: true },
          ].map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setYearly(opt.value)}
              aria-pressed={yearly === opt.value}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                yearly === opt.value ? 'text-accentink' : 'text-muted hover:text-fog'
              }`}
            >
              {yearly === opt.value && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">
                {opt.label}
                {opt.value && (
                  <span className={`ml-1.5 text-xs ${yearly ? 'text-accentink' : 'text-accent'}`}>
                    20% off
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`relative flex h-full flex-col rounded-2xl p-7 ${
                tier.featured
                  ? 'bg-raised shadow-glow'
                  : 'bg-panel shadow-card'
              }`}
              aria-label={`${tier.name} plan`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accentink">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-fog">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.blurb}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-fog">
                  ${yearly ? tier.yearly : tier.monthly}
                </span>
                <span className="text-sm text-dim">per seat a month</span>
              </p>
              <p className="mt-1 h-5 text-xs text-dim">
                {yearly ? 'Billed once a year' : 'Billed every month'}
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-7 block rounded-full py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  tier.featured
                    ? 'bg-accent text-accentink'
                    : 'bg-ink text-fog shadow-card hover:bg-raised'
                }`}
              >
                {tier.cta}
              </a>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-dim">
          All plans include a 14 day free trial. Prices in USD, taxes may apply.
        </p>
      </Reveal>
    </section>
  )
}
