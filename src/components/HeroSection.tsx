
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-hvac-navy to-hvac-blue text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Comfort Is Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Expert heating and cooling services in Sterling Heights and surrounding areas. Available 24/7 for all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-hvac-red hover:bg-red-700 text-white">
              Emergency Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white flex items-center gap-2">
              Schedule Appointment <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 py-2 px-3 bg-white/10 rounded-lg inline-flex items-center">
            <span className="h-3 w-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <p className="text-white/90">Available 24/7 for Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
