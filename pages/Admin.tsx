
import React, { useState } from 'react';
import { useApp } from '../store';
import { Layout, Palette, Map, BookOpen, Settings, User, LogOut, Save, Plus, Trash2, Edit3 } from 'lucide-react';

const Admin: React.FC = () => {
  const { config, updateConfig, destinations, updateDestinations, setAuthenticated } = useApp();
  const [activeTab, setActiveTab] = useState<'theme' | 'destinations' | 'content'>('theme');

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const menuItems = [
    { id: 'theme', label: 'Theme & Styling', icon: Palette },
    { id: 'destinations', label: 'Destinations', icon: Map },
    { id: 'content', label: 'Page Content', icon: Layout },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen },
    { id: 'settings', label: 'Global Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-screen z-40">
        <div className="p-8 border-b border-slate-800">
          <h2 className="text-xl font-bold font-serif">CMS Dashboard</h2>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">v2.0.4 Premium</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-slate-800 text-white shadow-lg shadow-black/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10 pb-24">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
            <p className="text-slate-500">Real-time customization for your WorldClass platform.</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
            <Save className="w-5 h-5" />
            <span>Publish Changes</span>
          </button>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          {activeTab === 'theme' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Brand Identity</h3>
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">Agency Name</label>
                    <input 
                      type="text" 
                      value={config.brandName}
                      onChange={(e) => updateConfig({ brandName: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">Marketing Tagline</label>
                    <input 
                      type="text" 
                      value={config.tagline}
                      onChange={(e) => updateConfig({ tagline: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Color Palette</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-500 mb-2">Primary Color</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <input 
                          type="color" 
                          value={config.primaryColor}
                          onChange={(e) => updateConfig({ primaryColor: e.target.value })}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <span className="text-sm font-mono uppercase">{config.primaryColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 mb-2">Accent Color</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <input 
                          type="color" 
                          value={config.accentColor}
                          onChange={(e) => updateConfig({ accentColor: e.target.value })}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <span className="text-sm font-mono uppercase">{config.accentColor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Typography & Modes</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-slate-500">Dark Mode</span>
                    <button 
                      onClick={() => updateConfig({ isDarkMode: !config.isDarkMode })}
                      className={`w-14 h-8 rounded-full transition-all relative ${config.isDarkMode ? 'bg-indigo-600' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${config.isDarkMode ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <span className="block text-sm text-slate-500 mb-2">Google Font Family</span>
                    <select 
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                      value={config.fontFamily}
                      onChange={(e) => updateConfig({ fontFamily: e.target.value as any })}
                    >
                      <option>Inter</option>
                      <option>Roboto</option>
                      <option>Poppins</option>
                      <option>Montserrat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'destinations' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Live Inventory ({destinations.length})</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg font-medium text-sm">
                  <Plus className="w-4 h-4" />
                  <span>Add New</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-100">
                      <th className="pb-4 font-semibold text-slate-400 text-sm uppercase tracking-wider">Destination</th>
                      <th className="pb-4 font-semibold text-slate-400 text-sm uppercase tracking-wider">Region</th>
                      <th className="pb-4 font-semibold text-slate-400 text-sm uppercase tracking-wider">Price</th>
                      <th className="pb-4 font-semibold text-slate-400 text-sm uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {destinations.map((dest) => (
                      <tr key={dest.id} className="group">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <img src={dest.image} className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-bold text-slate-800">{dest.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-slate-500">{dest.region}</td>
                        <td className="py-4 font-bold text-slate-900">${dest.price}</td>
                        <td className="py-4 text-right space-x-2">
                          <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Edit3 className="w-4 h-4" /></button>
                          <button className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'theme' && activeTab !== 'destinations' && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-500 mb-6">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Module Under Construction</h3>
              <p className="text-slate-500 max-w-md mx-auto mt-2">The {activeTab} management system is being provisioned. All core data structures are ready for live integration.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
