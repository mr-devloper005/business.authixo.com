import Link from 'next/link'
import { Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0d0520] py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-[#7F27FF]/25 blur-[100px]" />
          <div className="absolute -bottom-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/30 bg-[#7F27FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
            Contact Us
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Get in touch with our team
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/70">
            Have questions about press wire distribution or media inquiries? We're here to help you get your story out.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#e8e0ff] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a0a2e]">Send us a message</h2>
            <p className="mt-1 text-sm text-[#5a4a7a]">Fill in the form and our team will get back to you shortly.</p>
            <form className="mt-7 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">First Name *</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">Email *</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">Subject</label>
                <select className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="distribution">Press Wire Distribution</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a0a2e] mb-1.5">Message *</label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-3 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition resize-none"
                  placeholder="Tell us more about your inquiry…"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] py-3 text-sm font-semibold text-white shadow-md shadow-[#7F27FF]/25 transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f5ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1a0a2e]">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-[#5a4a7a]">Quick answers to common questions about our press wire distribution services.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { q: 'How quickly can my release go live?', a: 'Most press wires are distributed within 24–48 hours after approval.' },
              { q: 'Can I target specific media categories?', a: 'Yes, we offer targeted distribution to specific industries and media outlets.' },
              { q: 'Do you help with editorial review?', a: 'Our team provides editorial guidance to ensure your release meets industry standards.' },
              { q: 'What distribution report do I get?', a: 'You receive a full pickup report with outlet names, links, and impression data.' },
              { q: 'Can I submit multiple releases?', a: 'Yes, volume pricing is available. Contact us for custom packages.' },
              { q: 'Is there a word limit on releases?', a: 'Standard releases are up to 800 words. Extended releases are available on Pro and Premium.' },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#e8e0ff] bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-[#1a0a2e]">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5a4a7a]">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7F27FF]/25 transition hover:opacity-90"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
