import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we collect, use, and protect your information."
    >
      <Card className="border border-[#e5e5e8] bg-white shadow-sm">
        <CardContent className="space-y-4 p-6">
          <p className="text-xs text-[#7f7f8f]">Last updated: March 16, 2026</p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-[#e8e8ec] bg-[#f5f5f7] p-4">
              <h3 className="text-sm font-semibold text-[#1a1a1a]">{section.title}</h3>
              <p className="mt-2 text-sm text-[#5f5f6f]">{section.body}</p>
            </div>
          ))}
          <p className="border-l-2 border-[#f04b23] pl-3 text-xs text-[#5f5f6f]">
            We use reasonable safeguards to protect your data and provide clear controls for your account.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  )
}
