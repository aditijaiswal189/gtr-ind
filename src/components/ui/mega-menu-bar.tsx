// components/MegaMenuBar.tsx
"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Button } from "./button";

export const router = [
  { path: "/", element: "Home" },
  {
    path: "About",
    children: [
      {
        path: "About Us",
        children: [
          { path: "/about-us/about/about", element: "About" },
          { path: "/about-us/about/our-services", element: "Our Service" },
          {
            path: "/about-us/about/book-appointment",
            element: "Book Appointment",
          },
          { path: "/about-us/about/why-choose-us", element: "Why Choose Us" },
          { path: "/about-us/about/price-policy", element: "Price Policy" },
          {
            path: "/about-us/about/success-customers",
            element: "Success Customers",
          },
        ],
      },
      {
        path: "Certifications and Testimonials",
        children: [
          {
            path: "/about-us/cert-testimonials/certificate-membership",
            element: "Certificate Membership",
          },
          {
            path: "/about-us/cert-testimonials/customer-testimonials",
            element: "Customer Testimonials",
          },
        ],
      },
    ],
  },
  {
    path: "Immigration",
    children: [
      {
        path: "Express Entry",
        element: "Express Entry",
        children: [
          {
            path: "/immigration/express-entry/federal-skilled-worker",
            element: "Federal Skilled Worker",
          },
          {
            path: "/immigration/express-entry/federal-skilled-trade",
            element: "Federal Skilled Trade",
          },
          {
            path: "/immigration/express-entry/canadian-experience-class",
            element: "Canadian Experience Class",
          },
        ],
      },
      {
        path: "Provincial Nominee Programs",
        children: [
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
            element: "British Columbia (BC PNP)",
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
        ],
      },
      {
        path: "Immigration Challenges",
        children: [
          {
            path: "/immigration/overcome-immigration-challenges",
            element: "Immigration Challenges",
          },
        ],
      },
    ],
  },
  {
    path: "Business",
    children: [
      {
        path: "Quebec",
        children: [
          {
            path: "/business/quebec/quebec-investor",
            element: "Quebec Investor",
          },
          {
            path: "/business/quebec/quebec-enterpreneur-program",
            element: "Quebec Entrepreneur",
          },
          {
            path: "/business/quebec/quebec-self-employed",
            element: "Self Employed",
          },
        ],
      },
      {
        path: "Federal Programs",
        children: [
          {
            path: "/business/federal-programs/start-up-visa(suv)",
            element: "Start-Up Visa (SUV)",
          },
          {
            path: "/business/federal-programs/intra-company-transfer(ict)",
            element: "Intra-company transfer (ICT)",
          },
          {
            path: "/business/federal-programs/significant-benefit-to-canada(c10)",
            element: "Significant Benefit to Canada (C10)",
          },
          {
            path: "/business/federal-programs/owner-operator-lmia",
            element: "Owner Operator LMIA",
          },
          {
            path: "/business/federal-programs/self-employed-persons(c11)",
            element: "Self-Employed Persons (C11)",
          },
        ],
      },
      {
        path: "Provincial Business Programs",
        children: [
          {
            path: "/business/provincial-business-programs/alberta-immigration-aaip",
            element: "Alberta (AAIP)",
          },
          {
            path: "/business/provincial-business-programs/atlantic-immigration-aipp",
            element: "Atlantic Immigration (AIPP)",
          },
          {
            path: "/business/provincial-business-programs/british-columbia-bcpnp",
            element: "British Columbia (BC PNP)",
          },
          {
            path: "/business/provincial-business-programs/saskatchewan-sinp",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/business/provincial-business-programs/northwest-territories",
            element: "Northwest Territories",
          },
          {
            path: "/business/provincial-business-programs/prince-edward-island-peipnp",
            element: "Prince Edward Island (PEI PNP)",
          },
        ],
      },
    ],
  },
  {
    path: "Work And Jobs",
    children: [
      {
        path: "Work",
        children: [
          { path: "/work-and-jobs/work/work-permit", element: "Work Permit" },
          {
            path: "/work-and-jobs/work/international-mobility-program(imp)",
            element: "International Mobility Program (IMP)",
          },
          { path: "/work-and-jobs/work/lmia", element: "LMIA" },
        ],
      },
      {
        path: "Jobs",
        children: [
          {
            path: "/work-and-jobs/jobs/in-demand-jobs",
            element: "In Demand Jobs",
          },
          {
            path: "/work-and-jobs/jobs/for-employers",
            element: "Support For Employers",
          },
          {
            path: "/work-and-jobs/jobs/teer-categories-noc-codes",
            element: "TEER Categories & NOC Codes",
          },
        ],
      },
    ],
  },
  {
    path: "Study",
    children: [
      {
        path: "Programs",
        children: [
          {
            path: "/study/programs/post-graduate-wp",
            element: "Post Graduate Work Permit (PGWP)",
          },
          {
            path: "/study/programs/study-in-canada",
            element: "Study In Canada",
          },
          {
            path: "/study/programs/designated-learning-institution(dli)",
            element: "Designated Learning Institution (DLI)",
          },
          {
            path: "/study/programs/student-direct-stream(sds)",
            element: "Student Direct Stream (SDS)",
          },
        ],
      },
      {
        path: "Others",
        children: [
          {
            path: "/study/others/study-to-pr",
            element: "Pathway From Study To PR",
          },
        ],
      },
    ],
  },
  {
    path: "Other Services",
    children: [
      {
        path: "Programs",
        children: [
          {
            path: "/other-services/programs/family-sponsorship",
            element: "Family Sponsorship",
          },
          { path: "/other-services/programs/visitor", element: "Visitor" },
          { path: "/other-services/programs/jobs-map", element: "Jobs Map" },
        ],
      },
      {
        path: "News",
        children: [
          { path: "/other-services/news-service/news", element: "News" },
        ],
      },
    ],
  },
];

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type MenuPosition = { left: number; width: number };

