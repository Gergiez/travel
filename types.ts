
export type Region = 'Europe' | 'Asia' | 'Africa' | 'America' | 'Middle East' | 'All';

export interface Destination {
  id: string;
  name: string;
  region: Region;
  description: string;
  price: number;
  image: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  logo: string;
  isDarkMode: boolean;
  fontFamily: 'Inter' | 'Roboto' | 'Poppins' | 'Montserrat';
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface AppState {
  config: SiteConfig;
  destinations: Destination[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  services: Service[];
  isAuthenticated: boolean;
}
