import React from 'react';
import { WifiOff, Layers, FolderTree, Scissors, Image as ImageIcon, Video } from 'lucide-react';

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Power. <br/><span className="text-gray-500">Offline Privacy.</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything happens on your device. No uploads, no waiting for cloud servers, no data privacy risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Offline - Large */}
          <div className="md:col-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-zinc-900/80 transition-colors group">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <WifiOff size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100% Offline Processing</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              ORB runs entirely on your local machine. This means you can compress confidential footage, personal photos, and sensitive documents without an internet connection. Zero data leaves your computer.
            </p>
          </div>

          {/* Feature 2: Bulk Folders */}
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-orb-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FolderTree size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bulk Folder Support</h3>
            <p className="text-gray-400">Drag entire folders. ORB preserves your directory structure while compressing everything inside.</p>
          </div>

          {/* Feature 3: Image Engine */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ImageIcon size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Next-Gen Image Opt.</h3>
            <p className="text-gray-400">Supports RAW, PNG, JPEG, WEBP. Compresses 50MB RAW files to 2MB JPGs for previews.</p>
          </div>

          {/* Feature 4: Video Trim */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors group">
             <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scissors size={24} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrated Trimming</h3>
            <p className="text-gray-400">Quickly trim start and end points before compressing. No need to open a heavy editor.</p>
          </div>

          {/* Feature 5: Multi-Format */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors group">
             <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Video size={24} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Universal Formats</h3>
            <p className="text-gray-400">MP4, MOV, AVI, MKV. H.264, H.265 (HEVC), ProRes support out of the box.</p>
          </div>
        </div>
      </div>
    </section>
  );
};