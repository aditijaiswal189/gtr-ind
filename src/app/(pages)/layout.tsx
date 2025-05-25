"use client";
import { Footer } from "@/components/ui/footer";
import { ReactNode } from "react";
import { HeaderHome } from "@/components/ui/header-home";
import { TopBar } from "@/components/ui/top-bar";

interface PageLayoutProps {
  children: ReactNode;
}
export default function AllPageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <div className="min-h-screen bg-white flex gap-12 flex-col">
        {/* <div> */}
        <TopBar />
        <HeaderHome />
        {/* </div> */}
        {children}
      </div>

      <Footer />
    </div>
  );
}
