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
    <footer className="border-t border-[#172748] bg-[#0c1a33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 shadow-sm">
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block text-lg font-semibold">24-7 PressRelease</span>
                <span className="text-xs uppercase tracking-[0.22em] text-slate-300">{siteContent.footer.tagline}</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{SITE_CONFIG.description}</p>
            {primaryTask ? (
              <Link
                href={primaryTask.route}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFAF00] px-4 py-2 text-sm font-semibold text-[#0f2340] hover:bg-[#ffc03b]"
              >
                Submit Press Wire
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          {(['platform', 'company', 'resources', 'legal'] as const).map((section) => (
            <div key={section}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                {section === 'platform' ? 'Press Wire Distribution' : section}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {footerLinks[section].map((item: any) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center gap-2 hover:text-[#FFAF00]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-slate-300">
          &copy; {new Date().getFullYear()} 24-7 Press Wire Newswire. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
