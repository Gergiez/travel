
import React, { useState } from 'react';
import { useApp } from '../store';
import { Region } from '../types';
import { Filter, Search, ArrowRight } from 'lucide-react';

const Destinations: React.FC = () => {
  const { destinations, config } = useApp();
  const [filter, setFilter] = useState<Region>('All');
  const [search, setSearch] = useState('');

  const regions: Region[] = ['All', 'Europe', 'Asia', 'Africa', 'America', 'Middle East'];

  const filteredDestinations = destinations.filter(d => 
    (filter === 'All' || d.region === filter) &&
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">The World Awaits</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Browse our collection of hand-picked luxury destinations across seven continents.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-6 lg:space-y-0">
            <div className="flex flex-wrap justify-center gap-2">
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setFilter(r)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === r 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredDestinations.map(dest => (
                <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800">
                        {dest.region}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-slate-900">{dest.name}</h3>
                      <p className="text-lg font-bold" style={{ color: config.accentColor }}>${dest.price}</p>
                    </div>
                    <p className="text-slate-600 mb-6 line-clamp-2">{dest.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {dest.highlights.map(h => (
                        <span key={h} className="text-[10px] font-bold uppercase bg-slate-100 text-slate-500 px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-4 rounded-xl border-2 border-slate-900 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center group">
                      View Itinerary <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-200 mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No Destinations Found</h3>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
