
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Pricing from '@/components/home/Pricing';
import { GlowingEffectDemo } from '@/components/ui/GlowingEffectDemo';
import FadeInSection from '@/components/ui/FadeInSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Discover More Features</h2>
            </FadeInSection>
            <GlowingEffectDemo />
          </div>
        </section>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
