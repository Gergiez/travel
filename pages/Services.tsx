
import React from 'react';
import { useApp } from '../store';
import { Star, Briefcase, Users, Map, Shield, PlaneTakeoff, HelpCircle } from 'lucide-react';

const iconMap: Record<string, any> = {
  Star, Briefcase, Users, Map, Shield, PlaneTakeoff, HelpCircle
};

const Services: React.FC = () => {
  const { config, services } = useApp();

  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Premium Offerings</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">From logistics to luxury, we handle every aspect of your international journey.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComp = iconMap[service.icon] || Map;
              return (
                <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 transition-colors group-hover:bg-slate-900 group-hover:text-white" style={{ color: config.accentColor }}>
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                  <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-slate-500 transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
            
            {/* Extended Services */}
            <div className="bg-slate-900 p-10 rounded-3xl shadow-xl flex flex-col justify-center text-white">
              <PlaneTakeoff className="w-12 h-12 mb-6" style={{ color: config.accentColor }} />
              <h3 className="text-2xl font-bold mb-4">Visa & Documentation</h3>
              <p className="text-slate-400 mb-8">Full assistance with international visas, travel permits, and health documentation for any destination.</p>
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm w-fit hover:bg-slate-200 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <span className="text-2xl font-serif font-bold p-4">FORBES TRAVEL</span>
          <span className="text-2xl font-serif font-bold p-4">IATA PARTNER</span>
          <span className="text-2xl font-serif font-bold p-4">ASTA LUXURY</span>
          <span className="text-2xl font-serif font-bold p-4">TRAVELLER</span>
        </div>
      </section>
    </div>
  );
};

export default Services;
