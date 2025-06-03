"use client";
import { Hero2 } from "@/components/ui/hero2";
import { LocationSection } from "@/components/ui/location-section";
import ZohoStyledForm from "@/components/ui/zoho-lead-form";
import { commonProps } from "@/constant/commonProps";

export default function ContactPage() {
  return (
    <div className="min-h-screen  mt-10 flex flex-col gap-12">
      <Hero2
        badgeText="GreenTech Resources"
        title="Contact Us"
        description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
        imageUrl="/images/n/immigrationhome.jpeg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <div>
        <ZohoStyledForm />
      </div>

      {/* <ZohoLeadForm /> */}
      <LocationSection />
    </div>
  );
}
