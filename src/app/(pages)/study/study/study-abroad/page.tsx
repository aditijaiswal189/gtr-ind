"use client";
import CountriesSectionStudy from "@/components/ui/countries-section-study";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import React from "react";

const StudyAbroad: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Study Abroad"
        description="Studying abroad opens doors to new opportunities, global experiences, and a brighter future. Start your application now and make your dream a reality!"
        imageUrl="/images/n/atlanticpilot.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <CountriesSectionStudy />
    </div>
  );
};

export default StudyAbroad;
