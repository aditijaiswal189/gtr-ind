// "use client";
// const text = {
//   "/": "We are a team of professionals who are passionate about helping you achieve",
//   about: {
//     text: "GreenTech Resources Worldwide <br /> Canada",
//     image: "/about.png",
//   },
//   news: {
//     text: "Latest News and Updates",
//     image: "/news.jpg",
//   },
//   // contact: {
//   //   text: "Contact Us",
//   //   image: "/hero-2.jpg",
//   // },
//   "/our-success-customers": {
//     text: "Our Success Stories",
//     image: "/successcustomers.png",
//   },
//   "book-appointment": {
//     text: "Book an Appointment",
//     image: "/service.jpg",
//   },
//   "why-choose-us": {
//     text: "Why Choose Us",
//     image: "/about.png",
//   },
//   "our-service": {
//     text: "Our <br /> Services",
//     image: "/service.jpg",
//   },
//   "certificate-membership": {
//     text: "Certification and Membership",
//     image: "/about.png",
//   },
//   "customer-testimonials": {
//     text: "Please Rate Our Quality",
//     image: "/testimonial.jpg",
//   },
//   "express-entry": {
//     text: "Express Entry",
//     image: "/expressEntry.png",
//   },
//   "federal-skilled-trade": {
//     text: "Federal Skilled Trades Program",
//     image: "/federalSkill.png",
//   },
//   "federal-skilled-worker": {
//     text: "Federal Skilled Worker Program",
//     image: "/federalSkill.png",
//   },
//   "canadian-experience-class": {
//     text: "Canadian Experience Class",
//     image: "/federalSkill.png",
//   },
//   "provincial-nominee-programs": {
//     text: "Provincial Nominee Programs",
//     image: "/immigrationProvincial.png",
//   },
//   "alberta-immigration-aaip": {
//     text: "Alberta Immigration (AAIP)",
//     image: "/alberta.png",
//   },
//   "atlantic-immigration-aipp": {
//     text: "Atlantic Immigration (AAIP)",
//     image: "/atlantic.png",
//   },
//   "british-columbia-bcpnp": {
//     text: "British Columbia (BC PNP)",
//     image: "/british.jpg",
//   },
//   "ontario-oinp": {
//     text: "Ontario (OINP)",
//     image: "/ontario.png",
//   },
//   "manitoba-mpnp": {
//     text: "Manitoba (MPNP)",
//     image: "/manitoba.png",
//   },
//   "new-brunswick-nbpnp": {
//     text: "New Brunswick (NB PNP)",
//     image: "/newbrunswick.png",
//   },
//   "newfoundland-and-labrador": {
//     text: "Newfoundland and Labrador",
//     image: "/newbrunswick.png",
//   },
//   "saskatchewan-sinp": {
//     text: "Saskatchewan (SINP)",
//     image: "/saskatchewan.jpg",
//   },
//   "northwest-territories": {
//     text: "Northwest Territories",
//     image: "/northwestterritories.png",
//   },
//   "nova-scotia-nsnp": {
//     text: "Nova Scotia (NSNP)",
//     image: "/novaScotia.jpg",
//   },
//   "prince-edward-island-peipnp": {
//     text: "Prince Edward Island (PEI PNP)",
//     image: "/novaScotia.jpg",
//   },
//   "rural-and-northern-immigration-pilot-rnip": {
//     text: "Rural and Northern Immigration Pilot (RNIP)",
//     image: "/northwestterritories.png",
//   },

//   "yukon-ynp": {
//     text: "Yukon (YNP)",
//     image: "/yukon.jpg",
//   },
//   "immigration-challenges": {
//     text: "Please Rate Our Quality",
//     image: "/federalSkill.png",
//   },
//   "quebec-investor": {
//     text: "Quebec Investor Program",
//     image: "/federalSkill.png",
//   },
//   "quebec-entrepreneur": {
//     text: "Quebec Entrepreneur Program",
//     image: "/about.png",
//   },
//   "quebec-self-employed": {
//     text: "Quebec Self-Employed Program",
//     image: "/experince.jpg",
//   },
//   "start-up-visa": {
//     text: "Start Up Visa",
//     image: "/study.jpg",
//   },
//   "intra-company-transfer": {
//     text: "Intra Company Transfer",
//     image: "/experince.jpg",
//   },
//   "benefit-to-canada": {
//     text: "Benefits",
//     image: "/about.png",
//   },
//   "owner-operator": {
//     text: "Owner Operator",
//     image: "/experince.jpg",
//   },
//   "self-employed-persons": {
//     text: "Self Employed Person",
//     image: "/federalSkill.png",
//   },
//   visitor: {
//     text: "Visitor Visa",
//     image: "/federalSkill.png",
//   },
//   "family-sponsorship": {
//     text: "Family Sponsorship",
//     image: "/about.png",
//   },
//   price: {
//     text: "Our Price Policy",
//     image: "/cost.jpg",
//   },

//   "work-and-jobs": {
//     text: "Work in Canada",
//     image: "/immigration.png",
//   },
//   "work-permit": {
//     text: "Work Permit (WP)",
//     image: "/experince.jpg",
//   },
//   "international-mobility-program": {
//     text: "International Mobility Program (IMP)",
//     image: "/success.jpg",
//   },
//   "in-demand-jobs": {
//     text: "In-Demand Jobs",
//     image: "/success.jpg",
//   },
//   "support-for-employers": {
//     text: "Support for Employers",
//     image: "/manitoba.png",
//   },
//   lmia: {
//     text: "Labour Market Impact Assessment (LMIA)",
//     image: "/experince.jpg",
//   },
//   "caregiver-program": {
//     text: "Caregiver Program",
//     image: "/immigration.png",
//   },
//   "teer-categories-and-noc": {
//     text: "TEER Categories and NOC",
//     image: "/manitoba.png",
//   },
//   "study-in-canada": {
//     text: "Studying in Canada",
//     image: "/study.jpg",
//   },
//   "post-graduate-work-permit": {
//     text: "Post Graduate Work Permit (PGWP)",
//     image: "/study.jpg",
//   },
//   "pathway-from-study-to-pr": {
//     text: "Pathway from Study to PR",
//     image: "/study.jpg",
//   },

//   "designated-learning-institution": {
//     text: "Designated Learning Institution (DLI)",
//     image: "/study.jpg",
//   },
//   "student-direct-stream": {
//     text: "Student Direct Stream (SDS)",
//     image: "/study.jpg",
//   },
// };

// export const getCachedData = (pathname: string) => {
//   type TextKeys = keyof typeof text;
//   const sanitizedPath = pathname.replace(/^\/|\/$/g, ""); // removes leading and trailing slashes
//   //   console.log(sanitizedPath, "sanitizedPath"); // helpful for debugging
//   if (sanitizedPath in text) {
//     return text[sanitizedPath as TextKeys]; // Cast `sanitizedPath` to `TextKeys` here
//   }
//   // if (text[sanitizedPath]) {
//   //   // console.log(text[sanitizedPath]);
//   //   return text[sanitizedPath];
//   // }

//   return {
//     text: "Default Text",
//     image: "/default.jpg",
//   };
// };
