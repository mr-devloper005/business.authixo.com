import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { FOOTER_OVERRIDE_ENABLED, FooterOverride } from '@/overrides/footer'

const footerLinks = {
  platform: [
    { name: 'Home', href: '/' },
    { name: 'Press Wire', href: '/updates' },
    { name: 'Latest News', href: '/latest-news' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/register' },
    { name: 'Press', href: '/press' },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Status', href: '/status' },
    { name: 'Search', href: '/search' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Licenses', href: '/licenses' },
  ],
}

export function Footer() {
  if (FOOTER_OVERRIDE_ENABLED) {
    return <FooterOverride />
  }

  const { recipe } = getFactoryState()
  const enabledTasks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const primaryTask = enabledTasks.find((task) => task.key === recipe.primaryTask) || enabledTasks[0]

  return (
    <footer className="border-t border-[#7F27FF]/15 bg-[#0d0520] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] shadow-md shadow-[#7F27FF]/30">
                <span className="text-lg font-black text-white">P</span>
              </div>
              <div>
                <span className="block text-lg font-bold text-white">PressWire</span>
                <span className="text-xs uppercase tracking-[0.22em] text-[#9F70FD]">{siteContent.footer.tagline}</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{SITE_CONFIG.description}</p>
            {primaryTask ? (
              <Link
                href={primaryTask.route}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FDBF60] to-[#FF8911] px-5 py-2 text-sm font-bold text-[#1a0a2e] shadow-md shadow-[#FDBF60]/20 transition hover:opacity-90"
              >
                Submit Press Wire
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          {(['platform', 'company', 'resources', 'legal'] as const).map((section) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
                {section === 'platform' ? 'Press Wire' : section}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                {footerLinks[section].map((item: any) => (
                  <li key={item.name}>
                    <Link href={item.href} className="transition hover:text-[#FDBF60]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center text-sm text-white/40 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} PressWire Media Distribution. All Rights Reserved.</span>
          <span className="text-xs">Powered by <span className="text-[#9F70FD]">PressWire Platform</span></span>
        </div>
      </div>
    </footer>
  )
}
