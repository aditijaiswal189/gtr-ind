// "use client";
// import React, { Component, useState } from "react";
// // import { Link } from "react-router-dom";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils";
// import { Item } from "@radix-ui/react-navigation-menu";
// import { motion } from "framer-motion";
// // import MobileNavbar from "./mobile-navbar";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";
// import Image from "next/image";

// export  function Navbar({ defaultStyle = false, type = "default" }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredPath, setHoveredPath] = useState<string | null>(null);

//   function renderSubmenus(
//     children: { path: string; element?: string; children?: { path: string; element: string }[] }[],
//     hoveredPath: string | null,
//     setHoveredPath: React.Dispatch<React.SetStateAction<string | null>>
//   ): React.ReactNode {
//     return (
//       <ul className="flex flex-col">
//         {children.map((child) => (
//           <li
//             key={child.path}
//             className="relative group"
//             onMouseEnter={() => setHoveredPath(child.path)}
//             onMouseLeave={() => setHoveredPath(null)}
//           >
//             {child.children ? (
//               <div className="flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-200">
//                 <span>{child.element || child.path}</span>
//                 <ChevronRight className="w-4 h-4" />
//               </div>
//             ) : (
//               <Link
//                 href={child.path}
//                 className="block px-4 py-2 hover:bg-gray-200"
//               >
//                 {child.element || child.path}
//               </Link>
//             )}
//             {child.children && hoveredPath === child.path && (
//               <div className="absolute left-full top-0 bg-white shadow-md rounded-md">
//                 {renderSubmenus(child.children, hoveredPath, setHoveredPath)}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <>
//       <div className="md:hidden flex py-2 z-50 relative bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 rounded-t-2xl  px-8">
//         {/* <MobileNavbar
//           config={mobileConfig}
//           isOpen={isOpen}
//           setIsOpen={setIsOpen}
//         /> */}
//       </div>
//       <div
//         className={cn(
//           "hidden md:flex rounded-t-2xl shadow-lg h-24 justify-start items-center",
//           type === "hero" ? "bg-gray-10" : "bg-black/40"
//         )}
//       >
//         <div className="h-full flex justify-center items-center px-8">
//           <Image src="/gtr-white.png" alt="" className="w-72" />
//         </div>
//         <div className="flex flex-col w-full justify-start items-start h-24">
//           <div className="w-full flex gap-10 py-2 justify-end items-center px-6">
//             <Link
//               href={"/news"}
//               className="bg-transparent text-xs font-bold flex flex-col gap-0.5 group"
//             >
//               <span
//                 className={cn(type === "default" ? "text-white" : "text-black")}
//               >
//                 News
//               </span>
//               <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
//             </Link>
//             <Link
//               href={"/visitor"}
//               className="text-xs font-bold flex flex-col gap-0.5 group"
//             >
//               <span
//                 className={cn(type === "default" ? "text-white" : "text-black")}
//               >
//                 Visitor
//               </span>
//               <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
//             </Link>
//             <Link
//               href={"/family-sponsorship"}
//               className="text-xs flex font-bold flex-col gap-0.5 group"
//             >
//               <span
//                 className={cn(type === "default" ? "text-white" : "text-black")}
//               >
//                 Family Sponsorship
//               </span>
//               <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
//             </Link>
//             <Link
//               href={"/price"}
//               className="text-xs font-bold flex flex-col gap-0.5 group"
//             >
//               <span
//                 className={cn(type === "default" ? "text-white" : "text-black")}
//               >
//                 Price Policy
//               </span>
//               <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
//             </Link>
//             {/* <Link
//               href={"/contact"}
//               className="text-xs font-bold flex flex-col gap-0.5 group"
//             >
//               <span
//                 className={cn(type === "default" ? "text-white" : "text-black")}
//               >
//                 Contact Us
//               </span>
//               <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
//             </Link> */}
           
