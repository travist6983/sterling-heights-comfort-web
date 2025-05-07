
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-hvac-navy">
            <span className="block sm:inline">Sterling Heights</span>
            <span className="block sm:inline sm:ml-1 text-hvac-blue">Heating & Cooling</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-hvac-navy hover:text-hvac-blue transition-colors font-medium">Services</a>
          <a href="#about" className="text-hvac-navy hover:text-hvac-blue transition-colors font-medium">About</a>
          <a href="#testimonials" className="text-hvac-navy hover:text-hvac-blue transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="text-hvac-navy hover:text-hvac-blue transition-colors font-medium">Contact</a>
          <Button className="flex items-center gap-2 bg-hvac-red hover:bg-red-700">
            <Phone className="h-4 w-4" /> (586) 480-1115
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-hvac-navy p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#services" className="text-hvac-navy hover:text-hvac-blue transition-colors py-2 font-medium" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-hvac-navy hover:text-hvac-blue transition-colors py-2 font-medium" onClick={toggleMenu}>About</a>
            <a href="#testimonials" className="text-hvac-navy hover:text-hvac-blue transition-colors py-2 font-medium" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-hvac-navy hover:text-hvac-blue transition-colors py-2 font-medium" onClick={toggleMenu}>Contact</a>
            <Button className="flex items-center gap-2 bg-hvac-red hover:bg-red-700 justify-center">
              <Phone className="h-4 w-4" /> (586) 480-1115
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
