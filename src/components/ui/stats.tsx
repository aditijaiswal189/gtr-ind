"use client";
import React from "react";
import CountUp from "react-countup";
import { FileText, Users, Star, User } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  bgColor: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  suffix = "",
  bgColor,
}) => (
  <div
    className={`${bgColor} rounded-2xl p-6 transition-transform hover:scale-105`}
  >
    <div className="flex items-start gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-3xl font-bold text-muted-foreground mb-1">
          <CountUp
            end={value}
            duration={2.5}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  </div>
);

export const Stats = () => {
  const stats = [
    {
      icon: <Star size={24} />,
      value: 95,
      label: "Happy clients",
      suffix: " %",
      bgColor: "bg-green-100",
    },
    {
      icon: <FileText size={24} />,
      value: 100,
      label: "Successful Visas",
      suffix: "+",
      bgColor: "bg-primary/10 ",
    },

    {
      icon: <Users size={24} />,
      value: 14,
      label: "Start Up Visa",
      suffix: "+",
      bgColor: "bg-blue-100",
    },

    {
      icon: <User size={24} />,
      value: 1,
      label: "Consultants in Saskatchewan",
      prefix: "Top ",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};
