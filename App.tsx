
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

const App: React.FC = () => {
  const { config, isAuthenticated } = useApp();

  return (
    <div style={{ backgroundColor: config.isDarkMode ? '#0f172a' : '#f8fafc', color: config.isDarkMode ? '#f8fafc' : '#1e293b' }}>
      <HashRouter>
        <Header />
        <main className="min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/*" 
              element={isAuthenticated ? <Admin /> : <Navigate to="/admin/login" replace />} 
            />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Contact Widget */}
        <a 
          href="https://wa.me/15551234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.268.408 2.445 1.108 3.399l-.737 2.73 2.787-.741c.883.541 1.929.859 3.042.859 3.181 0 5.767-2.586 5.767-5.77 0-3.185-2.586-5.747-5.767-5.747zm3.429 8.311c-.147.413-.852.756-1.147.801-.295.045-.59.045-.885.045-.841-.045-1.848-.36-2.586-.948-.737-.588-1.564-1.742-1.564-3.042 0-.295.045-.59.135-.841.091-.251.341-.497.54-.69.2-.193.398-.387.64-.387.243 0 .497.243.64.497.143.254.341.693.341 1.141 0 .193-.045.387-.135.54-.091.153-.182.254-.316.387-.135.135-.225.225-.091.452.135.225.59 1.037 1.268 1.629.588.588 1.082.781 1.353.916.271.135.452.135.631-.09.182-.225.756-.885.948-1.187.193-.301.398-.254.69-.135.295.135 1.848.885 2.162 1.037.316.153.518.225.59.341.07.116.07.693-.075 1.108z"/>
          </svg>
        </a>
      </HashRouter>
    </div>
  );
};

export default App;
