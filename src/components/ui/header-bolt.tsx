"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";


export const HeaderBolt: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 text-foreground ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo3.png" alt="Logo"  className="h-10 w-auto mx-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <CustomLink href="/" isActive>
              About us
            </CustomLink>
            <CustomLink href="/about">Immigration</CustomLink>
            <CustomLink href="/services">Business</CustomLink>
            <CustomLink href="/visa">Work and Jobs</CustomLink>
            <CustomLink href="/blog">Study</CustomLink>
            <CustomLink href="/contact">Other services</CustomLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 rounded-full font-medium bg-primary text-primary-foreground transition-colors duration-300">
              Book a Consultation
            </button>

            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </div>

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

interface LinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`font-medium transition-colors duration-300 ${
        isActive ? "text-primary" : "text-foreground hover:text-primary"
      }`}
    >
      {children}
    </a>
  );
};

