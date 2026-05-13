import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  { title: "Account Usage", body: "Keep your account secure and follow community guidelines." },
  {
    title: "Content Ownership",
    body: "You own the content you publish and grant the platform a license to display it.",
  },
  { title: "Acceptable Use", body: "No spam, harassment, or illegal content." },
];

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
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
            Questions about these terms? Contact support for clarification before using the platform.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}