//             {/* <Button
//               className="py-0.5 px-4  text-stone-50"
//               icon={
//                 <div className="flex gap-2 justify-center items-center text-xs">
//                   <Icon icon={"mdi:phone"} />
//                   <span>+1855 477 9797</span>
//                 </div>
//               }
//             >
//               <span className="text-xs">Free Consultation</span>
//             </Button> */}
//           </div>

//           <div className="flex justify-start gap-4 items-center px-4 w-full h-16">
//             <NavigationMenu>
//               <NavigationMenuList className="flex gap-4">
//                 {router.map((navItem) => (
//                   <NavigationMenuItem
//                     key={navItem.path}
//                     className="relative min-w-12"
//                   >
//                     {navItem.element ? (
//                       <NavigationMenuLink
//                         className={cn(
//                           "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-highlight data-[state=open]:bg-highlight hover:bg-[#b33d3d] relative group bg-transparent "
//                         )}
//                       >
//                         <Link
//                           className={cn(
//                             type === "default" &&
//                               "text-white  group-hover:text-white"
//                           )}
//                           href={navItem.path}
//                         >
//                           {navItem.element}
//                         </Link>
//                       </NavigationMenuLink>
//                     ) : (
//                       <NavigationMenuTrigger
//                         className={cn(
//                           "bg-transparent data-[state=open]:text-white data-[state=open]:bg-[#b33d3d] py-1 focus:bg-[#b33d3d] hover:bg-[#b33d3d] ",
//                           defaultStyle && "text-white/90"
//                         )}
//                       >
//                         {navItem.path}
//                       </NavigationMenuTrigger>
//                     )}
//                     {navItem.children && (
//                       <NavigationMenuContent className="absolute bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 border-gray-100 rounded-md overflow-visible left-0 px-0">
//                         <div className="w-[200px] py-2">
//                           {renderSubmenus(
//                             navItem.children,
//                             hoveredPath,
//                             setHoveredPath
//                           )}
//                         </div>
//                       </NavigationMenuContent>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//             {/* <button className="flex gap-1 justify-center items-center w-max px-4 hover:bg-accent hover:text-accent-foreground py-2">
//             <Icon icon={"emojione:flag-for-liberia"} />
//             EN
//           </button>
//           <button className="flex gap-1 justify-center items-center w-max px-4 py-2 hover:bg-accent hover:text-accent-foreground">
//             <Icon icon={"twemoji:flag-vietnam"} />
//             VN
//           </button> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// interface SubPage {
//   path: string;
//   element?: string;
//   children?: SubPage[];
// }

// interface SubPageProps {
//   submenus: SubPage[];
//   hoveredPath: string | null;
//   setHoveredPath: (path: string | null) => void;
// }

// const SubPageComponent: React.FC<SubPageProps> = ({ submenus, hoveredPath, setHoveredPath }) => {
//   return (
//     <ul>
//       {submenus.map((subPage) => (
//         <li
//           key={subPage.path}
//           className="flex text-left w-full px-3 py-1 border-b last:border-b-0 relative"
//           onMouseEnter={() => setHoveredPath(subPage.path)}
//           onMouseLeave={() => setHoveredPath(null)}
//         >
//           {subPage.children ? (
//             <div className="relative w-full">
//               <div
//                 className={cn(
//                   "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full rounded-md py-1",
//                   hoveredPath === subPage.path ? "bg-[#b33d3d] text-white" : ""
//                 )}
//               >
//                 <span>{subPage.path}</span>
//                 <ChevronRight/>
//               </div>
//               <div
//                 className={`absolute top-0 left-[188px] w-[300px] bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 border-gray-100 rounded-md overflow-visible text-left py-0.5 flex flex-col z-10 
//                   transition-all duration-300 transform ease-out ${
//                     hoveredPath === subPage.path
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 translate-x-4 pointer-events-none"
//                   }`}
//               >
//                 {subPage.children.map((item) => (
//                   <Link
//                     key={item.path}
//                     className="group rounded-md text-left cursor-pointer text-sm border-b py-1 last:border-b-0 px-2 w-full"
//                     href={item.path}
//                   >
//                     <motion.div
//                       whileHover={{
//                         scale: 1.01,
//                         backgroundColor: "#b33d3d",
//                         color: "#fff",
//                       }}
//                       transition={{ type: "spring", stiffness: 200 }}
//                       className="px-3 py-1 rounded-md"
//                     >
//                       {item.element}
//                     </motion.div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <Link
//               className="text-left hover:bg-[#b33d3d] hover:text-white py-1 rounded-md text-sm border-b last:border-b-0 px-2 w-full"
//               href={subPage.path}
//             >
//               {subPage.element}
//             </Link>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };;

