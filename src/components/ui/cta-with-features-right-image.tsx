"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SectionHeaderWithDescription } from "./section-header-with-description";

interface FeatureItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon: Icon = ArrowRight,
}) => (
  <div className="flex">
    <div className="mr-4">
      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary/10">
        <Icon className="w-6 h-6 text-[var(--primary)]" />
      </div>
    </div>
    <div>
      <h6 className="mb-2 font-semibold leading-5 text-[var(--foreground)]">
        {title}
      </h6>
      <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
      <hr className="w-full my-6 border-[var(--border)]" />
    </div>
  </div>
);

interface CtaWithFeaturesRightImageProps {
  badgeText?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  features: Feature[];
  images?: string[]; // optional override
}

export const CtaWithFeaturesRightImage: React.FC<
  CtaWithFeaturesRightImageProps
> = ({
  badgeText,
  title,
  subtitle,
  features,
  images = [
    "/images/n/businesshome1.png",
    "/images/n/studyincanada.png",
    "/images/n/familysponsor.png",
  ],
}) => {
  return (
    <div className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <SectionHeaderWithDescription
        badgeText={badgeText}
        title={title}
        subtitle={subtitle}
      />

      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} />
          ))}
        </div>

        <div className="py-8 grid grid-cols-2 gap-2">
          <img
            className="object-cover w-full h-80 col-span-2 rounded shadow-lg"
            src={images[0]}
            alt=""
          />
          <img
            className="object-cover w-full h-76 rounded shadow-lg"
            src={images[1]}
            alt=""
          />
          <img
            className="object-cover w-full h-76 rounded shadow-lg"
            src={images[2]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
