import { Check, PlusCircle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

const plans = [
  {
    name: 'Basic',
    price: '$69',
    comparison: ['Regional distribution', 'Basic analytics', 'Standard media reach'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$149',
    comparison: ['National distribution', 'Realtime analytics', 'Enhanced media reach'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$299',
    comparison: ['Global distribution', 'Advanced insights', 'Premium media reach'],
    popular: false,
  },
]

const addons = [
  'Editorial rewriting support',
  'Same-day urgent release handling',
  'Industry-specific media list targeting',
  'Multilingual release adaptation',
]

const faqs = [
  {
    q: 'How fast can my release go live?',
    a: 'Most releases are published within 24 hours after editorial verification.',
  },
  {
    q: 'Can I upgrade plan after submission?',
    a: 'Yes, you can upgrade to Pro or Premium before distribution starts.',
  },
  {
    q: 'Do plans include reporting?',
    a: 'All plans include reporting, with advanced depth available on Pro and Premium.',
  },
]

const freepikImages = [
  'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
  'https://img.freepik.com/free-photo/business-people-working-together-office_1303-22863.jpg',
  'https://img.freepik.com/free-photo/businesswoman-giving-presentation-boardroom_23-2148146319.jpg',
  'https://img.freepik.com/free-photo/close-up-people-working-office_23-2149300656.jpg',
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f04b23]">Pricing</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#111827]">Choose the right plan for your media campaign</h1>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              Compare distribution level, analytics depth, and media reach to choose the plan that fits your press goals.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-[#e5e5e8] shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <ContentImage src={freepikImages[0]} alt="Pricing visual" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freepikImages.slice(1).map((image, index) => (
            <article key={image} className="relative min-h-[170px] overflow-hidden rounded-2xl border border-[#e5e5e8] bg-white shadow-sm">
              <ContentImage src={image} alt={`Pricing gallery image ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 transition ${
                plan.popular
                  ? 'border-[#f04b23] bg-[#fff5f2] shadow-[0_20px_60px_rgba(240,75,35,0.2)]'
                  : 'border-[#e5e5e8] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-[#111827]">{plan.name}</h2>
                {plan.popular ? (
                  <span className="rounded-full bg-[#f04b23] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-4xl font-semibold text-[#111111]">{plan.price}</p>
              <ul className="mt-5 space-y-2">
                {plan.comparison.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 text-[#f04b23]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
                  plan.popular ? 'bg-[#f04b23] text-white hover:bg-[#db3e18]' : 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]'
                }`}
              >
                Buy Now
              </button>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#e5e5e8] bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-semibold text-[#111827]">Add-ons</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {addons.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-[#e8e8ec] bg-[#f5f5f7] px-4 py-3 text-sm text-slate-700">
                <PlusCircle className="h-4 w-4 text-[#f04b23]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#e5e5e8] bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-semibold text-[#111827]">FAQs</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-xl border border-[#e8e8ec] bg-[#f5f5f7] p-4">
                <h3 className="text-base font-semibold text-[#111827]">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
