
export interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string; }[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
}