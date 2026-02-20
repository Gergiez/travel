
import React from 'react';
import { useApp } from '../store';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const { config } = useApp();

  return (
    <div className="bg-white">
      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: config.accentColor }}>Our Story</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-8 leading-tight">Founded on a Passion for Perfection and Discovery.</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>WorldClass began with a simple observation: luxury travel often misses the soul of the destination. We set out to bridge the gap between 5-star comfort and authentic cultural immersion.</p>
              <p>For over 15 years, we've scouted every hotel, tested every guide, and tasted every meal to ensure that when we say "WorldClass," we mean the absolute pinnacle of human travel experience.</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
              className="rounded-3xl shadow-2xl relative z-10"
              alt="Our Team"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-3xl -z-0" style={{ backgroundColor: config.accentColor + '20' }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">The WorldClass Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Precision Planning', desc: 'No detail is too small. We orchestrate every logistics step so you can simply exist.' },
              { icon: Heart, title: 'Human Connection', desc: 'We believe travel is about the people you meet and the cultures you share.' },
              { icon: Award, title: 'Excellence Guaranteed', desc: 'We stand by every partner and package we represent. Perfection is our baseline.' }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6" style={{ color: config.accentColor }}>
                  <v.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Meet the Visionaries</h2>
          <p className="text-slate-500">The expert travel architects behind your next great memory.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Alexander Sterling', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=alex' },
            { name: 'Sofia Moretti', role: 'Head of Experiences', img: 'https://i.pravatar.cc/150?u=sofia' },
            { name: 'Hiroshi Tanaka', role: 'Asia Lead Architect', img: 'https://i.pravatar.cc/150?u=hiro' },
            { name: 'Elena Vance', role: 'Client Concierge', img: 'https://i.pravatar.cc/150?u=elena' }
          ].map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-6 inline-block">
                <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-900 rounded-full transition-all duration-500 -m-2" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
