import React from "react";

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface ImageWithCardsProps {
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  heading: string;
  subheading: string;
  label: string;
  cards: Card[];
}

const ImageWithCards: React.FC<ImageWithCardsProps> = ({
  imageUrl,
  imageAlt = "Section image",
  imagePosition = "left",
  heading,
  subheading,
  label,
  cards,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-20 bg-background text-foreground">
      <div
        className={`container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 ${
          isImageLeft ? "" : "lg:flex-row-reverse"
        }`}
      >
        
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>

        <div className="lg:w-1/2">
          <div className="mb-8">
            <span className="text-primary font-semibold">{label}</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">{heading}</h2>
            <h3 className="text-3xl font-bold mb-6">{subheading}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithCards;