export function MegaMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const menuButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // close on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  // click outside to close
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // compute horizontal position on open
  useLayoutEffect(() => {
    if (
      activeMenu &&
      menuButtonRefs.current[activeMenu] &&
      wrapperRef.current
    ) {
      const btnRect =
        menuButtonRefs.current[activeMenu]!.getBoundingClientRect();
      const wrapRect = wrapperRef.current.getBoundingClientRect();
      const MENU_WIDTH = 900;

      let left =
        btnRect.left + btnRect.width / 2 - MENU_WIDTH / 2 - wrapRect.left;
      left = Math.max(0, left);
      left = Math.min(wrapRect.width - MENU_WIDTH, left);

      setMenuPosition({ left, width: MENU_WIDTH });
    } else {
      setMenuPosition(null);
    }
  }, [activeMenu]);

  const handleMenuClick = (menu: string) =>
    setActiveMenu((prev) => (prev === menu ? null : menu));

  const getFeaturedContent = (category: string) => {
    const styles = "h-8 w-8 text-primary";
    switch (category) {
      case "About":
        return {
          title: "About Our Services",
          description: "Learn more about our immigration consulting services.",
          image: "/images/customers/cu1.webp",
          cta: { text: "Book a Consultation", link: "/book-appointment" },
          icon: <BookOpen className={styles} />,
          highlight: {
            title: "Why Choose Us",
            text: "15+ years of experience, helping thousands successfully immigrate.",
            link: "/why-choose-us",
          },
        };
      case "Immigration":
        return {
          title: "Immigration Pathways",
          description:
            "Discover various immigration programs for your situation.",
          image: "/images/customers/cu2.webp",
          cta: { text: "Assess Your Eligibility", link: "/immigration" },
          icon: <MapPin className={styles} />,
          highlight: {
            title: "Express Entry",
            text: "Fastest PR path for skilled workers.",
            link: "/immigration/express-entry",
          },
        };
      case "Business":
        return {
          title: "Business Immigration",
          description: "Start or expand your business in Canada.",
          image: "/images/customers/cu3.jpeg",
          cta: { text: "Business Options", link: "/business" },
          icon: <Briefcase className={styles} />,
          highlight: {
            title: "Start-Up Visa Program",
            text: "Launch innovative ideas with Canadian support.",
            link: "/business/start-up-visa",
          },
        };
      case "Work And Jobs":
        return {
          title: "Canadian Work Opportunities",
          description: "From work permits to permanent jobs.",
          image: "/images/customers/cu4.webp",
          cta: { text: "In-Demand Jobs", link: "/work-and-jobs" },
          icon: <Briefcase className={styles} />,
          highlight: {
            title: "LMIA Work Permits",
            text: "Understand LMIA process for work permits.",
            link: "/work-and-jobs/lmia",
          },
        };
      case "Study":
        return {
          title: "Study in Canada",
          description: "World-class education + PR pathways.",
          image: "/images/customers/cu5.webp",
          cta: { text: "Find Programs", link: "/study" },
          icon: <GraduationCap className={styles} />,
          highlight: {
            title: "Post-Graduation Work Permit",
            text: "Gain Canadian work experience.",
            link: "/study/post-graduate-work-permit",
          },
        };
      case "Other Services":
        return {
          title: "Other Services",
          description: "News and updates",
          image: "/images/customers/cu6.webp",
          cta: { text: "Find Programs", link: "/other-services" },
          icon: <GraduationCap className={styles} />,
          highlight: {
            title: "News and Updates",
            text: "Stay informed",
            link: "/other-services/news",
          },
        };
      default:
        return null;
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10 relative"
    >
      <div className="flex items-center space-x-1">
        {router.map((item) => {
          if (!item.children) {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors",
                  pathname === item.path ? "text-primary" : "text-white"
                )}
              >
                {item.element}
              </Link>
            );
          }

          return (
            <div key={item.path} className="relative">
              <button
                ref={(el) => {
                  menuButtonRefs.current[item.path] = el;
                }}
                onClick={() => handleMenuClick(item.path)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium inline-flex items-center hover:bg-primary hover:text-white transition-colors",
                  activeMenu === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.path}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeMenu === item.path && menuPosition && (
                <div
                  ref={menuRef}
                  className="absolute top-full  mt-2 bg-card rounded-md shadow-2xl z-50 p-4"
                  style={{
                    left: menuPosition.left,
                    width: menuPosition.width,
                    maxWidth: "98vw",
                  }}
                >
                  <div className="grid grid-cols-12 gap-4">
                    {(() => {
                      const children = item.children!;
                      const featured = getFeaturedContent(item.path);

                      return (
                        <>
                          {featured && (
                            <div className="col-span-4 space-y-4 border-r border-border pr-6">
                              <div className="flex items-start space-x-3">
                                {featured.icon}
                                <h3 className="text-lg font-semibold text-foreground">
                                  {featured.title}
                                </h3>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {featured.description}
                              </p>
                              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                <img
                                  src={featured.image}
                                  alt={featured.title}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="bg-primary/10 p-4 rounded-lg">
                                <h4 className="font-medium text-primary">
                                  {featured.highlight.title}
                                </h4>
                                <p className="text-sm text-primary mt-1">
                                  {featured.highlight.text}
                                </p>
                                <Link
                                  href={featured.highlight.link}
                                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mt-2"
                                >
                                  Learn more{" "}
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </div>
                              <Button asChild className="w-full">
                                <Link href={featured.cta.link}>
                                  {featured.cta.text}
                                </Link>
                              </Button>
                            </div>
                          )}
                          <div
                            className={featured ? "col-span-8" : "col-span-12"}
                          >
                            {children.every((c) => !c.children) ? (
                              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-start pl-8 border-l border-border min-h-[260px]">
                                {children.map((c) => (
                                  <Link
                                    key={c.path}
                                    href={c.path}
                                    className="block text-base font-medium text-foreground hover:text-primary"
                                  >
                                    {c.element}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="grid gap-4 grid-cols-3">
                                {children.map((c) => (
                                  <div key={c.path} className="space-y-4">
                                    <h3 className="text-sm font-semibold text-foreground border-b border-border pb-1">
                                      {c.path}
                                    </h3>
                                    <ul className="space-y-2">
                                      {c.children!.map((sub) => (
                                        <li key={sub.path}>
                                          <Link
                                            href={sub.path}
                                            className="block text-sm text-muted-foreground hover:text-primary"
                                          >
                                            {sub.element}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
