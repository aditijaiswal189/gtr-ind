"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plane } from "lucide-react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded shadow-sm overflow-hidden">
      <button
        type="button"
        aria-label="Toggle"
        className="flex items-center justify-between w-full p-4 bg-card hover:bg-muted transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-foreground">{title}</p>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-muted">
          <p className="text-muted-foreground">{children}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ2: React.FC = () => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div className="flex flex-col mb-16 sm:text-center">
        <a href="/" className="mb-6 sm:mx-auto">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <Plane className="w-8 h-8 text-primary" />
          </div>
        </a>
        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-foreground sm:text-4xl md:mx-auto">
            The quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <Item title="The quick, brown fox jumps over a lazy dog?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="The first mate and his Skipper too will do?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="Is the Space Pope reptilian!?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="How much money you got on you?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
      </div>
    </div>
  </div>
);
