import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export type CardColor = 'red' | 'blue' | 'green' | 'yellow';

interface CardProps {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  icon: React.ReactNode;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  color: CardColor;
}

export const HorizontalCard: React.FC<CardProps> = ({
  title,
  description,
  features,
  icon,
  imageUrl,
  imagePosition,
  color,
}) => {
  const colorMap = {
    red: {
      background: 'bg-primary-red/10',
      icon: 'bg-primary-red',
      text: 'text-primary-red',
      border: 'border-primary-red',
      featureText: 'text-primary-red',
    },
    blue: {
      background: 'bg-primary-blue/10',
      icon: 'bg-primary-blue',
      text: 'text-primary-blue',
      border: 'border-primary-blue',
      featureText: 'text-primary-blue',
    },
    green: {
      background: 'bg-primary-green/10',
      icon: 'bg-primary-green',
      text: 'text-primary-green',
      border: 'border-primary-green',
      featureText: 'text-primary-green',
    },
    yellow: {
      background: 'bg-primary-yellow/10',
      icon: 'bg-primary-yellow',
      text: 'text-primary-yellow',
      border: 'border-primary-yellow',
      featureText: 'text-primary-yellow',
    },
  };

  const { background, icon: iconBg, text, border, featureText } = colorMap[color];

  return (
    <div className={clsx("relative overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-lg", background)}>
      <div className={clsx("flex flex-col md:flex-row", imagePosition === 'right' && 'md:flex-row-reverse')}>
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className={clsx("inline-flex items-center justify-center p-3 rounded-full", iconBg)}>
                {icon}
              </div>
            </div>
            <h3 className={clsx("text-2xl font-bold mb-3", text)}>{title}</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">{description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={clsx("mb-2 flex justify-center", featureText)}>{feature.icon}</div>
                  <h4 className={clsx("text-sm font-semibold mb-1", featureText)}>{feature.title}</h4>
                  <p className="text-muted-foreground text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className={clsx("w-16 h-1 mx-auto", border)}></div>
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className={clsx(
        "absolute w-12 h-12 opacity-50",
        border,
        imagePosition === 'right'
          ? 'left-0 top-0 border-l-4 border-t-4'
          : 'right-0 top-0 border-r-4 border-t-4'
      )}></div>
    </div>
  );
};


