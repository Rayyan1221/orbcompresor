import React from 'react';
import { Download } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Custom SVG Logo based on user image */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="50" r="42" stroke="#0ea5e9" strokeWidth="8" />
              <path 
                d="M72 32C62 20 40 20 30 35C20 50 25 75 45 80C60 84 75 70 75 55" 
                stroke="#e4e4e7" 
                strokeWidth="6" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
          <span className="font-semibold text-xl tracking-tight">ORB</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
        </nav>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
          <span>Install</span>
          <Download size={14} />
        </button>
      </div>
    </header>
  );
};