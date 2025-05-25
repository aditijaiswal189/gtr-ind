// components/TopBar.tsx
"use client"
import React, { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import Link from "next/link"
import { IconBrandWhatsapp } from "@tabler/icons-react"

export function TopBar() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`
        hidden md:flex items-center justify-between
        h-[var(--topbar-height)]
        bg-gradient-to-r from-white via-orange-400 to-white
        px-6 md:px-10
        sticky top-0 left-0 w-full z-50
        transform transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex items-center space-x-6 text-black text-sm">
        <Mail className="ml-5 mr-2" />
        <span>admin@gtrworldwide.in</span>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="/images/logo2.webp"
          alt="Visaland Logo"
          className="h-10 w-auto"
        />
        <img
          src="/images/rciclogo2.png"
          alt="RCIC Logo"
          className="h-12 w-auto"
        />
      </div>
    </div>
  )
}
