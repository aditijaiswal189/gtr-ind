export const menuRouter = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "About",
    children: [
      {
        path: "About Us",
        children: [
          {
            path: "/about-us/about/about",
            element: "About",
          },
          {
            path: "/about-us/about/our-services",
            element: "Our Service",
          },
          {
            path: "/about-us/about/contact-us",
            element: "Contact us",
          },

          {
            path: "/about-us/about/book-appointment",
            element: "Book Appointment",
          },
          {
            path: "/about-us/about/why-choose-us",
            element: "Why Choose Us",
          },
          {
            path: "/about-us/about/price-policy",
            element: "Price Policy",
          },
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
            path: "/about-us/cert-testimonials/testimonials",
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
        element: `Express Entry`,
        children: [
          {
            path: "/immigration/express-entry/federal-skilled-worker",
            element: "Fedral Skilled Worker",
          },
          {
            path: "/immigration/express-entry/federal-skilled-trade",
            element: "Fedral Skilled Trade",
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
            element: " Start-Up Visa (SUV)",
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
            path: "/business/provincial-business-programs/british-columbia-bc-pnp",

            element: "British Colombia (BC PNP)",
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
          {
            path: "/work-and-jobs/work/work-permit",
            element: "Work Permit",
          },
          {
            path: "/work-and-jobs/work/international-mobility-program(imp)",
            element: "International Mobility Program (IMP)",
          },
          {
            path: "/work-and-jobs/work/lmia",
            element: "LMIA",
          },
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
      {
        path: "Study",

        children: [
          {
            path: "/study/study/study-abroad",
            element: "Study Abroad",
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
          {
            path: "/other-services/programs/visitor",
            element: "Visitor",
          },

          {
            path: "/other-services/programs/jobs-map",
            element: "Jobs Map",
          },
        ],
      },
      {
        path: "News",

        children: [
          {
            path: "/other-services/news-service/news",
            element: "News",
          },
        ],
      },
    ],
  },
];
