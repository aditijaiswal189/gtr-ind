import { motion } from "framer-motion";

interface LocationCardProps {
  location: Location;
  isHovered: boolean;
}

export const LocationCard = ({ location, isHovered }: LocationCardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${
        isHovered ? "scale-105" : ""
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
      <div className="space-y-2">
        <p className="text-gray-600">
          {location.address}, {location.city}
        </p>
        <p className="text-gray-600">{location.country}</p>
        <p className="text-gray-600">{location.phone}</p>
        <p className="text-gray-600">{location.email}</p>
      </div>
    </motion.div>
  );
};
