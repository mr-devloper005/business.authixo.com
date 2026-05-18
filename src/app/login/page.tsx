import Link from 'next/link'
import { Radio, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1a0a2e]">
      <NavbarShell />
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">

          {/* Left panel */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0d0520] p-8 text-white lg:p-10">
            <div className="pointer-events-none absolute -top-20 -left-20 h-[350px] w-[350px] rounded-full bg-[#7F27FF]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-10 right-0 h-[250px] w-[250px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] shadow-md shadow-[#7F27FF]/30">
                <Radio className="h-5 w-5 text-white" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-[-0.04em] lg:text-4xl">
                Welcome back to PressWire
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Sign in to access your press wire distribution dashboard and manage your media outreach campaigns.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Distribute to 3,200+ media outlets',
                  'Real-time analytics and pickup tracking',
                  'Editorial review before every release',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7F27FF]/30">
                      <Check className="h-3 w-3 text-[#9F70FD]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="rounded-3xl border border-[#e8e0ff] bg-white p-8 shadow-sm lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7F27FF]">
              Welcome back
            </span>
            <h2 className="mt-3 text-2xl font-bold text-[#1a0a2e]">Sign in to your account</h2>
            <p className="mt-1 text-sm text-[#5a4a7a]">Enter your credentials to continue.</p>

            <form className="mt-7 grid gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1a0a2e]">Email address</label>
                <input
                  type="email"
                  className="h-12 w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1a0a2e]">Password</label>
                <input
                  type="password"
                  className="h-12 w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] text-sm font-semibold text-white shadow-md shadow-[#7F27FF]/25 transition hover:opacity-90"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-[#5a4a7a]">
              <Link href="/forgot-password" className="transition hover:text-[#7F27FF]">
                Forgot password?
              </Link>
              <Link
                href="/register"
                className="font-semibold text-[#7F27FF] transition hover:text-[#9F70FD]"
              >
                Create account →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
