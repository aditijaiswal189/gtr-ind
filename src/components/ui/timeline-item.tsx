"use client";
import React, { useRef, useEffect, useState } from 'react';
import * as Icons from 'lucide-react';

interface TimelineItemProps {
  title: string;
  content: string;
  icon: string;
  imageUrl: string;
  isEven: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  content,
  icon,
  imageUrl,
  isEven,
  delay
}) => {
  const Icon = (Icons[icon as keyof typeof Icons] || Icons.HelpCircle) as React.ElementType;
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.02,
        rootMargin: '-100px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  const animationClass = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-20';

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col w-full mb-16 md:mb-24 transition-all duration-1000 ease-out ${animationClass}`}
    >
      <div className="flex flex-col md:flex-row w-full items-center">
        {/* Content section */}
        <div className={`w-full md:w-1/2 px-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className={`flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-4`}>
            <div className="flex w-10 h-10 rounded-full items-center justify-center text-white shadow-lg bg-primary-red">
              <Icon className="text-white w-6 h-6" />
            </div>
          </div>
          <div className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground">{content}</p>
          </div>
        </div>

        {/* Image section */}
        <div className={`w-full md:w-1/2 px-4 mt-6 md:mt-0 flex ${isEven ? 'md:order-1 justify-end' : 'md:order-2 justify-start'}`}>
  <div className="relative w-full max-w-md h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg bg-primary-red/10">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-primary-red/20 mix-blend-multiply"></div>
  </div>
</div>
        {/* <div className={`w-full md:w-1/2 px-4 mt-6 md:mt-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-primary-red/10">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-primary-red/20 mix-blend-multiply"></div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TimelineItem;
