import React from "react";
import HeroSlider from "./hero-slider";
import HeroButtons from "./hero-button";

const HeroSectionNew: React.FC = () => {
  return (
    <section className="w-full min-h-[700px] flex flex-col md:flex-row relative overflow-hidden">
      {/* Left side - Hero Slider */}
      <div className="w-full md:w-[60%] h-[500px] md:h-auto relative">
        <HeroSlider />
        {/* Angled cut overlay */}
        <div
          className="absolute top-0 right-0 h-full w-32 hidden md:block"
          style={{
            background:
              "linear-gradient(95deg, transparent 0%, transparent 45%, #F9FAFB 40.1%)",
            zIndex: 20,
          }}
        ></div>
      </div>

      {/* Right side - Hero Content with Buttons */}
      <div className="w-full md:w-[40%] bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              GreenTech Resources Worldwide Canada
            </h1>
            <p className="text-sm    text-gray-600">
              We are a Canadian company with a global reach, dedicated to
              providing top-notch services to our clients. Our team of experts
              is here to assist you in navigating the complexities.
            </p>
          </div>
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
