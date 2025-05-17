// "use client";

// import React, { useState, useEffect } from "react";
// import { MegaMenuBar } from "./mega-menu-bar";

// export const HeaderHome: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 text-foreground ${
//         isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src="/logo3.png" alt="Logo" className="h-10 w-auto mx-auto" />
//           </div>

//           <MegaMenuBar />

//           <div className="flex items-center space-x-4">
//             <button className="px-6 py-2 rounded-full font-medium bg-primary-green text-primary-foreground transition-colors duration-300">
//               Book a Consultation
//             </button>

//             {/* <button className="text-muted-foreground hover:text-primary transition-colors">
//               <Search size={20} />
//             </button> */}
//           </div>

//           <button className="md:hidden text-foreground">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// components/HeaderHome.tsx
"use client";
import React, { useState, useEffect } from "react";
import { MegaMenuBar } from "./mega-menu-bar";
import Link from "next/link";

export const HeaderHome: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed w-full z-40
        top-0 md:top-[56px]
        transition-all duration-300
        ${isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"}
      `}
    >
      <div className="container mx-auto  px-2 md:px-2 flex items-center justify-between">
        {/* <img src="/logo3.png" alt="Logo" className="h-10 w-auto" /> */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo3.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <MegaMenuBar />

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-full font-medium bg-primary text-primary-foreground transition-colors duration-300">
            Book a Consultation
          </button>

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
