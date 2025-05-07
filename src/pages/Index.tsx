
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PromoSection from '@/components/PromoSection';
import ContactSection from '@/components/ContactSection';
import AreasSection from '@/components/AreasSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <PromoSection />
        <ContactSection />
        <AreasSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
