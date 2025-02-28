
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <div className="bg-nebulizer-lavender p-2 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-nebulizer-purple"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 012.5 2.5z"></path>
                <path d="M12 10v1"></path>
                <path d="M8.5 14.5S10 16 12 16s3.5-1.5 3.5-1.5"></path>
                <path d="M3 16.5h2"></path>
                <path d="M19 16.5h2"></path>
              </svg>
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-nebulizer-purple">Portable Nebulizer</span>
              <span className="text-sm md:text-base font-light text-gray-700 block -mt-1">Machines</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('specs')}
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Specifications
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              FAQ
            </button>
            <button 
              className="btn-glow flex items-center gap-2 px-5 py-2 bg-nebulizer-purple text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
            >
              <ShoppingCart size={16} />
              <span>Buy Now</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 pb-6 px-6 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200 text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('specs')}
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200 text-left"
          >
            Specifications
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200 text-left"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200 text-left"
          >
            FAQ
          </button>
          <button 
            className="mt-4 btn-glow w-full flex items-center justify-center gap-2 px-5 py-3 bg-nebulizer-purple text-white rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
          >
            <ShoppingCart size={18} />
            <span>Buy Now</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
