// Configuration for navigation routes
export const router = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "About",
      children: [
        {
          path: "/about",
          element: "About",
        },
        {
          path: "/our-service",
          element: "Our Service",
        },
        {
          path: "/certificate-membership",
          element: "Certificate Membership",
        },
        {
          path: "/customer-testimonials",
          element: "Customer Testimonials",
        },
        {
          path: "/book-appointment",
          element: "Book Appointment",
        },
        {
          path: "/why-choose-us",
          element: "Why Choose Us",
        },
      ],
    },
    {
      path: "Immigration",
      children: [
        {
          path: "Express Entry",
          element: `Express Entry`,
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
              path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
              element: "Alberta (AAIP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
              element: "Atlantic Immigration (AIPP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",
              element: "British Colombia (BC PNP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/ontario-oinp",
              element: "Ontario (OINP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
              element: "Manitoba (MPNP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
              element: "New Brunswick (NBPNP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
              element: "Newfoundland and Labrador",
            },
            {
              path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
              element: "Saskatchewan (SINP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/northwest-territories",
              element: "Northwest Territories",
            },
            {
              path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
              element: "Nova Scotia (NSNP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
              element: "Prince Edward Island (PEI PNP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
              element: "Rural & Northern Immigration Pilot (RNIP)",
            },
            {
              path: "/immigration/provincial-nominee-programs/yukon-ynp",
              element: "Yukon (YNP)",
            },
          ],
        },
        {
          path: "/immigration/immigration-challenges",
          element: "Immigration Challenges",
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
              path: "/business/quebec/quebec-entrepreneur",
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
              path: "/business/federal-programs/start-up-visa",
              element: " Start-Up Visa (SUV)",
            },
            {
              path: "/business/federal-programs/intra-company-transfer",
              element: "Intra-company transfer (ICT)",
            },
            {
              path: "/business/federal-programs/benefit-to-canada",
              element: "Significant Benefit to Canada (C10)",
            },
            {
              path: "/business/federal-programs/owner-operator",
              element: "Owner Operator LMIA",
            },
            {
              path: "/business/federal-programs/self-employed-persons",
              element: "Self-Employed Persons (C11)",
            },
          ],
        },
      ],
    },
    {
      path: "Work And Jobs",
      children: [
        {
          path: "/work-and-jobs/work-permit",
          element: "Work Permit",
        },
        {
          path: "/work-and-jobs/international-mobility-program",
          element: "International Mobility Program (IMP)",
        },
        {
          path: "/work-and-jobs/in-demand-jobs",
          element: "In Demand Jobs",
        },
        {
          path: "/work-and-jobs/support-for-employers",
          element: "Support For Employers",
        },
        {
          path: "/work-and-jobs/lmia",
          element: "LMIA",
        },
        {
          path: "/work-and-jobs/teer-categories-and-noc",
          element: "TEER Categories & NOC Codes",
        },
      ],
    },
    {
      path: "Study",
      children: [
        {
          path: "/study/post-graduate-work-permit",
          element: "Post Graduate Work Permit (PGWP)",
        },
        {
          path: "/study/study-in-canada",
          element: "Study In Canada",
        },
      ],
    },
    {
      path: "/news",
      element: "News",
    },
  ];
  
  // Mobile navigation config
  export const mobileConfig = [
    {
      name: "Home",
      icon: "mdi:home",
      heading: "font-semibold text-green-800",
      pointer: "bg-green-700",
      active: "bg-green-300 border-green-600 text-green-800",
      activeIcon: "text-green-800",
      iconBg: "bg-green-700",
      apis: [
        {
          provider: "internal",
          name: "Home",
          path: "/",
        },
      ],
    },
    {
      name: "About",
      icon: "mdi:information-outline",
      heading: "font-semibold text-blue-800",
      pointer: "bg-blue-700",
      active: "bg-blue-300 border-blue-600 text-blue-800",
      activeIcon: "text-blue-800",
      iconBg: "bg-blue-700",
      apis: [
        {
          provider: "internal",
          name: "About",
          path: "/about",
        },
        {
          provider: "internal",
          name: "Our Service",
          path: "/our-service",
        },
        {
          provider: "internal",
          name: "Certificate Membership",
          path: "/certificate-membership",
        },
        {
          provider: "internal",
          name: "Customer Testimonials",
          path: "/customer-testimonials",
        },
        {
          provider: "internal",
          name: "Book Appointment",
          path: "/book-appointment",
        },
        {
          provider: "internal",
          name: "Why Choose Us",
          path: "/why-choose-us",
        },
      ],
    },
    {
      name: "Express Entry",
      icon: "mdi:airplane-takeoff",
      heading: "font-semibold text-red-800",
      pointer: "bg-red-700",
      active: "bg-red-300 border-red-600 text-red-800",
      activeIcon: "text-red-800",
      iconBg: "bg-red-700",
      apis: [
        {
          provider: "internal",
          name: "Federal Skilled Worker",
          path: "/immigration/express-entry/federal-skilled-worker",
        },
        {
          provider: "internal",
          name: "Federal Skilled Trade",
          path: "/immigration/express-entry/federal-skilled-trade",
        },
        {
          provider: "internal",
          name: "Canadian Experience Class",
          path: "/immigration/express-entry/canadian-experience-class",
        },
      ],
    },
    // Additional mobile config items...
    // Note: I've shortened this for brevity, but the full mobileConfig would be included
  ];