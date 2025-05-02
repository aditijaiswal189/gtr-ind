"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";


const Header: React.FC = () => {
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
            <img src="logo3.png" alt="Logo" className="h-10 w-auto mx-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" isActive>
              About us
            </Link>
            <Link href="/about">Immigration</Link>
            <Link href="/services">Business</Link>
            <Link href="/visa">Work and Jobs</Link>
            <Link href="/blog">Study</Link>
            <Link href="/contact">Other services</Link>
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

const Link: React.FC<LinkProps> = ({ href, children, isActive }) => {
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

export default Header;
// "use client"
// import {
//     DropdownMenu,
//     DropdownMenuTrigger,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuSub,
//     DropdownMenuPortal,
//     DropdownMenuSubContent,
//     DropdownMenuSeparator,
//     DropdownMenuGroup,
//   } from "@/components/ui/dropdown-menu"
// import { DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu";
// import { ChevronRight, Search } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button } from "./button";

// interface LinkProps {
//   href: string;
//   children: React.ReactNode;
// }

// const Link: React.FC<LinkProps> = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="font-medium text-foreground hover:text-primary transition-colors"
//     >
//       {children}
//     </a>
//   );
// };
  
//   const Header: React.FC = () => {
   
//       const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//     return (
//       <header
//         className={`fixed w-full z-50 transition-all duration-300 text-foreground ${
//           isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
//         }`}
//       >
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img src="logo3.png" alt="Logo" className="h-10 w-auto mx-auto" />
//             </div>
  
//             <nav className="hidden md:flex space-x-8">
//               <Link href="/">About us</Link>
  
//               {/* Dropdown for Immigration */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="font-medium text-foreground hover:text-primary transition-colors">
//                     Immigration
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Canada PR</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Express Entry</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">PNP</a>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>


//               {/* business */}
//               <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Business</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuGroup>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>
//               <span className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex justify-between items-center">
//               Federal Programs
//                 <ChevronRight className="ml-2 h-4 w-4 opacity-50" />
//               </span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Start-Up Visa (SUV)
// </DropdownMenuItem>
//                 <DropdownMenuItem>Intra-company transfer (ICT)
// </DropdownMenuItem>
                
//                 <DropdownMenuItem>Significant Benefit to Canada (C10)
// </DropdownMenuItem>
//                 <DropdownMenuItem>Self-Employed Persons (C11)
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>Owner Operator LMIA</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//             <DropdownMenuSubTrigger>
//             <span className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex justify-between items-center">
//                Provincial Business Programs
//                 <ChevronRight className="ml-2 h-4 w-4 opacity-50" />
//               </span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Email</DropdownMenuItem>
//                 <DropdownMenuItem>Message</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>More...</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//             <DropdownMenuSubTrigger>
//             <span className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex justify-between items-center">
//             Quebec
//                 <ChevronRight className="ml-2 h-4 w-4 opacity-50" />
//               </span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>

//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Québec Investor

// </DropdownMenuItem>
//                 <DropdownMenuItem>Québec Entrepreneur Program
//                 </DropdownMenuItem>
              
//                 <DropdownMenuItem>Québec Self-Employed.</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>


//               {/* work & jobs */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="font-medium text-foreground hover:text-primary transition-colors">
//                    Work & Jobs
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Work Permit
// </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">International Mobility Program (IMP)

// </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">In demand jobs</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">For Employers
// </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">LMIA
//                     </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">TEER Categories & NOC Codes</a>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
  
          
             
//             {/* study */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="font-medium text-foreground hover:text-primary transition-colors">
//                     Study
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem asChild>
//                     <a href="/"> Study in Canada</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Post Graduate WP</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Study to PR</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Designated Learning Institution (DLI)</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Student Direct Stream (SDS)</a>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
             

//               {/* Dropdown for Other Services */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="font-medium text-foreground hover:text-primary transition-colors">
//                     Other Services
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem asChild>
//                     <a href="/"> Visitor</a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">Family Sponsorship
// </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">News
// </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/">LMIA Map
//                    </a>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <a href="/"> Jobs Map</a>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </nav>
  
//             <div className="flex items-center space-x-4">
//               <button className="px-6 py-2 rounded-full font-medium bg-primary text-primary-foreground transition-colors duration-300">
//                 Book a Consultation
//               </button>
//               <button className="text-muted-foreground hover:text-primary transition-colors">
//                 <Search size={20} />
//               </button>
//             </div>
  
//             <button className="md:hidden text-foreground">
//               {/* Mobile menu icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>
//     );
//   };
// export default Header;