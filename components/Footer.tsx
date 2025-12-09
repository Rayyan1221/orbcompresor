import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
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
          <span className="font-semibold tracking-tight">ORB Professional</span>
        </div>
        
        <div className="text-gray-500">
          © {new Date().getFullYear()} ORB Compression. All rights reserved.
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};