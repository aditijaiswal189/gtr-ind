import React from "react";
import { Facebook, Linkedin } from "lucide-react";

import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="bg-muted-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6 pr-4">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo3.png"
                  alt="Greentech Resources Logo"
                  className="h-10 mr-2"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 pr-4 ">
              Our experienced team of GreenTech Resource Worldwide Canada is
              here to provide expert guidance and support you!
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/greentechresourcesca"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/greentech-resources/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=16476197975"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IconBrandWhatsapp className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about-us/about/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/immigration/express-entry/federal-skilled-worker"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Immigration
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Study
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Work{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Other Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Visitor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Family sponsorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest immigration updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Greentech resources. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
