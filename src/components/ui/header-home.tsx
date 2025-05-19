// components/HeaderHome.tsx
"use client";
import React, { useState, useEffect } from "react";
import { MegaMenuBar } from "./mega-menu-bar";
import Link from "next/link";

export const HeaderHome: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-40
        transform transition-transform duration-300 ease-in-out
        ${
          scrolled
            ? "translate-y-0 bg-white shadow-md py-3"
            : "translate-y-[var(--topbar-height)] bg-white py-5"
        }
      `}
    >
      <div className="container mx-auto px-2 md:px-2 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo3.png" alt="Your Logo" className="h-10 w-auto" />
        </Link>

        <MegaMenuBar />

        <div className="flex items-center space-x-4">
          <Link href="/about-us/about/book-appointment">
            <button className="px-6 py-2 rounded-lg font-medium bg-primary text-primary-foreground transition-colors duration-300 hover:bg-primary/90">
              Book a Consultation
            </button>
          </Link>

          <button className="md:hidden text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
