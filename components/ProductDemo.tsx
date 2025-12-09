import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MousePointer2, CheckCircle, Zap, Film, ArrowRight } from 'lucide-react';

export const ProductDemo = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Stages of animation
  // 0.0 - 0.25: Initial State
  // 0.25 - 0.50: Select File
  // 0.50 - 0.75: Compressing
  // 0.75 - 1.00: Success

  const cursorX = useTransform(smoothProgress, [0.1, 0.2, 0.4], ["120%", "50%", "50%"]);
  const cursorY = useTransform(smoothProgress, [0.1, 0.2, 0.4], ["120%", "80%", "45%"]);
  const cursorOpacity = useTransform(smoothProgress, [0, 0.1, 0.45], [0, 1, 0]);
  
  const fileOpacity = useTransform(smoothProgress, [0.2, 0.25], [0, 1]);
  const fileScale = useTransform(smoothProgress, [0.2, 0.25, 0.4], [0.8, 1, 1]);

  const buttonScale = useTransform(smoothProgress, [0.38, 0.4, 0.45], [1, 0.9, 1]);
  const buttonColor = useTransform(smoothProgress, [0.4, 0.41], ["#3f3f46", "#0ea5e9"]);

  const showLoading = useTransform(smoothProgress, [0.45, 0.5, 0.7], [0, 1, 0]);
  const loadingWidth = useTransform(smoothProgress, [0.5, 0.7], ["0%", "100%"]);

  const showSuccess = useTransform(smoothProgress, [0.75, 0.8], [0, 1]);
  const successY = useTransform(smoothProgress, [0.75, 0.8], [20, 0]);

  return (
    <section ref={targetRef} className="h-[300vh] relative bg-zinc-950">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-20 text-center z-10 px-4">
           <h2 className="text-3xl md:text-4xl font-semibold mb-2">How it works</h2>
           <p className="text-gray-400">Scroll to compress</p>
        </div>

        {/* The "App" Window */}
        <div className="relative w-[90%] max-w-4xl aspect-video bg-[#1c1c1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
          {/* App Header */}
          <div className="h-10 bg-[#2c2c2e] border-b border-black flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* App Body */}
          <div className="flex-1 flex flex-col items-center justify-center relative p-8">
            
            {/* Drop Zone */}
            <div className="w-full h-full border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center gap-4 bg-zinc-900/50">
              
              {/* Selected File (Appears on scroll) */}
              <motion.div 
                style={{ opacity: fileOpacity, scale: fileScale }}
                className="absolute inset-0 flex items-center justify-center bg-[#1c1c1e] z-10"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <Film size={64} className="text-zinc-400" />
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-[10px] px-2 py-0.5 rounded-full font-bold">MOV</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium">Vacation_Raw_Footage.mov</h3>
                    <p className="text-zinc-500">4.2 GB • 4K 60fps</p>
                  </div>

                  {/* Compress Button */}
                  <motion.button 
                    style={{ scale: buttonScale, backgroundColor: buttonColor }}
                    className="mt-4 px-8 py-3 rounded-lg font-medium text-white shadow-lg flex items-center gap-2 transition-colors"
                  >
                    <Zap size={18} className="fill-white" />
                    Compress Now
                  </motion.button>
                </div>
              </motion.div>
              
              <div className="text-zinc-500 flex flex-col items-center">
                 <p className="mb-2">Drag & Drop files here</p>
                 <span className="text-sm px-3 py-1 bg-zinc-800 rounded-md">or Browse</span>
              </div>
            </div>

            {/* Loading Overlay */}
            <motion.div 
              style={{ opacity: showLoading }}
              className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="w-64">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Compressing...</span>
                  <span>Processing Neural Engine</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ width: loadingWidth }}
                    className="h-full bg-gradient-to-r from-orb-600 to-purple-600"
                  />
                </div>
              </div>
            </motion.div>

            {/* Success Overlay */}
            <motion.div 
              style={{ opacity: showSuccess, y: successY }}
              className="absolute inset-0 bg-[#1c1c1e] z-30 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">Compression Complete</h3>
              <div className="flex items-center gap-4 text-lg mb-8">
                <span className="text-gray-500 line-through">4.2 GB</span>
                <ArrowRight size={16} className="text-gray-600" />
                <span className="text-white font-bold text-2xl">380 MB</span>
              </div>
              <div className="flex gap-4">
                 <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200">Show in Finder</button>
                 <button className="text-white/60 hover:text-white px-6 py-2">Close</button>
              </div>
            </motion.div>

            {/* Mouse Cursor Simulator */}
            <motion.div
              style={{ left: cursorX, top: cursorY, opacity: cursorOpacity }}
              className="absolute w-6 h-6 z-50 pointer-events-none"
            >
              <MousePointer2 className="fill-black text-white w-full h-full drop-shadow-xl" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};