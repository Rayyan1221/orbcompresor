import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileVideo, HardDrive, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 10]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orb-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Get More Storage.<br />Zero Quality Loss.
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional media compression that defies physics. <span className="text-white font-medium">Upto 90% size reduction</span> with identical quality. 
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-orb-600 hover:bg-orb-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              Download Free Trial
            </button>
            <button className="text-white/70 hover:text-white flex items-center gap-2 px-6 py-3 transition-colors">
              See how it works <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3D Comparison Stage */}
      <div className="perspective-1000 relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] flex justify-center items-center px-4">
        
        {/* Connection Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[2px] bg-gradient-to-r from-red-500/20 via-transparent to-green-500/20 hidden md:block" />

        {/* Left Card - Heavy */}
        <motion.div 
          style={{ y: y1, rotateY: 15, rotateX, scale }}
          className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 w-full max-w-[320px] md:w-80 bg-zinc-900/80 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 group hover:border-red-500/40 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
              <FileVideo size={32} />
            </div>
            <span className="text-xs font-mono text-red-400 border border-red-500/20 px-2 py-1 rounded-full bg-red-500/5">BEFORE</span>
          </div>
          <div>
            <div className="h-2 w-full bg-zinc-800 rounded-full mb-2 overflow-hidden">
              <div className="h-full w-full bg-red-500/50" />
            </div>
            <h3 className="text-2xl font-bold text-white">2.4 GB</h3>
            <p className="text-sm text-gray-500">Project_Final_4K.mov</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2">
            <div>Bitrate: 100Mbps</div>
            <div>Format: ProRes</div>
          </div>
        </motion.div>

        {/* Arrow Mobile */}
        <div className="md:hidden absolute z-20 text-white/20">
          <ArrowRight size={24} className="rotate-90" />
        </div>

        {/* Right Card - Light */}
        <motion.div 
          style={{ y: y2, rotateY: -15, rotateX, scale }}
          className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 w-full max-w-[320px] md:w-80 bg-zinc-900/80 backdrop-blur-xl border border-orb-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(14,165,233,0.15)] flex flex-col gap-4 z-20"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orb-500/20 rounded-2xl text-orb-400">
              <FileVideo size={32} />
            </div>
            <span className="text-xs font-mono text-orb-400 border border-orb-500/30 px-2 py-1 rounded-full bg-orb-500/10">AFTER</span>
          </div>
          <div>
            <div className="h-2 w-full bg-zinc-800 rounded-full mb-2 overflow-hidden">
              <div className="h-full w-[10%] bg-orb-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
            </div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              240 MB
              <span className="text-sm font-normal text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-center">-90%</span>
            </h3>
            <p className="text-sm text-gray-500">Project_Final_4K_Orb.mp4</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2">
            <div>Quality: 100%</div>
            <div>Format: HEVC</div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};