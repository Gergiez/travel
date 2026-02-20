
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, SiteConfig, Destination, BlogPost, Testimonial, Service } from './types';

const initialConfig: SiteConfig = {
  brandName: 'WorldClass',
  tagline: 'Travel Beyond Expectations',
  primaryColor: '#1e293b',
  accentColor: '#d4af37',
  logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501c27?auto=format&fit=crop&w=100&h=100',
  isDarkMode: false,
  fontFamily: 'Inter',
  contact: {
    address: '123 Luxury Way, Global Plaza, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'concierge@worldclass.travel',
    hours: 'Mon-Fri: 9am - 8pm, Sat: 10am - 4pm'
  },
  seo: {
    metaTitle: 'WorldClass Travel Agency | Luxury International Tours',
    metaDescription: 'Experience the world with WorldClass. Premium travel packages, personalized itineraries, and unparalleled luxury services.'
  }
};

const initialDestinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini, Greece',
    region: 'Europe',
    description: 'Breathtaking sunsets and iconic white-washed buildings overlooking the Aegean Sea.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    highlights: ['Private Boat Tour', 'Wine Tasting', 'Oia Sunset View']
  },
  {
    id: '2',
    name: 'Kyoto, Japan',
    region: 'Asia',
    description: 'Immerse yourself in traditional Japanese culture, ancient temples, and serene zen gardens.',
    price: 3100,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Tea Ceremony', 'Arashiyama Bamboo Grove', 'Gion District Walk']
  },
  {
    id: '3',
    name: 'Amalfi Coast, Italy',
    region: 'Europe',
    description: 'The epitome of Italian glamour with dramatic cliffs and turquoise waters.',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Positano Exploration', 'Capri Day Trip', 'Limoncello Workshop']
  },
  {
    id: '4',
    name: 'Dubai, UAE',
    region: 'Middle East',
    description: 'A futuristic oasis of luxury shopping, ultramodern architecture, and lively nightlife.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    highlights: ['Burj Khalifa Access', 'Desert Safari', 'Private Yacht Tour']
  },
  {
    id: '5',
    name: 'Serengeti, Tanzania',
    region: 'Africa',
    description: 'Witness the Great Migration and the majestic Big Five in their natural habitat.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    highlights: ['Hot Air Balloon Safari', 'Luxury Tented Camp', 'Expert Guided Game Drives']
  }
];

const initialBlogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Hidden Gems of the Mediterranean',
    excerpt: 'Beyond Santorini and Amalfi, explore the secret islands where locals vacation.',
    content: 'Full content of the Mediterranean hidden gems article...',
    author: 'Elena Rossi',
    date: '2024-05-15',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2',
    title: 'The Art of Slow Travel',
    excerpt: 'Why spending a week in one city is better than visiting five in ten days.',
    content: 'Full content of the slow travel philosophy...',
    author: 'Marcus Thorne',
    date: '2024-06-02',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  }
];

const initialServices: Service[] = [
  { id: 's1', title: 'Luxury Packages', description: 'Curated 5-star experiences with exclusive access.', icon: 'Star' },
  { id: 's2', title: 'Corporate Travel', description: 'Seamless business trips tailored to your company needs.', icon: 'Briefcase' },
  { id: 's3', title: 'Group Tours', description: 'Memorable shared journeys for families and friends.', icon: 'Users' },
  { id: 's4', title: 'Custom Itineraries', description: 'Personalized travel plans designed from scratch.', icon: 'Map' }
];

const initialTestimonials: Testimonial[] = [
  { id: 't1', name: 'Sarah Jenkins', role: 'Business Executive', content: 'WorldClass handled our entire European tour with perfection. Every detail was meticulously planned.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 't2', name: 'James Wong', role: 'Photographer', content: 'The safari trip was life-changing. The local guides provided by WorldClass were exceptional.', avatar: 'https://i.pravatar.cc/150?u=james' }
];

interface AppContextType extends AppState {
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  updateDestinations: (newDestinations: Destination[]) => void;
  updateBlogPosts: (newPosts: BlogPost[]) => void;
  setAuthenticated: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(initialConfig);
  const [destinations, setDestinations] = useState<Destination[]>(initialDestinations);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [services] = useState<Service[]>(initialServices);
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const updateDestinations = (newDests: Destination[]) => {
    setDestinations(newDests);
  };

  const updateBlogPosts = (newPosts: BlogPost[]) => {
    setBlogPosts(newPosts);
  };

  return (
    <AppContext.Provider value={{ 
      config, 
      destinations, 
      blogPosts, 
      services, 
      testimonials, 
      isAuthenticated,
      updateConfig, 
      updateDestinations, 
      updateBlogPosts,
      setAuthenticated 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
