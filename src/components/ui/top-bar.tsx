// "use client";
// import React from "react";

// import {
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
// } from "lucide-react";
// import Link from "next/link";

// export function TopBar() {
//   return (
//     <div className="bg-foreground py-2 px-4 md:px-8 hidden md:block">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center text-muted-foreground text-sm">
//             <Mail className="mr-2 text-muted-foreground" />
//             <span>info@example.com</span>
//           </div>
//           <div className="flex items-center text-muted-foreground text-sm">
//             <MapPin className="mr-2 text-muted-foreground" />
//             <span>55 Main Street, 2nd block, Malborne, Australia</span>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
//             <Link
//               key={i}
//               href="#"
//               className="text-muted-foreground hover:text-foreground transition-colors duration-200"
//               aria-label={Icon.name}
//             >
//               <Icon />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// components/TopBar.tsx
"use client";
import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function TopBar() {
  return (
    <div
      className="
        hidden md:flex items-center justify-between
        bg-white py-2 px-6  md:px-10
        sticky top-0 left-0 w-full z-50
      "
    >
      <div className="flex items-center space-x-6 text-black text-sm">
        <Mail className="ml-5 mr-2" />
        <span>info@gtrworldwide.com</span>

        {/* <MapPin className="ml-8 mr-2" />
        <span>55 Main Street, 2nd block, Malborne, Australia</span> */}
      </div>
      <div className="flex items-center space-x-4  text-white">
        <img src="/images/logo2.webp" className="w-35 h-10" />
        <img
          src="/images/rciclogo.webp"
          className="w-30
         h-10"
        />
        {[IconBrandWhatsapp].map((Icon, i) => (
          <Link
            key={i}
            target="_blank"
            href="https://api.whatsapp.com/send?phone=16476197975"
            aria-label={Icon.name}
            className="hover:text-foreground bg-primary-green p-2  ml-4 mr-5 rounded-2xl transition-colors duration-200"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
}
