"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

type Member = {
  name: string
  role: string
  description: string
  image: string
}

export const Card = React.memo(
  ({
    member,
    index,
    hovered,
    setHovered,
  }: {
    member: Member
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={member.image}
        alt={member.name}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0  flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        {/* <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {member.name}
        </div> */}
      </div>
    </div>
  )
)

Card.displayName = "Card"

type TeamSection = {
  heading: React.ReactNode
  subtitle: string
  description: string
  id: number
  members: Member[]
}

export function FocusCards({ cards }: { cards: TeamSection[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  // Flatten all members into one array
  const allMembers: Member[] = cards.flatMap((section) => section.members)

  return (
    <div
      id="first-section"
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 mb-12 w-full"
    >
      {allMembers.map((member, index) => (
        <Card
          key={member.image + index}
          member={member}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
