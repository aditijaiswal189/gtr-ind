import { Hero2 } from '@/components/ui/hero2';
import { ImageCardReversible } from '@/components/ui/image-card-reversible';
import React from 'react';


const members = [
  {
      name: 'Change Management Certificate',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
     image: "/images/cer1.jpg",
  },
  {
      name: 'Canadian Risk Management Certification',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
   
    image: "/images/cer2.jpg"
  },
  {
      name: 'Six Sigma Green Belt Certification',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
      image: "/images/cer3.jpg"
   
 
  },
  {
      name: 'Lean Management Certification',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
      image: "/images/cer4.jpg"
      
  },
  {
      name: 'ISM CPSM Certification',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
  image: "/images/cer5.jpg"
     
  },
  {
      name: 'SCMP – Manoj Goswami Certificate',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
    image: "/images/cer6.jpg"
  }, 
  {
      name: 'Risk Management',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
     image: "/images/cer7.jpg"
   
  
  },
  {
    name:'Project Management',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
     image: "/images/cer8.jpg"
    
  },
  {
      name: 'Saskatchewan Institute of Agrology',
    role: ' CEO of GreenTech Resource',
    description: 'Manoj Goswami',
    image: "/images/cer9.jpg"
  },
];
 const CertificateMembership: React.FC = () => {
    return (
      <div  className="min-h-screen bg-white flex gap-12 flex-col">
              <Hero2 badgeText='GreenTech Resources' title='Certificate and Membership' description='GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan.' imageUrl='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' primaryCta={{ label: "Why choose us?", href: "/" }} secondaryCta={{ label: "Learn More", href: "/" }}/>
              <ImageCardReversible members={members}/>
              </div>
    );
};

export default CertificateMembership