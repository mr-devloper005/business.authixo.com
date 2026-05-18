import { Check, PlusCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

const plans = [
  {
    name: 'Basic',
    price: '$69',
    period: '/release',
    description: 'Perfect for startups and small businesses getting started with press distribution.',
    features: ['Regional distribution', 'Basic analytics dashboard', 'Standard media reach', 'Email support', '1 revision included'],
    popular: false,
    cta: 'Get Started',
    gradient: 'from-[#f8f5ff] to-white',
    border: 'border-[#e8e0ff]',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/release',
    description: 'For growing brands that need national reach and real-time performance data.',
    features: ['National distribution', 'Real-time analytics', 'Enhanced media reach', 'Priority support', '2 revisions included', 'Social media amplification'],
    popular: true,
    cta: 'Start with Pro',
    gradient: 'from-[#7F27FF] to-[#9F70FD]',
    border: 'border-[#7F27FF]',
  },
  {
    name: 'Premium',
    price: '$299',
    period: '/release',
    description: 'Enterprise-grade distribution for maximum global media impact.',
    features: ['Global distribution', 'Advanced insights & reports', 'Premium media reach', 'Dedicated account manager', 'Unlimited revisions', 'Multilingual adaptation'],
    popular: false,
    cta: 'Go Premium',
    gradient: 'from-[#f8f5ff] to-white',
    border: 'border-[#e8e0ff]',
  },
]

const addons = [
  'Editorial rewriting support',
  'Same-day urgent release handling',
  'Industry-specific media list targeting',
  'Multilingual release adaptation',
  'Broadcast media distribution',
  'Podcast & audio newsroom placement',
]

const faqs = [
  {
    q: 'How fast can my release go live?',
    a: 'Most releases are published within 24 hours after editorial verification and approval.',
  },
  {
    q: 'Can I upgrade my plan after submission?',
    a: 'Yes, you can upgrade to Pro or Premium before distribution starts with no extra fees.',
  },
  {
    q: 'Do plans include reporting?',
    a: 'All plans include reporting, with advanced depth and pickup tracking on Pro and Premium.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We cover Finance, Technology, Healthcare, Energy, Real Estate, Entertainment, and more.',
  },
]

const freepikImages = [
  'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
  'https://img.freepik.com/free-photo/business-people-working-together-office_1303-22863.jpg',
  'https://img.freepik.com/free-photo/businesswoman-giving-presentation-boardroom_23-2148146319.jpg',
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0d0520] py-20 text-white">
          <div className="pointer-events-none absolute inset-0">
            <ContentImage src={freepikImages[0]} alt="Pricing hero" fill className="object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7F27FF]/50 via-[#0d0520]/80 to-[#0d0520]" />
            <div className="absolute -top-20 left-1/3 h-[350px] w-[350px] rounded-full bg-[#7F27FF]/25 blur-[100px]" />
            <div className="absolute -bottom-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/30 bg-[#7F27FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
                  Pricing
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  Choose the right plan for your media campaign
                </h1>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  Compare distribution level, analytics depth, and media reach to choose the plan that fits your press goals.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FDBF60] to-[#FF8911] px-6 py-2.5 text-sm font-bold text-[#1a0a2e] shadow-md transition hover:opacity-90"
                >
                  Talk to sales <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <ContentImage src={freepikImages[1]} alt="Pricing visual" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#7F27FF]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-[#f8f5ff] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1a0a2e]">Simple, transparent pricing</h2>
              <p className="mt-2 text-sm text-[#5a4a7a]">No hidden fees. Pay per release or contact us for volume plans.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-3xl border-2 ${plan.border} overflow-hidden shadow-sm transition hover:shadow-lg ${plan.popular ? '' : 'bg-white'}`}
                >
                  {plan.popular && (
                    <div className={`bg-gradient-to-br ${plan.gradient} p-6 text-white`}>
                      <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Most Popular
                      </span>
                      <h2 className="mt-3 text-2xl font-bold">{plan.name}</h2>
                      <p className="mt-1 text-sm text-white/75">{plan.description}</p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-sm text-white/70">{plan.period}</span>
                      </div>
                    </div>
                  )}
                  <div className={`p-6 ${plan.popular ? 'bg-white' : ''}`}>
                    {!plan.popular && (
                      <>
                        <h2 className="text-2xl font-bold text-[#1a0a2e]">{plan.name}</h2>
                        <p className="mt-1 text-sm text-[#5a4a7a]">{plan.description}</p>
                        <div className="mt-4 flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-[#7F27FF]">{plan.price}</span>
                          <span className="text-sm text-[#9a8ab0]">{plan.period}</span>
                        </div>
                      </>
                    )}
                    <ul className="mt-5 space-y-2.5">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#3a2a5a]">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7F27FF]/10">
                            <Check className="h-2.5 w-2.5 text-[#7F27FF]" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={`mt-6 w-full rounded-full py-2.5 text-sm font-semibold transition ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] text-white shadow-md shadow-[#7F27FF]/25 hover:opacity-90'
                          : 'border-2 border-[#7F27FF]/30 text-[#7F27FF] hover:bg-[#7F27FF]/05'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#e8e0ff] bg-[#f8f5ff] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a0a2e]">Add-ons & extras</h2>
              <p className="mt-1 text-sm text-[#5a4a7a]">Enhance any plan with targeted add-ons for your campaign.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {addons.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#e8e0ff] bg-white px-4 py-3 text-sm text-[#3a2a5a] shadow-sm"
                  >
                    <PlusCircle className="h-4 w-4 shrink-0 text-[#FF8911]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#f8f5ff] py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-[#1a0a2e]">Pricing FAQs</h2>
            <div className="mt-8 divide-y divide-[#e8e0ff] rounded-2xl border border-[#e8e0ff] bg-white overflow-hidden shadow-sm">
              {faqs.map((item) => (
                <details key={item.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[#1a0a2e] list-none">
                    {item.q}
                    <PlusCircle className="h-4 w-4 shrink-0 text-[#7F27FF] transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#5a4a7a]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0d0520] py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#7F27FF]/20 blur-[80px]" />
            <div className="absolute right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-[#FDBF60]/15 blur-[70px]" />
          </div>
          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">Not sure which plan fits?</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Talk to our distribution team and we'll recommend the right plan for your media goals.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FDBF60] to-[#FF8911] px-8 py-3 text-sm font-bold text-[#1a0a2e] shadow-lg shadow-[#FDBF60]/20 transition hover:opacity-90"
            >
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
