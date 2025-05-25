"use client"
import React from "react"
import { SectionHeader } from "./section-header"
import { BlogCard } from "./blog-card"

export function BlogSection() {
  const blogPosts = [
    {
      date: { day: "10", month: "May" },
      author: "GTR Editor",
      comments: 0,
      category: "Green Card",
      title: "Lena Metlege Diab Appointed as Canada’s New Immigration Minister",
      excerpt:
        "Lena Metlege Diab has been appointed as Canada’s new Minister of Immigration, Refugees, and Citizenship, effective May 13, 2025. This appointment comes as part of Prime Minister Mark Carney’s post-election cabinet reshuffle, where Diab replaces Rachel Bendayan in this pivotal role . Background and Experience Born in Halifax to Lebanese immigrant parents, Diab moved to Lebanon at age two but returned to Canada at eleven to escape the Lebanese Civil War. She holds degrees in economics, political science, public administration, and law from Saint Mary’s University and Dalhousie University. Her professional background includes practicing law and operating a small business…",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      date: { day: "07", month: "May" },
      author: "GTR Editor",
      comments: 0,
      category: "Green Card",
      title:
        "New Rural Immigration Pathway: Steinbach Lists Priority Occupations",
      excerpt:
        "Steinbach, Manitoba, has officially launched its participation in Canada’s Rural Community Immigration Pilot (RCIP), unveiling priority sectors and occupations eligible for this new pathway to permanent residence. This employer-driven initiative aims to address local labor shortages by attracting skilled foreign workers to settle in Steinbach and its surrounding areas, including the Rural Municipalities of Ste. Anne, Piney, La Broquerie, and the urban districts of Landmark and Vita . Priority Sectors Steinbach has identified five key sectors reflecting its regional labor market needs: – Health – Education, Law, and Social, Community, and Government Services – Sales and Service – Trades and…",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    },
    {
      date: { day: "06", month: "May" },
      author: "GTR Editor",
      comments: 2,
      category: "Business",
      title:
        "Full List of 25 Eligible Occupations Announced for RCIP in Sault Ste. Marie",
      excerpt:
        "Sault Ste. Marie, Ontario, has officially unveiled its list of 25 priority occupations eligible for permanent residency under the 2025 Rural Community Immigration Pilot (RCIP), which replaces the former Rural and Northern Immigration Pilot (RNIP). This initiative aims to attract skilled workers to support the city’s economic growth and address labor shortages. Priority Occupations for 2025 The RCIP targets a diverse range of sectors, including healthcare, engineering, trades, social services, and hospitality. Below is the complete list of eligible occupations along with their corresponding National Occupation Classification (NOC) codes: NOC Code Occupation Name 21301 Mechanical engineers 21310 Electrical and electronics…",
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    },
  ]

  return (
    <section id="first-section" className="py-16 bg-background">
      <SectionHeader
        title="CANADA IMMIGRATION NEWS"
        subtitle="Latest News & Events"
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