// export const mobileConfig = [
//   {
//     name: "Home",
//     icon: "mdi:home",
//     heading: "font-semibold text-green-800",
//     pointer: "bg-green-700",
//     active: "bg-green-300 border-green-600 text-green-800",
//     activeIcon: "text-green-800",
//     iconBg: "bg-green-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Home",
//         path: "/",
//       },
//     ],
//   },
//   {
//     name: "About",
//     icon: "mdi:information-outline",
//     heading: "font-semibold text-blue-800",
//     pointer: "bg-blue-700",
//     active: "bg-blue-300 border-blue-600 text-blue-800",
//     activeIcon: "text-blue-800",
//     iconBg: "bg-blue-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "About",
//         path: "/about",
//       },
//       {
//         provider: "internal",
//         name: "Our Service",
//         path: "/our-service",
//       },
//       {
//         provider: "internal",
//         name: "Certificate Membership",
//         path: "/certificate-membership",
//       },
//       {
//         provider: "internal",
//         name: "Customer Testimonials",
//         path: "/customer-testimonials",
//       },
//       {
//         provider: "internal",
//         name: "Book Appointment",
//         path: "/book-appointment",
//       },
//       {
//         provider: "internal",
//         name: "Why Choose Us",
//         path: "/why-choose-us",
//       },
//     ],
//   },
//   {
//     name: "Express Entry",
//     icon: "mdi:airplane-takeoff",
//     heading: "font-semibold text-red-800",
//     pointer: "bg-red-700",
//     active: "bg-red-300 border-red-600 text-red-800",
//     activeIcon: "text-red-800",
//     iconBg: "bg-red-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Federal Skilled Worker",
//         path: "/immigration/express-entry/federal-skilled-worker",
//       },
//       {
//         provider: "internal",
//         name: "Federal Skilled Trade",
//         path: "/immigration/express-entry/federal-skilled-trade",
//       },
//       {
//         provider: "internal",
//         name: "Canadian Experience Class",
//         path: "/immigration/express-entry/canadian-experience-class",
//       },
//     ],
//   },
//   {
//     name: "Provincial Nominee Programs",
//     icon: "mdi:map-marker-multiple-outline",
//     heading: "font-semibold text-purple-800",
//     pointer: "bg-purple-700",
//     active: "bg-purple-300 border-purple-600 text-purple-800",
//     activeIcon: "text-purple-800",
//     iconBg: "bg-purple-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Alberta (AAIP)",
//         path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
//       },
//       {
//         provider: "internal",
//         name: "Atlantic Immigration (AIPP)",
//         path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
//       },
//       {
//         provider: "internal",
//         name: "British Columbia (BC PNP)",
//         path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",
//       },
//       {
//         provider: "internal",
//         name: "Ontario (OINP)",
//         path: "/immigration/provincial-nominee-programs/ontario-oinp",
//       },
//       {
//         provider: "internal",
//         name: "Manitoba (MPNP)",
//         path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
//       },
//       {
//         provider: "internal",
//         name: "New Brunswick (NBPNP)",
//         path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
//       },
//       {
//         provider: "internal",
//         name: "Newfoundland and Labrador",
//         path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
//       },
//       {
//         provider: "internal",
//         name: "Saskatchewan (SINP)",
//         path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
//       },
//       {
//         provider: "internal",
//         name: "Northwest Territories",
//         path: "/immigration/provincial-nominee-programs/northwest-territories",
//       },
//       {
//         provider: "internal",
//         name: "Nova Scotia (NSNP)",
//         path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
//       },
//       {
//         provider: "internal",
//         name: "Prince Edward Island (PEI PNP)",
//         path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
//       },
//       {
//         provider: "internal",
//         name: "Rural & Northern Immigration Pilot (RNIP)",
//         path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
//       },
//       {
//         provider: "internal",
//         name: "Yukon (YNP)",
//         path: "/immigration/provincial-nominee-programs/yukon-ynp",
//       },
//     ],
//   },
//   {
//     name: "Immigration Challenges",
//     icon: "mdi:account-question-outline",
//     heading: "font-semibold text-red-800",
//     pointer: "bg-red-700",
//     active: "bg-red-300 border-red-600 text-red-800",
//     activeIcon: "text-red-800",
//     iconBg: "bg-red-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Immigration Challenges",
//         path: "/immigration/immigration-challenges",
//       },
//     ],
//   },
//   {
//     name: "Business",
//     icon: "mdi:briefcase-outline",
//     heading: "font-semibold text-brown-800",
//     pointer: "bg-brown-700",
//     active: "bg-brown-300 border-brown-600 text-brown-800",
//     activeIcon: "text-brown-800",
//     iconBg: "bg-brown-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Quebec Investor",
//         path: "/business/quebec/quebec-investor",
//       },
//       {
//         provider: "internal",
//         name: "Quebec Entrepreneur",
//         path: "/business/quebec/quebec-entrepreneur",
//       },
//       {
//         provider: "internal",
//         name: "Quebec Self Employed",
//         path: "/business/quebec/quebec-self-employed",
//       },
//     ],
//   },
//   {
//     name: "Federal Programs",
//     icon: "mdi:briefcase-outline",
//     heading: "font-semibold text-teal-800",
//     pointer: "bg-teal-700",
//     active: "bg-teal-300 border-teal-600 text-teal-800",
//     activeIcon: "text-teal-800",
//     iconBg: "bg-teal-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Start-Up Visa (SUV)",
//         path: "/business/federal-programs/start-up-visa",
//       },
//       {
//         provider: "internal",
//         name: "Intra-company transfer (ICT)",
//         path: "/business/federal-programs/intra-company-transfer",
//       },
//       {
//         provider: "internal",
//         name: "Significant Benefit to Canada (C10)",
//         path: "/business/federal-programs/benefit-to-canada",
//       },
//       {
//         provider: "internal",
//         name: "Owner Operator LMIA",
//         path: "/business/federal-programs/owner-operator",
//       },
//       {
//         provider: "internal",
//         name: "Self-Employed Persons (C11)",
//         path: "/business/federal-programs/self-employed-persons",
//       },
//     ],
//   },
//   {
//     name: "Work And Jobs",
//     icon: "mdi:briefcase-check-outline",
//     heading: "font-semibold text-orange-800",
//     pointer: "bg-orange-700",
//     active: "bg-orange-300 border-orange-600 text-orange-800",
//     activeIcon: "text-orange-800",
//     iconBg: "bg-orange-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Work Permit",
//         path: "/work-and-jobs/work-permit",
//       },
//       {
//         provider: "internal",
//         name: "International Mobility Program (IMP)",
//         path: "/work-and-jobs/international-mobility-program",
//       },
//       {
//         provider: "internal",
//         name: "In Demand Jobs",
//         path: "/work-and-jobs/in-demand-jobs",
//       },
//       {
//         provider: "internal",
//         name: "Support For Employers",
//         path: "/work-and-jobs/support-for-employers",
//       },
//       {
//         provider: "internal",
//         name: "LMIA",
//         path: "/work-and-jobs/lmia",
//       },
//       {
//         provider: "internal",
//         name: "TEER Categories & NOC Codes",
//         path: "/work-and-jobs/teer-categories-and-noc",
//       },
//     ],
//   },
//   {
//     name: "Study",
//     icon: "mdi:school-outline",
//     heading: "font-semibold text-yellow-800",
//     pointer: "bg-yellow-700",
//     active: "bg-yellow-300 border-yellow-600 text-yellow-800",
//     activeIcon: "text-yellow-800",
//     iconBg: "bg-yellow-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Post Graduate Work Permit (PGWP)",
//         path: "/study/post-graduate-work-permit",
//       },
//       {
//         provider: "internal",
//         name: "Study In Canada",
//         path: "/study/study-in-canada",
//       },
//     ],
//   },
//   {
//     name: "Sponsorship Programs",
//     icon: "mdi:account-heart-outline",
//     heading: "font-semibold text-pink-800",
//     pointer: "bg-pink-700",
//     active: "bg-pink-300 border-pink-600 text-pink-800",
//     activeIcon: "text-pink-800",
//     iconBg: "bg-pink-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Family Sponsorship",
//         path: "/family-sponsorship",
//       },
//     ],
//   },
//   // {
//   //   name: "Residency And Citizenship",
//   //   icon: "mdi:school-outline",
//   //   heading: "font-semibold text-indigo-800",
//   //   pointer: "bg-indigo-700",
//   //   active: "bg-indigo-300 border-indigo-600 text-indigo-800",
//   //   activeIcon: "text-indigo-800",
//   //   iconBg: "bg-indigo-700",
//   //   apis: [
//   //     {
//   //       provider: "internal",
//   //       name: "Citizenship",
//   //       path: "/residency-and-citizenship/citizenship",
//   //     },
//   //     {
//   //       provider: "internal",
//   //       name: "Permanent Residency",
//   //       path: "/residency-and-citizenship/permanent-residency",
//   //     },
//   //     {
//   //       provider: "internal",
//   //       name: "Residency Obligations",
//   //       path: "/residency-and-citizenship/residency-obligations",
//   //     },
//   //   ],
//   // },
//   {
//     name: "Price Policy",
//     icon: "mdi:shield-lock-outline",
//     heading: "font-semibold text-gray-800",
//     pointer: "bg-gray-700",
//     active: "bg-gray-300 border-gray-600 text-gray-800",
//     activeIcon: "text-gray-800",
//     iconBg: "bg-gray-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "Price Policy",
//         path: "/price",
//       },
//     ],
//   },
//   {
//     name: "News",
//     icon: "mdi:file-document-outline",
//     heading: "font-semibold text-gray-800",
//     pointer: "bg-gray-700",
//     active: "bg-gray-300 border-gray-600 text-gray-800",
//     activeIcon: "text-gray-800",
//     iconBg: "bg-gray-700",
//     apis: [
//       {
//         provider: "internal",
//         name: "News",
//         path: "/news",
//       },
//     ],
//   },
// ];

