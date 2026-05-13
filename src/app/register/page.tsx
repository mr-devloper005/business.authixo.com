import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  // Always return dark theme with orange accents to match homepage
  return {
    shell: 'bg-gray-900 text-white',
    panel: 'border border-gray-700 bg-gray-800',
    side: 'border border-gray-700 bg-gray-800',
    muted: 'text-gray-300',
    action: 'bg-orange-500 text-white hover:bg-orange-600',
    icon: Sparkles,
    title: 'Create your top24headline account',
    body: 'Join our press wire distribution platform and start reaching thousands of media outlets with your news.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-white">Why choose top24headline?</h3>
              <div className="space-y-3">
                {[
                  'Global press wire distribution to thousands of media outlets',
                  'Professional platform with advanced analytics and reporting',
                  'Dedicated support for PR professionals and businesses'
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-sm text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">Create account</p>
            <form className="mt-6 grid gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">Full name</label>
                <input className="h-12 w-full rounded-xl border border-gray-600 bg-gray-700 px-4 text-sm text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">Email address</label>
                <input className="h-12 w-full rounded-xl border border-gray-600 bg-gray-700 px-4 text-sm text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">Password</label>
                <input className="h-12 w-full rounded-xl border border-gray-600 bg-gray-700 px-4 text-sm text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none" placeholder="Create a strong password" type="password" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">What are you creating or publishing?</label>
                <input className="h-12 w-full rounded-xl border border-gray-600 bg-gray-700 px-4 text-sm text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none" placeholder="Press wires, news, announcements..." />
              </div>
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold ${config.action} shadow-lg hover:shadow-xl transition-all duration-200`}>Create account</button>
            </form>
            <div className={`mt-8 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-400 transition-colors duration-200">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
