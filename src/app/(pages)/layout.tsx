import { Footer } from "@/components/ui/footer";
import { ReactNode } from "react";
import { HeaderHome } from '@/components/ui/header-home';

interface PageLayoutProps {
    children: ReactNode;
  }
  export default function AllPageLayout({ children }: PageLayoutProps) {
    return (
      <div 
       
      >
        <div className="min-h-screen bg-white flex gap-12 flex-col">
        <HeaderHome/>
        {children}
        </div>
      
        <Footer />
      </div>
    );
  }