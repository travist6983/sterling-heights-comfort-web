
import React from 'react';

const areas = [
  "Sterling Heights MI", "Troy MI", "Rochester Hills MI", "Mount Clemens MI", 
  "Clawson MI", "Fraser MI", "Rochester MI", "Utica MI", 
  "Waldenburg MI", "Big Beaver Troy MI", "Avoncrofts Rochester Hills MI", 
  "Breitmeyer Hills Mount Clemens MI", "Brooklands Park Rochester Hills MI", 
  "Canfield Manor Mount Clemens MI", "Country Club Village Rochester Hills MI", 
  "Edinshire Rochester Hills MI", "Hampton Village Centre Rochester Hills MI", 
  "Kensington Forest Rochester Hills MI", "Olson-Southriver Mount Clemens MI",
  "Seminole Hills Mount Clemens MI"
];

const AreasSection = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-hvac-navy mb-3">Areas We Serve</h2>
          <p className="text-gray-600">
            Sterling Heights Heating & Cooling proudly provides HVAC services throughout these communities:
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-hvac-lightBlue text-hvac-navy px-3 py-1 rounded-full text-sm hover:bg-hvac-blue hover:text-white transition-colors cursor-pointer"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
