"use client";
import { useState } from "react";
import { MapView } from "./map-view";
import { LocationCard } from "./location-card";
import { locations } from "@/constant/location";

export const LocationSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="relative h-[400px]"
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <div className="absolute inset-0 z-10">
              <MapView location={location} />
            </div>
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                hoveredLocation === location.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <LocationCard
                location={location}
                isHovered={hoveredLocation === location.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates: [number, number];
}
