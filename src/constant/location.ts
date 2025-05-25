"use client"

import { Location } from "@/components/ui/location-section"

// import { Location } from "../types/location"

export const locations: Location[] = [
  {
    id: "1",
    name: "Vietnam Office",
    address: " 7th Floor, 85 Nguyen Huu Cau, Tan Dinh Ward, District 1",
    city: "Ho Chi Minh City",
    country: "Việt Nam",
    phone: "+84 86996 7809",
    email: "tuvan@icanpr.vn",
    coordinates: [10.7873, 106.7019], // Ho Chi Minh City coordinates
  },
  {
    id: "2",
    name: "Canada Registered Office",
    address: "2124 Broad Street(S4P 1Y5)",
    city: " Regina, Saskatchewan",
    country: "Canada",
    phone: "+1-855-477-9797",
    email: "admin@gtrworldwide.in",
    coordinates: [50.44496, -104.6], // Toronto coordinates
  },
  {
    id: "3",

    name: "India Office",
    address: "Lets Connect Business Park, Sector 136 (Pincode-201305)",
    city: "Noida, UP",
    country: "India",
    phone: "+91 88106 86447",
    email: "admin@gtrworldwide.in",
    coordinates: [28.5, 77.401], // Melbourne coordinates
  },
]
