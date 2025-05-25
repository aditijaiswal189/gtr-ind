import { FocusCards } from "@/components/ui/focus-cards"
import { Hero2 } from "@/components/ui/hero2"
import { ImageCardReversible } from "@/components/ui/image-card-reversible"
import { commonProps } from "@/constant/commonProps"

import React from "react"
const teamData = [
  {
    heading: (
      <>
        <span className="relative inline-block">2025</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    id: 1,
    description: "",
    members: [
      {
        name: "2025",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/1a.webp",
      },
      {
        name: "2025",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/1b.webp",
      },
    ],
  },
  {
    heading: (
      <>
        <span className="relative inline-block">2024</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "2024",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/2a.webp",
      },
      {
        name: "2024",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/2b.webp",
      },
      {
        name: "2024",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/2c.webp",
      },
      {
        name: "2024",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/2d.webp",
      },
      {
        name: "2024",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/2e.webp",
      },
      {
        name: "2024",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/2f.webp",
      },
    ],
  },
  {
    heading: (
      <>
        <span className="relative inline-block">2023</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "2023",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/3a.webp",
      },
      {
        name: "2023",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3b.webp",
      },
      {
        name: "2023",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3c.webp",
      },
      {
        name: "2023",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3d.webp",
      },
    ],
  },

  ,
  {
    heading: (
      <>
        <span className="relative inline-block">2022</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3e.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3f.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3g.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3h.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3i.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3j.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3k.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3l.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3m.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3n.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/3o.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3p.webp",
      },
      {
        name: "2022",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/3q.webp",
      },
    ],
  },
  {
    heading: (
      <>
        <span className="relative inline-block">2021</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "2021",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/4a.webp",
      },
      {
        name: "2021",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/4b.webp",
      },
      {
        name: "2021",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/4c.webp",
      },
      {
        name: "2021",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/4d.webp",
      },
    ],
  },
  {
    heading: (
      <>
        <span className="relative inline-block">Study Permit</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "Study Permit",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/5a.webp",
      },
      {
        name: "Study Permit",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5b.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5c.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5d.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5e.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5f.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5g.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5h.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5i.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5j.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/5k.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/5l.webp",
      },
      {
        name: "Study Permit",
        role: " GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/5m.webp",
      },
    ],
  },
  {
    heading: (
      <>
        <span className="relative inline-block">Visitor Record</span>
      </>
    ),
    subtitle: "Greentech Resources Worldwide Canada",
    description: "",
    id: 2,
    members: [
      {
        name: "Visitor Record",
        role: "GreenTech Resource",
        description: "Success Customers",
        image: "/images/success/6a.webp",
      },
      {
        name: "Visitor Record",
        role: "GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/6b.webp",
      },
      {
        name: "Visitor Record",
        role: " GreenTech Resource",
        description: "Success Customers",

        image: "/images/success/6c.webp",
      },
    ],
  },
]

const SuccessCustomers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Success Customers"
        description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FocusCards cards={teamData} />
    </div>
  )
}

export default SuccessCustomers
