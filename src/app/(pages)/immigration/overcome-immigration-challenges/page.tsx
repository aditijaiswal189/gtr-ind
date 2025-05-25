import { FeaturesWithLastFilled } from "@/components/ui/features-with-last-filled"
import React from "react"
import { Hero2 } from "@/components/ui/hero2"
import { Feature4 } from "@/components/ui/feature4"
import { services } from "../../about-us/about/our-services/page"

const OvercomeImmigrationChallenges: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Overcome Immigration Challenges"
        description="We can help you assess your situation, determine the best course of action, and guide you through the application process to overcome the challenges"
        imageUrl="/images/hero/e.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature4
        badge="Overcome Immigration Challenges"
        heading="Common Challanges"
        highlight="(Express Entry)"
        description="We can help you assess your situation, determine the best course of action, and guide you through the application process.
"
        features={[
          {
            icon: "Globe",
            title: "Criminality",
            description:
              "If someone has a criminal record or have committed certain offenses, he/she may be deemed inadmissible to Canada. In such cases, it's important to determine if he/she is eligible for criminal rehabilitation, which can allow him/her to overcome past criminal convictions and gain entry into the country",
            //   link: "/global"
          },
          {
            icon: "Rocket",
            title: "Security",
            description:
              "National security and criminality-related issues can result in inadmissibility. Background checks and security screenings are conducted for all visa applicants",
          },
          {
            icon: "Notebook",
            title: "Financial",
            description:
              " If someone does not have the financial means to support himself/ herself during your stay in Canada, he/she may be deemed inadmissible. Demonstrating financial stability through proof of funds, a job offer, or sponsorship can help address this concern",
          },
          {
            icon: "Users",
            title: "Misrepresenting",
            description:
              "Providing false information or misrepresenting yourself in your visa application can lead to inadmissibility. Honesty and transparency are key when applying to visit or immigrate to Canada",
          },
        ]}
      />

      <FeaturesWithLastFilled
        services={services}
        sectionTitle="Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
        sectionSubtitle="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
      />
    </div>
  )
}

export default OvercomeImmigrationChallenges
