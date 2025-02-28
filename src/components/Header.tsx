
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
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
            className="text-xl md:text-2xl font-bold text-nebulizer-purple hover:opacity-90 transition-opacity"
          >
            <span className="mr-1">Portable</span>
            <span className="font-light">Nebulizer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#features" 
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              to="/#specs" 
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Specifications
            </Link>
            <Link 
              to="/#pricing" 
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link 
              to="/#faq" 
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              FAQ
            </Link>
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
          <Link 
            to="/#features" 
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
          >
            Features
          </Link>
          <Link 
            to="/#specs" 
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
          >
            Specifications
          </Link>
          <Link 
            to="/#pricing" 
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link 
            to="/#faq" 
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
          >
            FAQ
          </Link>
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
