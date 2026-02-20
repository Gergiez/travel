
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store';
import { ChevronRight, Star, Globe, Shield, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const { config, destinations, testimonials } = useApp();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
            alt="World Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight max-w-3xl">
            Explore the World in <br />
            <span style={{ color: config.accentColor }}>WorldClass</span> Style
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-slate-100 font-light">
            Luxury travel experiences curated for the world's most discerning travelers. Discover destinations beyond expectations.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/destinations"
              className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: config.accentColor }}
            >
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full text-lg font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all"
            >
              Custom Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: config.accentColor }}>Curated Experiences</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900">Featured Destinations</h3>
            </div>
            <Link to="/destinations" className="hidden sm:flex items-center text-slate-600 hover:text-slate-900 font-medium">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((dest) => (
              <div key={dest.id} className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900">
                    From ${dest.price}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-black/30 px-2 py-1 rounded backdrop-blur-sm">{dest.region}</span>
                    <h4 className="text-2xl font-bold mt-1">{dest.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Why Travelers Choose WorldClass</h2>
            <p className="text-slate-600">We don't just book trips; we craft life-changing experiences with obsessive attention to detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: 'Global Network', desc: 'Partnerships with 1,000+ luxury hotels and exclusive local operators worldwide.' },
              { icon: Shield, title: 'Peace of Mind', desc: 'Full travel insurance and 24/7 concierge support during your entire journey.' },
              { icon: Clock, title: 'Expert Curation', desc: 'Decades of combined experience in high-end international travel planning.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-6" style={{ color: config.accentColor }}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-slate-50 p-10 rounded-3xl relative">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: config.accentColor }} />)}
                </div>
                <p className="text-lg italic text-slate-700 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center justify-center">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div className="text-left">
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
