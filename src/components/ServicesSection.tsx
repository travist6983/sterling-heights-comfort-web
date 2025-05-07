
import React from 'react';
import { 
  Thermometer, 
  Fan, 
  Wrench, 
  House,
  AirVent,
  CloudSnow,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:border-hvac-blue">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-hvac-lightBlue rounded-lg flex items-center justify-center text-hvac-blue mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-hvac-navy hover:text-hvac-blue p-0">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

const services = [
  {
    title: 'Heating Services',
    description: 'Complete furnace installation, repair and maintenance services to keep you warm all winter.',
    icon: <Thermometer className="w-6 h-6" />,
  },
  {
    title: 'Air Conditioning',
    description: 'Expert AC installation, repairs, and tune-ups to keep you cool during hot summer months.',
    icon: <CloudSnow className="w-6 h-6" />,
  },
  {
    title: 'Furnace Repair',
    description: 'Fast and reliable furnace repairs by certified technicians available 24/7 for emergencies.',
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: 'AC Installation',
    description: 'Professional installation of energy-efficient air conditioning systems for your home or business.',
    icon: <Fan className="w-6 h-6" />,
  },
  {
    title: 'Seasonal Maintenance',
    description: 'Regular maintenance to ensure your systems run efficiently throughout every season.',
    icon: <CloudSun className="w-6 h-6" />,
  },
  {
    title: 'Indoor Air Quality',
    description: 'Solutions to improve your indoor air quality, including purifiers, humidifiers, and ventilation.',
    icon: <AirVent className="w-6 h-6" />,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hvac-navy mb-4">Our HVAC Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive heating, cooling, and air quality solutions for residential and light commercial properties in Sterling Heights and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-hvac-blue hover:bg-blue-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
