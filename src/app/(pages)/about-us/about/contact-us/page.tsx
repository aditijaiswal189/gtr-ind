"use client"
import { LocationSection } from "@/components/ui/location-section"
import { SectionHeader } from "@/components/ui/section-header"
import { ZohoIframeForm } from "@/components/ui/zoho-lead-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 mt-10">
      <SectionHeader subtitle="Contact Us" title="Get in Touch" />
      <ZohoIframeForm
        src="https://crm.zoho.in/crm/WebFormServeServlet?rid=7e6911d9944d98f765f359e70ec97af3ce4124cbf2bdf873627ab6426228935c80785ed5ee59f7a507b8bd251d661a98gid5b8262eddd5a1ed51d675503188d2b3b817286eb86ee3405f9b3cd2c26eb470e"
        width="610px"
        height="320px"
      />

      {/* <ZohoLeadForm /> */}
      <LocationSection />
    </div>
  )
}
