
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  text: string;
  author: string;
  rating: number;
}

const Testimonial = ({ text, author, rating }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
        <p className="text-hvac-blue font-medium">{author}</p>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    text: "Sterling Heights Heating & Cooling saved us during the coldest night of the year when our furnace stopped working. The technician arrived quickly and had us up and running in no time. Highly recommend!",
    author: "Michael S., Sterling Heights",
    rating: 5,
  },
  {
    text: "I've been using Sterling Heights Heating & Cooling for years for all my HVAC maintenance. Their team is always professional, on time, and thorough. My AC has never run better!",
    author: "Jennifer L., Troy",
    rating: 5,
  },
  {
    text: "The installation team was amazing - they completed our new AC system in one day with minimal disruption. They took the time to explain how everything works and followed up to make sure we were satisfied.",
    author: "Robert D., Rochester Hills",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hvac-navy mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers throughout Macomb County.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-hvac-blue hover:underline font-medium">Read More Google Reviews →</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
