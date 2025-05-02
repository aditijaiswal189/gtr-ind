"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] bg-gray-900 overflow-hidden text-[var(--primary-foreground)]">
      {/* Diagonal stripes background */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]" />

      {/* Red diagonal accent */}
      <motion.div
        className="absolute -top-40 -right-20 w-[400px] h-[800px] bg-[var(--primary)] opacity-90"
        initial={{ x: 400, y: -400 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* White overlay accent */}
      <motion.div
        className="absolute -top-40 -right-20 w-[400px] h-[800px] bg-white opacity-10"
        initial={{ x: 400, y: -400 }}
        animate={{ x: 50, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)" }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-md mb-10 bg-[var(--primary)] text-[var(--primary-foreground)]"
        >
          <p className="text-sm font-bold tracking-wider uppercase">
            Recruitment | Immigration | Settlement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Business In<br />Canada...
          </h1>

          <p className="text-lg max-w-2xl text-[var(--muted-foreground)]">
            C11, Start Up Visa, PNP Entrepreneur minimum investment of $100K
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md font-semibold text-lg transition-colors bg-[var(--primary)] text-[var(--primary-foreground)]"
            >
              Call Us: +1 855 477 9797
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border rounded-md font-semibold text-lg transition-colors border-white border-opacity-30 text-[var(--primary-foreground)] bg-transparent"
            >
              Book An Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
