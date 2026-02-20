
import React from 'react';
import { useApp } from '../store';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { config } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Start Your Journey</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Our travel consultants are standing by to help you design your next unforgettable escape.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-8 text-slate-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 shrink-0" style={{ color: config.accentColor }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Office</h4>
                    <p className="text-slate-500 text-sm mt-1">{config.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 shrink-0" style={{ color: config.accentColor }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-500 text-sm mt-1">{config.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 shrink-0" style={{ color: config.accentColor }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-500 text-sm mt-1">{config.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 shrink-0" style={{ color: config.accentColor }}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Hours</h4>
                    <p className="text-slate-500 text-sm mt-1">{config.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h4 className="font-bold mb-4">Urgent Travel Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Existing clients on active trips have 24/7 access to our emergency support line provided in your itinerary packet.</p>
              <button className="text-sm font-bold border-b border-white hover:text-slate-300 transition-colors">Emergency Protocol</button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-3xl font-serif font-bold mb-8 text-slate-900">Booking Inquiry</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Preferred Destination</label>
                  <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition-all">
                    <option>Select Option</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Middle East</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Tell us about your dream trip</label>
                  <textarea rows={5} placeholder="I am looking for a 10-day luxury tour of Italy focusing on food and history..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition-all"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full py-5 rounded-xl text-white font-bold flex items-center justify-center space-x-2 transition-all hover:brightness-110 active:scale-95 shadow-lg" style={{ backgroundColor: config.primaryColor }}>
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
