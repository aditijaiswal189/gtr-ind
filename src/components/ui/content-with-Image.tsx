"use client";
import React from "react";

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
  buttonLabel?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  image,
  buttonLabel = "Read more",
}) => {
  return (
    <div className="transition duration-300 transform bg-card rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/30 rounded-t" />
      </div>
      <div className="px-6 py-8 border border-t-0 border-border rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none text-foreground sm:text-2xl">
          {title}
        </h5>
        <p className="mb-5 text-muted-foreground">{description}</p>
        <button
          type="button"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-foreground bg-primary rounded shadow hover:bg-primary/90 transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export const ContentWithImage: React.FC = () => {
  const cards = [
    {
      title: "Join Team",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.",
      image:
        "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Hire Us",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 row-gap-8 sm:mx-auto lg:grid-cols-2">
        {cards.map((card, idx) => (
          <ImageCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};
