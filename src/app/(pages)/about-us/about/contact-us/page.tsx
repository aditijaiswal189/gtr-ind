"use client"
import { LocationSection } from "@/components/ui/location-section"
import { SectionHeader } from "@/components/ui/section-header"
import { ZohoIframeForm } from "@/components/ui/zoho-lead-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 mt-10">
      <SectionHeader subtitle="Contact Us" title="Get in Touch" />
      <ZohoIframeForm />

      <LocationSection />
    </div>
  )
}
