"use client";
import React from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-black py-2 px-4 md:px-8 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-300 text-sm">
            <Mail className="mr-2 text-gray-400" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <MapPin className="mr-2 text-gray-400" />
            <span>55 Main Street, 2nd block, Malborne, Australia</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}