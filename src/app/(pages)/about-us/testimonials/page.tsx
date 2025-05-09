import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { CtaWithFeaturesRightImage } from '@/components/ui/cta-with-features-right-image';
import { Hero2 } from '@/components/ui/hero2';
import React from 'react';
import { features } from '../about/page';

const testimonials = [
   {
     quote:
       "Work with GreenTech Resources Worldwide Canada is the best decision that i could took. They helped me with all the process until i got my Pr approved a couple of days ago, me and all my family are so grateful with them. I know that all this process could be scary but they are the best option.",
     name: "Viky Diaz",
     designation: "Customer",
     src: "/images/customers/cu6.webp",
   },
   {
     quote:
       "Thank you for your excellent service. The team is extremely professional and supportive on every step from documentation to PR processing. after I arrived in Regina SK I met a lot of people who used your consultancy service. your consultancy service is highly rated. during this, I had a wonderful experience with your team all are efficient. I highly recommend GreenTech to my friends who are looking for an excellent immigration consultant",
     name: "Shaijeev Muthappan",
     designation: "CTO at InnovateSphere",
     src: "/images/customers/cu5.webp",
   },
   {
     quote:
       "My experience with GreenTech Resources Worldwide Canada is absolutely wonderful. Thank you Mr Manoj and team for your excellent service. I would recommend GreenTech to everyone those who need help with visas.",
     name: "Renela Kondapalli",
     designation: "CTO at InnovateSphere",
     src: "/images/customers/cu2.webp",
   },
   {
     quote:
       " Their team of consultants possesses an indepth understanding of immigration regulations, policies, and procedures, which immediately put my mind at ease. They provided invaluable insights and strategic advice that proved instrumental in making informed decisions. One of the standout qualities of is their personalized approach. The level of individual attention ensured that the solutions they offered were tailor-made to align perfectly with my goals.",
     name: "Ch.Divya Teja",
     designation: "Valuable Customer",
     src: "/images/customers/cu4.webp",
   },
   {
     quote:
       "Superb experience!! I am very grateful for all the hard work GTR Immigration did on my file .I strongly recommend GTR Immigration to all because they are helpful, professional and their work is very detailed. I really like that client satisfaction is most important thing for them . Thank you for bringing me and family to Canada!! Really love your service !!! Aaron",
     name: "Nee Nay",
     designation: "Engineering Lead at DataPro",
     src: "/images/customers/cu2.webp",
   },
   {
     quote:
       "I would like to thank manoj and his staff for helping me out throughout my permanent residence journey. Their staff were really helpful and professionally handled the process. I would recommend everyone needing any professional immigration services to reach out to these folks as they know what they are doing. Thanks again guys.",
     name: "Almon Sharma",
     designation: "VP of Technology at FutureNet",
     src: "/images/customers/cu1.webp",
   },
 ];
 const Testimonials: React.FC = () => {
    return (
       <div  className="min-h-screen bg-white flex gap-12 flex-col">
         <>
               <Hero2 badgeText='GreenTech Resources' title='Testimonials' description='GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan.' imageUrl='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' primaryCta={{ label: "Why choose us?", href: "/" }} secondaryCta={{ label: "Learn More", href: "/" }}/>
 <AnimatedTestimonials testimonials={testimonials} />
 <CtaWithFeaturesRightImage
       badgeText="About Us"
       title=" GreenTech Resource Worldwide Canada"
       subtitle=""
       features={features}
     />
 </>
              
               </div>
    );
};

export default Testimonials;
