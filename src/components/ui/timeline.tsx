import React from "react";
import TimelineItem from "./timeline-item";
import { SectionHeader } from "./section-header";

interface TimelineData {
  id: string;
  title: string;
  content: string;
  icon: string;
  imageUrl: string;
}

const items: TimelineData[] = [
  {
    id: "long-standing",
    title: "Immigration Experts",
    content:
      "We have an expert team of immigration and business coordinators who are the backbone of making 1000s of successful visas.",
    icon: "Plane",
    imageUrl: "/images/fea/a1.webp",
    // imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: "success-stories",
    title: "Work and Jobs",
    content:
      "We have an expert team of business coordinators who are the backbone of making 1000s of successful visas.",
    icon: "FileText",
    imageUrl: "/images/fea/a2.webp",
    // imageUrl: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: "professional-service",
    title: "Study and Settle",
    content:
      "We have an expert team of education coordinators who are the backbone of making 1000s of successful visas.",
    icon: "Notebook",
    imageUrl: "/images/fea/a3.webp",
    // imageUrl: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: "we-are-registered",
    title: "Business",
    content:
      "Immigration and Citizenship Consultants registered immigration consultancy that abides by Canadian immigration laws.",
    icon: "Briefcase",
    imageUrl: "/images/fea/a4.png",
    // imageUrl: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative w-full bg-background text-foreground pt-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <SectionHeader
        title="Our Services"
        subtitle="Services we offer to our clients"
      />
      <div className="max-w-6xl mx-auto">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
            imageUrl={item.imageUrl}
            isEven={index % 2 === 0}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
