"use client"
import { features } from "@/app/(pages)/about-us/about/about/page"
import { BlogSection } from "@/components/ui/blog-section"
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image"
import { Hero2 } from "@/components/ui/hero2"
import { commonProps } from "@/constant/commonProps"
import React from "react"

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="News Section"
        description="Get updated news about immigration and be informed. "
        imageUrl="/images/hero/d.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <BlogSection />

      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  )
}

export default News
