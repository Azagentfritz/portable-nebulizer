
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current page is blog-related
  const isBlogPage = location.pathname.includes('/blog');

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
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-nebulizer-purple"
              >
                {/* Main nebulizer body */}
                <rect x="6" y="10" width="12" height="10" rx="2" />
                {/* Mouthpiece/nozzle */}
                <path d="M12 10V7" />
                <path d="M10 7h4" />
                {/* Mist/vapor coming out */}
                <path d="M8 6C8 6 9 4 12 4C15 4 16 6 16 6" />
                <path d="M7 6C7 6 8 3 12 3C16 3 17 6 17 6" />
                {/* Control buttons */}
                <circle cx="9" cy="14" r="1" />
                <circle cx="15" cy="14" r="1" />
              </svg>
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-nebulizer-purple">Portable Nebulizer</span>
              <span className="text-sm md:text-base font-light text-gray-700 block -mt-1">Machines</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isBlogPage && (
              <>
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
              </>
            )}
            <Link 
              to="/blog"
              className="text-sm font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200"
            >
              Blog
            </Link>
            {!isBlogPage ? (
              <button 
                onClick={() => scrollToSection('pricing')}
                className="btn-glow flex items-center gap-2 px-5 py-2 bg-nebulizer-purple text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
              >
                <ShoppingCart size={16} />
                <span>Buy Now</span>
              </button>
            ) : (
              <Link
                to="/#pricing"
                className="btn-glow flex items-center gap-2 px-5 py-2 bg-nebulizer-purple text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
              >
                <ShoppingCart size={16} />
                <span>Buy Now</span>
              </Link>
            )}
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
          {!isBlogPage && (
            <>
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
            </>
          )}
          <Link 
            to="/blog"
            className="text-lg font-medium text-gray-800 hover:text-nebulizer-purple transition-colors duration-200 text-left"
          >
            Blog
          </Link>
          {!isBlogPage ? (
            <button 
              onClick={() => scrollToSection('pricing')}
              className="mt-4 btn-glow w-full flex items-center justify-center gap-2 px-5 py-3 bg-nebulizer-purple text-white rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
            >
              <ShoppingCart size={18} />
              <span>Buy Now</span>
            </button>
          ) : (
            <Link 
              to="/#pricing"
              className="mt-4 btn-glow w-full flex items-center justify-center gap-2 px-5 py-3 bg-nebulizer-purple text-white rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
            >
              <ShoppingCart size={18} />
              <span>Buy Now</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
