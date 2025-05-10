import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, href }) => (
  <Link
    href={href}
    className="
      group
      relative block p-px overflow-hidden
      border rounded-lg shadow-sm
      transition-transform duration-300 transform
      hover:scale-105 hover:shadow-lg
    "
  >
    {/* animated “frame” lines */}
    <div
      className="
        absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0
        transition-transform duration-300
        bg-[var(--accent)]
        group-hover:scale-x-100
      "
    />
    <div
      className="
        absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0
        transition-transform duration-300
        bg-[var(--accent)]
        group-hover:scale-y-100
      "
    />
    <div
      className="
        absolute inset-x-0 top-0 h-1 origin-right scale-x-0
        transition-transform duration-300
        bg-[var(--accent)]
        group-hover:scale-x-100
      "
    />
    <div
      className="
        absolute inset-y-0 right-0 w-1 origin-top scale-y-0
        transition-transform duration-300
        bg-[var(--accent)]
        group-hover:scale-y-100
      "
    />

    {/* card content */}
    <div className="relative flex items-center justify-between p-6 bg-card rounded-sm">
      <div>
        <h6 className="mb-2 text-lg font-semibold text-primary">
          {title}
        </h6>
        <p className="text-sm text-[var(--muted-foreground)]">
          {description}
        </p>
      </div>
      <ArrowRight
        className="
          w-5 h-5 stroke-[var(--card-foreground)]
          transition-colors duration-300
          group-hover:stroke-[var(--accent)]
        "
      />
    </div>
  </Link>
);

interface Feature2ForTitleProps {
  cards: CardProps[];
}

export const Feature2ForTitle: React.FC<Feature2ForTitleProps> = ({ cards }) => (
    <section
      className="
        px-[var(--section-padding-x)] py-[var(--section-padding-y)]
        mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
        md:px-24 lg:px-8 lg:py-20
      "
    >
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2">
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </section>
  );
