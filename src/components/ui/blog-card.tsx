import Link from 'next/link';
import { ArrowRight, CommandIcon, User2 } from 'lucide-react';
import Image from 'next/image';

interface BlogCardProps {
    date: { day: string; month: string };
    author: string;
    comments: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
  }
  
  export  const BlogCard: React.FC<BlogCardProps> = ({
    date,
    author,
    comments,
    category,
    title,
    excerpt,
    image,
  }) => {
    return (
      <div className="bg-card rounded-lg shadow-md overflow-hidden border-border">
        <div className="relative">
          <Image src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4 primary-red rounded-lg p-2 text-center min-w-[60px]">
            <div className="text-2xl font-bold">{date.day}</div>
            <div className="text-sm">{date.month}</div>
          </div>
        </div>
  
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <User2 className="mr-1" />
              <span className="text-foreground">{author}</span>
            </div>
            <div className="flex items-center">
              <CommandIcon className="mr-1" />
              <span className="text-foreground">Comments ({comments})</span>
            </div>
            <div className="flex items-center text-primary">
              <span>{category}</span>
            </div>
          </div>
  
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
            <Link href="#">{title}</Link>
          </h3>
  
          <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
  
          <Link
            href="#"
            className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
          >
            Read More
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  };

  