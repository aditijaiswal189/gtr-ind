import { features } from '@/app/(pages)/about-us/about/about/page';
import { CtaWithFeaturesRightImage } from '@/components/ui/cta-with-features-right-image';
import { Hero2 } from '@/components/ui/hero2';
import React from 'react';

const SignificantBenefitToCanada: React.FC = () => {
    return (
          <div className="min-h-screen bg-white flex gap-12 flex-col">
                        <Hero2 badgeText='GreenTech Resources' title='' description='' imageUrl='/images/hero/m.avif' primaryCta={{ label: "", href: "/" }} secondaryCta={{ label: "Learn More", href: "/" }}/>
                       
                
                
                
               
                <CtaWithFeaturesRightImage
                      badgeText="About Us"
                      title=" GreenTech Resource Worldwide Canada"
                      subtitle=""
                      features={features}
                    />
               
                        </div>
    );
};

export default SignificantBenefitToCanada