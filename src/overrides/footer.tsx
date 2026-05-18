import Link from 'next/link'
import { Radio } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-[#7F27FF]/15 bg-[#0d0520] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7F27FF] to-[#9F70FD]">
                <Radio className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-white">PressWire</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/55 max-w-xs">
              Professional press wire distribution for modern brands and PR teams.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F70FD]">Platform</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                { name: 'Newsroom', href: '/updates' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-[#FDBF60]">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F70FD]">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                { name: 'Contact', href: '/contact' },
                { name: 'Login', href: '/login' },
                { name: 'Sign Up', href: '/register' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-[#FDBF60]">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F70FD]">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                { name: 'Privacy', href: '/privacy' },
                { name: 'Terms', href: '/terms' },
                { name: 'Cookies', href: '/cookies' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-[#FDBF60]">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center text-xs text-white/35 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
          <span>Powered by <span className="text-[#9F70FD]">PressWire Platform</span></span>
        </div>
      </div>
    </footer>
  )
}
