"use client";
import React, { useEffect, useRef, useState } from "react";
import CountrySectionStudy from "./country-section-study";
import { countriesConfig } from "@/constant/countries";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CountriesSectionStudy: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [activeCountry, setActiveCountry] = useState("");
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();

      const resizeObserver = new ResizeObserver(updateScrollButtons);
      resizeObserver.observe(scrollContainer);

      // Set initial active country based on URL hash
      const hash = window.location.hash.slice(1);
      if (hash) setActiveCountry(hash);

      // Listen for hash changes
      const handleHashChange = () => {
        const newHash = window.location.hash.slice(1);
        setActiveCountry(newHash);
      };
      window.addEventListener("hashchange", handleHashChange);

      return () => {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("hashchange", handleHashChange);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    const targetPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div id="first-section" className="countries-section">
      {/* <div className="bg-white py-2 sticky top-14 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 flex overflow-x-auto  whitespace-nowrap">
          {countriesConfig.map((country) => (
            <a
              key={country.id}
              href={`#${country.id}`}
              className="px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md mr-2 transition-colors"
            >
              {country.name}
            </a>
          ))}
        </div>
      </div> */}
      <div className="bg-white py-1 sticky top-14 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 relative">
          {showLeftScroll && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 h-8 w-8 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {showRightScroll && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 h-8 w-8 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {showLeftScroll && (
            <div className="absolute left-4 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          )}

          {showRightScroll && (
            <div className="absolute right-4 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
          )}

          <div
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto scrollbar-hide py-3 px-4 gap-2 no-scrollbar scroll-smooth"
          >
            {countriesConfig.map((country) => (
              <a
                key={country.id}
                href={`#${country.id}`}
                className={`
                  px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200
                  flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    activeCountry === country.id
                      ? "bg-primary/10 text-primary border border-primary/10 hover:bg-primary/10"
                      : "text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {country.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>

      {countriesConfig.map((country, index) => (
        <div id={country.id} key={country.id}>
          <CountrySectionStudy country={country} index={index} />
        </div>
      ))}
    </div>
  );
};

export default CountriesSectionStudy;