// const router = [
// //   {
// //     path: "/",
// //     element: "Home",
// //   },
//   {
//     path: "About",
//     children: [
//       {
//         path: "/about",
//         element: "About",
//       },
//       {
//         path: "/our-service",
//         element: "Our Service",
//       },
//       {
//         path: "/certificate-membership",
//         element: "Certificate Membership",
//       },
//       {
//         path: "/customer-testimonials",
//         element: "Customer Testimonials",
//       },
//       {
//         path: "/book-appointment",
//         element: "Book Appointment",
//       },
//       {
//         path: "/why-choose-us",
//         element: "Why Choose Us",
//       },
//     ],
//   },

//   {
//     path: "Immigration",
//     children: [
//       {
//         path: "Express Entry",
//         element: `Express Entry`,
//         children: [
//           {
//             path: "/immigration/express-entry/federal-skilled-worker",
//             element: "Fedral Skilled Worker",
//           },
//           {
//             path: "/immigration/express-entry/federal-skilled-trade",
//             element: "Fedral Skilled Trade",
//           },
//           {
//             path: "/immigration/express-entry/canadian-experience-class",
//             element: "Canadian Experience Class",
//           },
//         ],
//       },
//       {
//         path: "Provincial Nominee Programs",
//         children: [
//           {
//             path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
//             element: "Alberta (AAIP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
//             element: "Atlantic Immigration (AIPP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",

