
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hvac-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sterling Heights Heating & Cooling</h3>
            <p className="mb-4 text-gray-300">
              Your trusted HVAC service provider in Macomb County. Available 24/7 for all your heating and cooling needs.
            </p>
            <p className="text-gray-300">
              License #: MI-12345678
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Heating Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Air Conditioning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Furnace Repair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AC Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seasonal Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Indoor Air Quality</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Phone: (586) 480-1115</li>
              <li className="text-gray-300">Email: contact@sterlingheightshvac.com</li>
              <li className="text-gray-300">Address: 6500 Metro Pkwy, Sterling Heights, MI 48312</li>
              <li className="text-gray-300">Hours: Available 24/7</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Free Quote</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Sterling Heights Heating & Cooling. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
