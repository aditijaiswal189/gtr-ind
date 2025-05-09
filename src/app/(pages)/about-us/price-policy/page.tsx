import { Hero2 } from '@/components/ui/hero2';
import React from 'react';

 const PricePolicy: React.FC = () => {
    return (
       <div>
               <Hero2 badgeText='GreenTech Resources' title='Price Policy' description='GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan.' imageUrl='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' primaryCta={{ label: "Why choose us?", href: "/" }} secondaryCta={{ label: "Learn More", href: "/" }}/>
               </div>
    );
};

export default PricePolicy;