//             element: "British Colombia (BC PNP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/ontario-oinp",
//             element: "Ontario (OINP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
//             element: "Manitoba (MPNP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
//             element: "New Brunswick (NBPNP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
//             element: "Newfoundland and Labrador",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
//             element: "Saskatchewan (SINP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/northwest-territories",
//             element: "Northwest Territories",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
//             element: "Nova Scotia (NSNP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
//             element: "Prince Edward Island (PEI PNP)",
//           },
//           {
//             path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
//             element: "Rural & Northern Immigration Pilot (RNIP)",
//           },

//           {
//             path: "/immigration/provincial-nominee-programs/yukon-ynp",
//             element: "Yukon (YNP)",
//           },
//         ],
//       },
//       {
//         path: "/immigration/immigration-challenges",
//         element: "Immigration Challenges",
//       },
//     ],
//   },
//   {
//     path: "Business",
//     children: [
//       {
//         path: "Quebec",
//         children: [
//           {
//             path: "/business/quebec/quebec-investor",
//             element: "Quebec Investor",
//           },
//           {
//             path: "/business/quebec/quebec-entrepreneur",
//             element: "Quebec Entrepreneur",
//           },
//           {
//             path: "/business/quebec/quebec-self-employed",
//             element: "Self Employed",
//           },
//         ],
//       },
//       {
//         path: "Federal Programs",
//         children: [
//           {
//             path: "/business/federal-programs/start-up-visa",
//             element: " Start-Up Visa (SUV)",
//           },
//           {
//             path: "/business/federal-programs/intra-company-transfer",
//             element: "Intra-company transfer (ICT)",
//           },
//           {
//             path: "/business/federal-programs/benefit-to-canada",
//             element: "Significant Benefit to Canada (C10)",
//           },
//           {
//             path: "/business/federal-programs/owner-operator",
//             element: "Owner Operator LMIA",
//           },
//           {
//             path: "/business/federal-programs/self-employed-persons",
//             element: "Self-Employed Persons (C11)",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "Work And Jobs",
//     children: [
//       {
//         path: "/work-and-jobs/work-permit",
//         element: "Work Permit",
//       },
//       {
//         path: "/work-and-jobs/international-mobility-program",
//         element: "International Mobility Program (IMP)",
//       },
//       {
//         path: "/work-and-jobs/in-demand-jobs",
//         element: "In Demand Jobs",
//       },
//       {
//         path: "/work-and-jobs/support-for-employers",
//         element: "Support For Employers",
//       },

//       {
//         path: "/work-and-jobs/lmia",
//         element: "LMIA",
//       },
//       // {
//       //   path: "/work-and-jobs/caregiver-program",
//       //   element: "Caregiver Program",
//       // },
//       {
//         path: "/work-and-jobs/teer-categories-and-noc",
//         element: "TEER Categories & NOC Codes",
//       },
//     ],
//   },
//   {
//     path: "Study",
//     children: [
//       {
//         path: "/study/post-graduate-work-permit",
//         element: "Post Graduate Work Permit (PGWP)",
//       },
//       {
//         path: "/study/study-in-canada",
//         element: "Study In Canada",
//       },
//       {
//         path: "/study/pathway-from-study-to-pr",
//         element: "Pathway From Study To PR",
//       },
//       {
//         path: "/study/designated-learning-institution",
//         element: "Designated Learning Institution (DLI)",
//       },
//       {
//         path: "/study/student-direct-stream",
//         element: "Student Direct Stream (SDS)",
//       },
//     ],
//   },
//   {
//     path: "Other-services",
//     element: "News",
//   },
// ];