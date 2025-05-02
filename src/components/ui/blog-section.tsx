"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CommandIcon, User2 } from 'lucide-react';
// import { Icon } from "@iconify/react/dist/iconify.js";

interface BlogCardProps {
  date: { day: string; month: string };
  author: string;
  comments: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, author, comments, category, title, excerpt, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-red-500 text-white rounded-lg p-2 text-center min-w-[60px]">
          <div className="text-2xl font-bold">{date.day}</div>
          <div className="text-sm">{date.month}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <User2 className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <CommandIcon className="mr-1" />
            <span>Comments ({comments})</span>
          </div>
          <div className="flex items-center text-red-500">
            <span>{category}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 hover:text-red-500 transition-colors">
          <Link href="#">{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        
        <Link 
          href="#" 
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default function BlogSection() {
  const blogPosts = [
    {
      date: { day: "14", month: "Sep" },
      author: "Salman",
      comments: 0,
      category: "Green Card",
      title: "Citizenship Concept On How To Become A UK Resident",
      excerpt: "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      date: { day: "15", month: "Sep" },
      author: "Suraj",
      comments: 0,
      category: "Green Card",
      title: "Wonders Of Ancient Civilizations Through Egypt",
      excerpt: "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
      date: { day: "16", month: "Sep" },
      author: "Riya",
      comments: 2,
      category: "Business",
      title: "The Road To Adventure Embarking On New Horizons",
      excerpt: "With worldwide annual spend on digital advertising surpassing $325 billion, it's no...",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
         <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider text-red-600 uppercase mb-3">
            CANADA IMMIGRATION NEWS
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Latest News & Events
          </h2>
        </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}