
import React from 'react';
import { useApp } from '../store';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { blogPosts, config } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">WorldClass Insights</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Tips, stories, and news from the frontlines of international luxury travel.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover" />
                <div className="p-10">
                  <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded">{post.category}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 hover:text-slate-700 cursor-pointer">{post.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{post.excerpt}</p>
                  <button className="flex items-center space-x-2 font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-600 transition-colors group">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-slate-100">Popular Categories</h3>
              <div className="space-y-3">
                {['Travel Tips', 'Destinations', 'Luxury Guides', 'Culture', 'Packing'].map(cat => (
                  <div key={cat} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-600 group-hover:text-slate-900 font-medium">{cat}</span>
                    <span className="text-xs bg-slate-50 text-slate-400 px-2 py-1 rounded-full group-hover:bg-slate-100 transition-colors">12</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Never Miss a Story</h3>
                <p className="text-indigo-100 mb-6">Join 50,000+ travel enthusiasts who receive our weekly insights.</p>
                <input type="email" placeholder="Email address" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl mb-4 placeholder-indigo-200 outline-none focus:ring-1 focus:ring-white" />
                <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">Subscribe Now</button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Clock className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
