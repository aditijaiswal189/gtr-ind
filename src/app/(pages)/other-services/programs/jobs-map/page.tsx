"use client";
import React from "react";
import { Hero2 } from "@/components/ui/hero2";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { features } from "@/app/(pages)/about-us/about/about/page";
import { commonProps } from "@/constant/commonProps";

const JobsMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-12">
      <Hero2
        badgeText="GreenTech Resources"
        title="
Job Map"
        description="Know more about us, book an appointment today"
        imageUrl="/images/n/indemandjobs.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      {/* ── Power BI Report Embed ── */}
      <div id="first-section" className="w-full max-w-7xl mx-auto px-4">
        <iframe
          title="GTR Sask Report_V1.3"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDkwNGJlMjItODRlYi00YzExLWEwNzEtYTE4NGEwZDY2YzE1IiwidCI6Ijg5ZTUzNjdhLTQ4ZTUtNGQzYy05ZTEzLWZmNTA4OTZlNDJlMCJ9"
          width="100%"
          height="800"
          frameBorder="0"
          allowFullScreen
          className="rounded shadow-lg"
        />
      </div>

      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title="GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default JobsMap;
