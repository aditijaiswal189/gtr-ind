"use client";
import React from "react";

import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-foreground py-2 px-4 md:px-8 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-muted-foreground text-sm">
            <Mail className="mr-2 text-muted-foreground" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="mr-2 text-muted-foreground" />
            <span>55 Main Street, 2nd block, Malborne, Australia</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={Icon.name}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
