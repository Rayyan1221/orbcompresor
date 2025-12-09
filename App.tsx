import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductDemo } from './components/ProductDemo';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orb-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProductDemo />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}