import React from "react"
import { BookOpen, Briefcase, Users, Map } from "lucide-react"
import Link from "next/link"

interface ButtonProps {
  text: string
  bgColor: string
  hoverColor: string
  icon: React.ReactNode
  href: string // Optional href for links
}

const HeroButton: React.FC<ButtonProps> = ({
  text,
  bgColor,
  hoverColor,
  icon,
  href,
}) => {
  return (
    <Link href={href}>
      <button
        className={`${bgColor} ${hoverColor} w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-white font-medium shadow-md transition-all duration-300 transform hover:scale-105`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  )
}

const HeroButtons: React.FC = () => {
  const buttons: ButtonProps[] = [
    {
      text: "Study",
      bgColor: "bg-primary-blue",
      hoverColor: "hover:bg-blue-600",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/study/programs/study-in-canada",
    },
    {
      text: "Immigrate",
      bgColor: "bg-primary-green",
      hoverColor: "hover:bg-green-600",
      href: "immigration/express-entry/federal-skilled-worker",
      icon: <Map className="w-5 h-5" />,
    },
    {
      text: "Business",
      bgColor: "bg-primary-red",
      hoverColor: "hover:bg-red-700",
      href: "/business/quebec/quebec-investor",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      text: "Work and Jobs",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-orange-600",
      href: "/work-and-jobs/work/work-permit",
      icon: <Users className="w-5 h-5" />,
    },
  ]

  return (
    <div className="w-full max-w-md">
      {/* <h2 className="text-xl md:text-3xl  text-muted-foreground mb-6 text-center">
        Services We Offer
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.map((button, index) => (
          <HeroButton
            key={index}
            text={button.text}
            bgColor={button.bgColor}
            hoverColor={button.hoverColor}
            icon={button.icon}
            href={button.href}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroButtons
