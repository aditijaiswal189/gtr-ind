"use client";
import React from 'react';
import { SectionHeader } from './section-header';
import { BlogCard } from './blog-card';




export  function BlogSection() {
  const blogPosts = [
    {
      date: { day: "14", month: "Sep" },
      author: "Salman",
      comments: 0,
      category: "Green Card",
      title: "Citizenship Concept On How To Become A UK Resident",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      date: { day: "15", month: "Sep" },
      author: "Suraj",
      comments: 0,
      category: "Green Card",
      title: "Wonders Of Ancient Civilizations Through Egypt",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    },
    {
      date: { day: "16", month: "Sep" },
      author: "Riya",
      comments: 2,
      category: "Business",
      title: "The Road To Adventure Embarking On New Horizons",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-background">
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
  );
}
