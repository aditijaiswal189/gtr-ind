import React from "react"
import { Facebook, Linkedin } from "lucide-react"

import Link from "next/link"
import { IconBrandWhatsapp } from "@tabler/icons-react"

const provinvialNomineePrograms = [
  {
    path: "/immigration/provincial-nominee-programs/alberta(aaip)",
    element: "Alberta (AAIP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/atlantic-immigration(aipp)",
    element: "Atlantic Immigration (AIPP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/british-columbia(bc-pnp)",

    element: "British Colombia (BC PNP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/ontario(oinp)",
    element: "Ontario (OINP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/manitoba(mpnp)",
    element: "Manitoba (MPNP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/new-brunswick(nbpnp)",
    element: "New Brunswick (NBPNP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
    element: "Newfoundland and Labrador",
  },
  {
    path: "/immigration/provincial-nominee-programs/saskatchewan(sinp)",
    element: "Saskatchewan (SINP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/northwest-territories",
    element: "Northwest Territories",
  },
  {
    path: "/immigration/provincial-nominee-programs/nova-scotia(nsnp)",
    element: "Nova Scotia (NSNP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/prince-edward-island(pei-pnp)",
    element: "Prince Edward Island (PEI PNP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/rural-northern-immigration-pilot(rnip)",
    element: "Rural & Northern Immigration Pilot (RNIP)",
  },
  {
    path: "/immigration/provincial-nominee-programs/yukon(ynp)",
    element: "Yukon (YNP)",
  },
]

const LinkText = ({ href, label, className }) => {
  return (
    <li>
      <Link
        href={href}
        className={`text-gray-400 hover:text-white transition-colors ${className} `}
      >
        {label}
      </Link>
    </li>
  )
}

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
            <p className="text-gray-400 mb-6 text-sm pr-4 ">
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
          <div className="flex flex-col justify-between ">
            <div>
              <h3 className="text-sm font-semibold mb-1">Our Services</h3>
              <ul
                className="space-y-1 text-sm
               "
              >
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
                    href="/business/quebec/quebec-investor"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/study/programs/study-in-canada"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Study
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work-and-jobs/work/work-permit"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1">Other Services</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/other-services/news-service/news"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/about/contact-us"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other-services/programs/jobs-map"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Jobs Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other-services/programs/visitor"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Visitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other-services/programs/family-sponsorship"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Family sponsorship
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-sm font-semibold mb-1">
                Provincial Nominee Programs
              </h3>
              <ul className="space-y-1 text-sm">
                {provinvialNomineePrograms.map((program) => (
                  <LinkText
                    key={program.path}
                    href={program.path}
                    className="text-gray-400 hover:text-white transition-colors"
                    label={program.element}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-1">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
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
  )
}
