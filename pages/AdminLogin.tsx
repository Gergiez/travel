
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store';
import { Lock, User } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuthenticated, config } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
      navigate('/admin');
    } else {
      setError('Invalid credentials. Use admin/admin');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden p-10 border border-slate-200">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: config.primaryColor }}>
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Admin Control</h2>
          <p className="text-slate-500 mt-2">Sign in to manage WorldClass content</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            style={{ backgroundColor: config.primaryColor }}
          >
            Authenticate
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-400 uppercase tracking-widest">
          Secure Access Only
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
