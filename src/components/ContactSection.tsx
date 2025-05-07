
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-hvac-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hvac-navy mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to schedule service? Reach out to our team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hvac-navy mb-6">Send Us a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" placeholder="Your email address" type="email" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="service" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                      <option value="">Select a service</option>
                      <option value="heating">Heating Repair/Service</option>
                      <option value="cooling">Air Conditioning</option>
                      <option value="installation">New Installation</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea id="message" placeholder="Tell us about your HVAC needs" rows={4} />
                  </div>
                  
                  <Button type="submit" className="w-full bg-hvac-blue hover:bg-blue-700">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hvac-navy mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-hvac-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(586) 480-1115</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-hvac-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contact@sterlingheightshvac.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-hvac-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">6500 Metro Pkwy</p>
                      <p className="text-gray-600">Sterling Heights, MI 48312</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-5pm (Office Hours)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md flex-grow">
              <CardContent className="p-0 h-full min-h-[250px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.8865632029805!2d-83.03408048452846!3d42.588317330116354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c0006193bc0d%3A0xd2e75e6508aff0a3!2s6500%20Metro%20Pkwy%2C%20Sterling%20Heights%2C%20MI%2048312!5e0!3m2!1sen!2sus!4v1651837913592!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "250px" }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
