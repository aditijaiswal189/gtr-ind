// components/HorizontalCard.tsx
"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

export type CardColor = "red" | "blue" | "green" | "yellow";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string; // ← optional URL
  openInNewTab?: boolean; // ← optional new-tab flag
}

interface CardProps {
  title: string;
  description: string;
  features: Feature[]; // ← use our updated Feature
  icon: React.ReactNode;
  imageUrl: string;
  imagePosition: "left" | "right";
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
      background: "bg-red-100",
      icon: "bg-primary-red",
      text: "text-primary-red",
      border: "border-primary-red",
      featureText: "text-primary-red",
    },
    blue: {
      background: "bg-blue-100",
      icon: "bg-primary-blue",
      text: "text-primary-blue",
      border: "border-primary-blue",
      featureText: "text-primary-blue",
    },
    green: {
      background: "bg-green-100",
      icon: "bg-primary-green",
      text: "text-primary-green",
      border: "border-primary-green",
      featureText: "text-primary-green",
    },
    yellow: {
      background: "bg-primary/10",
      icon: "bg-primary",
      text: "text-primary",
      border: "border-primary",
      featureText: "text-primary",
    },
  } as const;

  const {
    background,
    icon: iconBg,
    text,
    border,
    featureText,
  } = colorMap[color];

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-lg",
        background
      )}
    >
      {/* Image + Content */}
      <div
        className={clsx(
          "flex flex-col md:flex-row",
          imagePosition === "right" && "md:flex-row-reverse"
        )}
      >
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div
                className={clsx(
                  "inline-flex items-center justify-center p-3 rounded-full",
                  iconBg
                )}
              >
                {icon}
              </div>
            </div>
            <h3 className={clsx("text-2xl font-bold mb-3", text)}>{title}</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {description}
            </p>

            {/* → Here’s the change: */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {features.map((feat, i) => {
                const card = (
                  <div
                    key={i}
                    className="bg-card p-4 h-full rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    <div
                      className={clsx("mb-2 flex justify-center", featureText)}
                    >
                      {feat.icon}
                    </div>
                    <h4
                      className={clsx(
                        "text-sm font-semibold mb-1",
                        featureText
                      )}
                    >
                      {feat.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {feat.description}
                    </p>
                  </div>
                );

                // if there's no href, just render the card
                if (!feat.href) return card;

                // otherwise wrap it in next/link
                return (
                  <Link
                    key={i}
                    href={feat.href}
                    {...(feat.openInNewTab
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {card}
                  </Link>
                );
              })}
            </div>

            <div className={clsx("w-16 h-1 mx-auto", border)} />
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div
        className={clsx(
          "absolute w-12 h-12 opacity-50",
          border,
          imagePosition === "right"
            ? "left-0 top-0 border-l-4 border-t-4"
            : "right-0 top-0 border-r-4 border-t-4"
        )}
      />
    </div>
  );
};
