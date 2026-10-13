import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accentink"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Pulse home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent" aria-hidden="true">
            <span className="h-3.5 w-3.5 rounded-full bg-accentink" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-fog">
            Pulse
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fog"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fog"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accentink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-fog md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-fog transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-fog transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-fog transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base text-fog hover:bg-raised"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accentink"
                >
                  Start free
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
