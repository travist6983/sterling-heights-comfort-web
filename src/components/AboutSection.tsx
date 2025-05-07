
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-hvac-lightBlue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-hvac-navy mb-4">About Sterling Heights Heating & Cooling</h2>
            <p className="text-lg text-gray-700 mb-4">
              Since our founding, Sterling Heights Heating & Cooling has been the trusted name in HVAC services throughout Macomb County. As a local, family-owned business, we take pride in serving our community with integrity and expertise.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of certified technicians brings years of experience and knowledge to every job, ensuring your comfort systems perform at their best year-round. We believe in doing the job right the first time, using quality parts, and standing behind our work.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge className="bg-hvac-navy hover:bg-hvac-navy/90">Family Owned</Badge>
              <Badge className="bg-hvac-navy hover:bg-hvac-navy/90">Certified Technicians</Badge>
              <Badge className="bg-hvac-navy hover:bg-hvac-navy/90">24/7 Service</Badge>
              <Badge className="bg-hvac-navy hover:bg-hvac-navy/90">5-Star Rated</Badge>
              <Badge className="bg-hvac-navy hover:bg-hvac-navy/90">100% Satisfaction Guarantee</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-md bg-white h-40 flex items-center justify-center">
              <CardContent className="flex items-center justify-center h-full">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300&q=80" 
                     alt="HVAC Technician" 
                     className="max-h-full rounded" />
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-white h-40 flex items-center justify-center">
              <CardContent className="flex items-center justify-center h-full">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300&q=80" 
                     alt="HVAC Service" 
                     className="max-h-full rounded" />
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-white col-span-2 h-40 flex items-center justify-center">
              <CardContent className="flex items-center justify-center h-full">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=300&q=80" 
                     alt="Sterling Heights Office" 
                     className="max-h-full rounded" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
