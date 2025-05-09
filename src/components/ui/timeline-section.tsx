"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface TimelineItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export const TimelineSection: React.FC = () => {
  const items: TimelineItem[] = [
    {
        title: 'Immigration Experts',
        description: 'We have an expert team of immigration and business coordinators who are the backbone of making 1000s of successful visas.',
        icon: 'Plane',
      image: "/images/fea/a1.webp",
    },
    {
        title: 'Work and Jobs',
        description: 'We have an expert team of business coordinators who are the backbone of making 1000s of successful visas.',
        icon: 'FileText',
      image: "/images/fea/a2.webp",
    },
    {
     
        title: 'Study and Settle',
        description: 'We have an expert team of education coordinators who are the backbone of making 1000s of successful visas.',
        icon: 'Notebook',
      image: "/images/fea/a3.webp",
    },
    {
        
        title: 'Business',
        description: 'Immigration and Citizenship Consultants registered immigration consultancy that abides by Canadian immigration laws.',
        icon: 'Briefcase',
      image: "/images/fea/a4.webp",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-[var(--section-padding-y)] px-[var(--section-padding-x)] relative">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2" />

        <div className="space-y-24">
          {items.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ElementType;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-16 z-10">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Timeline Row */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Text Content */}
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "text-right pr-16" : "text-left pl-16"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-contain rounded-lg "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
