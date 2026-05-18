import Link from 'next/link'
import { Radio } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

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

        {categories.length ? (
          <div className="mt-8 border-t border-current/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

      </div>
    </footer>
  )
}
