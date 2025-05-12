import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import {
  Award,
  Briefcase,
  Compass,
  FileCheck,
  FileText,
  Heart,
  Lightbulb,
  Notebook,
  Plane,
} from "lucide-react";
import React from "react";
const features2: FeatureItemData[] = [
  {
    title: "Assessment and Eligibility",
    description:
      "Consultants assess clients' eligibility for various immigration programs and provide personalized advice based on individual circumstances.",
    icon: <Plane />,
  },
  {
    title: "Application Preparation",
    description:
      "Consultants assist in completing and submitting immigration applications, ensuring all required documents are accurate and submitted within deadlines",
    icon: <Notebook />,
  },
  {
    title: "Representation and Advocacy",
    description:
      "Consultants represent clients in communications with immigration authorities, advocating on their behalf and addressing any concerns or inquiries.",
    icon: <Briefcase />,
  },
  {
    title: "Post-Immigration Support",
    description:
      "Consultants offer support and guidance even after immigration approval, assisting with settlement, obtaining essential documents, and navigating life in Canada",
    icon: <Heart />,
  },
];
export interface StepConfigList {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const steps: StepConfigList[] = [
  {
    icon: Lightbulb,
    title: "Visit the ICCRC Website:",
    description:
      "The College of Immigration and Citizenship Consultants is the regulatory body that oversees RCICs. Visit their official website at https://www.college-ic.ca or www.iccrc-crcic.ca.",
  },
  {
    icon: Award,
    title: "Search the Online Registry: ",
    description:
      "On the website, navigate to the “Find an Immigration Professional” section. Here, you can search for your consultant by name or registration number.",
  },
  {
    icon: FileCheck,
    title: "Verify Registration Status",
    description:
      "Enter your consultant’s name or registration number into the search bar and click on the search button. The search results will display the consultant’s registration status, including whether they are an RCIC in good standing or if any disciplinary actions have been taken against them.",
  },
  {
    icon: Compass,
    title: "Review Details:",
    description:
      "Once you’ve found your consultant in the search results, review the details provided to ensure they match the information you have. Pay attention to their registration status, registration number, and any additional information provided.",
  },
  {
    icon: Briefcase,
    title: "Contact The College of Immigration and Citizenship Consultants:",
    description:
      "If you have any doubts or concerns about the authenticity of your consultant’s registration, you can contact ICCRC directly for further verification or clarification.",
  },
];
const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Easy Booking",
    description: `Book your appointment in three simple steps: select a service, pick your date and time, and fill in your details. You can reschedule as needed based on urgency or circumstance.It is essential to provide accurate information and necessary documents for the consultation.`,
  },
  {
    icon: <FileText />,
    title: "Important Disclaimers",
    description: `This is a preliminary consultation only and does not guarantee your visa, work permit, or permanent residency—those decisions rest solely with Canadian Immigration Authorities. Advice is based on current laws and remains confidential except as required by law; by booking you agree to our terms and any applicable fees.`,
  },
];

const BookAppointment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Book Appointment"
        description="Book your appointment in a few simple steps: Choose a service, pick your date and time, and fill in your details. See you soon!"
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        primaryCta={{ label: "About us?", href: "/about-us/about/about" }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />

      <StepsWithHeadingImageList
        badgeText="Book An Appointment"
        heading="How to check if my consultant is RCIC ?"
        subheading="Verifying if your consultant is a Registered Canadian Immigration Consultant (RCIC) is crucial to ensuring that you're receiving guidance from a qualified and authorized professional. Here's how you can check if your consultant is an RCIC. By following these steps and verifying your consultant's registration status with ICCRC, you can ensure that you're working with a legitimate and authorized RCIC who is qualified to provide immigration advice and representation."
        steps={steps}
      />
      <Feature2WithImage
        heading={
          <>
            Business Programs
            <span className="text-primary pl-2">(ICT)</span>
          </>
        }
        subheading="Intra Company Transfer"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <FeatureGrid4
        title="    What Can an Immigration Consultant Do?"
        description="Immigration consultants offer a range of services to assist clients throughout the immigration process. Some of the key roles they play include"
        features={features2}
      />
    </div>
  );
};

export default BookAppointment;
