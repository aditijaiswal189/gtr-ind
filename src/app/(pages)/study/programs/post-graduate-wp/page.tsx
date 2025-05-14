import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FAQItem, FAQSection } from "@/components/ui/FAQ2";
import { Feature3 } from "@/components/ui/feature3";
import { Hero2 } from "@/components/ui/hero2";
import { Plane } from "lucide-react";
import React from "react";
const faqItems: FAQItem[] = [
  {
    title: " If your passport expires before your PGWP?",
    content: (
      <>
        Make sure your passport is valid for the entire length of time you
        should be eligible. If your passport expires earlier, either:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
          <li>
            your PGWP will be issued and valid till your passport expired date
          </li>
          <li>IRCC can extend it</li>
          <li>Connection to New Brunswick (family or past residence/work)</li>
        </ul>
      </>
    ),
  },

  {
    title: "How long is a post-graduation work permit valid?",
    content: (
      <>
        Starting February 15, 2024, students who graduate from master’s degree
        programs of less than 2 years (8 months minimum) may be eligible for a 3
        year PGWP. The length of your PGWP depends on the level and duration of
        your study program, as well as the expiry date of your passport,
        whichever comes first.
      </>
    ),
  },
];

const features3 = [
  {
    icon: "Briefcase" as const,
    title: " Eligibility:",
    description:
      " To be eligible for a PGWP, you must have completed a program of study at a designated learning institution in Canada. The program must be at least 8 months in duration. The length of the work permit issued will depend on the length of your program.",
  },

  {
    icon: "Notebook" as const,
    title: "PGWP validity: ",
    description:
      "The validity of the PGWP will depend on the length of your program. If your program was 8 months or more but less than 2 years, the PGWP will be valid for a period equal to the length of your program. If your program was 2 years or more, the PGWP may be issued for 3 years.",
  },
  {
    icon: "Layers" as const,
    title: "Application Process:",
    description:
      " You must apply for the PGWP within 180 days (approximately 6 months) of receiving written confirmation of completing your program and being awarded your degree, diploma, or certificate.",
  },
];
const PostGraduate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Post Graduate Work Permit"
        description="Canada offers a Post-Graduation Work Permit (PGWP) program to international students who have completed a program of study at a designated learning institution in Canada."
        imageUrl="/images/hero/j.avif"
        primaryCta={{
          label: "Study in Canada",
          href: "/study/programs/study-in-canada",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <Feature3
        badgeText="PGWP"
        heading="Post graduate "
        highlighted=""
        description="The PGWP allows you to work in Canada after completing your studies. You can work for any employer in Canada, and you are not restricted to a specific job or location.

Work experience gained through the PGWP increases your opportunities when you apply for permanent residency in Canada through the Canadian Experience Class or other immigration pathways."
        items={features3}
      />
      <FAQSection
        badgeIcon={<Plane className="w-8 h-8 text-primary" />}
        heading="FAQs"
        subheading="Some questions to be asked "
        items={faqItems}
      />
      <CtaWithFeaturesRightImage
        badgeText="Post Graduate Work Permit"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default PostGraduate;
