import React from "react";
import { Check } from "lucide-react";
import { CountryConfig } from "@/constant/countries";
import Link from "next/link";

interface CountrySectionProps {
  country: CountryConfig;
  index: number;
}

const CountrySectionStudy: React.FC<CountrySectionProps> = ({
  country,
  index,
}) => {
  const isEven = index % 2 === 0;

  const ContentSection = () => (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8">{country.name}</h2>
      <p className="text-lg mb-10 leading-relaxed">{country.description}</p>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Quick facts</h3>
        <ul className="space-y-4">
          {country.facts.map((fact, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white text-green-500">
                <Check size={16} />
              </span>
              <span className="text-lg">{fact.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="https://zfrmz.in/aUYj5HvMhH1MXRTxD7J2"
        target="_blank"
        className="mt-10 px-8 py-3 rounded-md bg-white text-base font-medium
                   transition-all duration-300 hover:shadow-lg w-fit"
        style={{
          color:
            country.backgroundColor === "#fff1f2"
              ? "#dc2626"
              : country.backgroundColor === "#f0f9ff"
              ? "#2563eb"
              : country.backgroundColor === "#f0fdf4"
              ? "#16a34a"
              : "#ca8a04",
        }}
      >
        Enquire Now
      </Link>
    </div>
  );

  const ImagesSection = () => (
    <div className="lg:w-1/2">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 h-[300px] overflow-hidden rounded-xl shadow-md">
          <img
            src={country.images[0]}
            alt={`${country.name} - main image`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="col-span-2 h-[150px] overflow-hidden rounded-xl shadow-md">
          <img
            src={country.images[1]}
            alt={`${country.name} - image 2`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="col-span-2 h-[150px] overflow-hidden rounded-xl shadow-md">
          <img
            src={country.images[2]}
            alt={`${country.name} - image 3`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="col-span-2 h-[150px] overflow-hidden rounded-xl shadow-md">
          <img
            src={country.images[3]}
            alt={`${country.name} - image 4`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      style={{
        backgroundColor: country.backgroundColor,
        color: country.textColor,
      }}
      className="py-20 px-4 md:px-8 w-full transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {isEven ? (
            <>
              <ContentSection />
              <ImagesSection />
            </>
          ) : (
            <>
              <ImagesSection />
              <ContentSection />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountrySectionStudy;
