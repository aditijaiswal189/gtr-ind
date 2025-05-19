"use client";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
// import { TopBar } from "./top-bar";
// import { MainNav } from "./navbar-main";

import Link from "next/link";
// import { getCachedData } from "../custom";

import { ChevronRight } from "lucide-react";
import { HeaderHome } from "@/components/ui/header-home";
import { TopBar } from "@/components/ui/top-bar";

export default function HeroNav() {
  const path = usePathname();
  const lastPath = path.split("/").pop();
  // const cachedData = getCachedData(lastPath || "");
  // const text = typeof cachedData === "object" && cachedData !== null ? cachedData.text : "";
  // const img = typeof cachedData === "object" && cachedData !== null ? cachedData.image || "/gt-removebg.png" : "/gt-removebg.png";
  return (
    <section className="relative w-full h-[75vh]">
      <header className="w-full">
        <TopBar />
        <HeaderHome />
      </header>
      <div className="relative overflow-hidden h-full flex justify-center items-center">
        <div className="w-full h-full ">
          <div className="relative h-full bg-black px-6 py-16 lg:px-12 xl:px-16 flex justify-center items-center">
            <div
              className="absolute h-full top-0 left-0 w-full inset-0 opacity-40 background-position-center bg-cover"
              // style={{ backgroundImage: `url(${img})` }}
            />

            <div
              className="text-white  text-center relative w-[70%] mx-auto leading-[60px]  text-[60px] font-bold"
              // dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full py-1 bottom-[-111px] px-12 flex justify-start items-center gap-2 cursor-pointer">
        <Link
          // to={"/"}
          href={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          HOME
        </Link>
        <ChevronRight className="text-white/60 -mt-0.5" />
        <span className="text-white relative  font-bold uppercase font-primary tracking-widest">
          {lastPath}
        </span>
      </div>
    </section>
  );
}
