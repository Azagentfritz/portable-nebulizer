import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  // Check if current page is blog-related or a policy page
  const isBlogPage = location.pathname.includes('/blog');
  const isPolicyPage = ['/privacy', '/terms', '/shipping', '/returns'].includes(location.pathname);
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold text-nebulizer-purple mb-4 block" aria-label="Portable Nebulizer Home">
              <span className="mr-1">Portable</span>
              <span className="font-light">Nebulizer</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Breathe easier with our state-of-the-art portable nebulizer, 
              designed for effective respiratory therapy anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-nebulizer-purple transition-colors" aria-label="Visit our Facebook page">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-nebulizer-purple transition-colors" aria-label="Visit our Twitter page">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-nebulizer-purple transition-colors" aria-label="Visit our Instagram page">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {!isBlogPage && !isPolicyPage && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/#features" 
                    className="text-gray-600 hover:text-nebulizer-purple transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#pricing" 
                    className="text-gray-600 hover:text-nebulizer-purple transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#faq" 
                    className="text-gray-600 hover:text-nebulizer-purple transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nebulizer-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-nebulizer-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-nebulizer-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-nebulizer-purple transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-nebulizer-purple transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-nebulizer-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">1547 Hayden Rd<br />Scottsdale, AZ 85257</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-nebulizer-purple mr-2 flex-shrink-0" />
                <span className="text-gray-600">support@portablenebulizer.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Portable Nebulizer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-nebulizer-purple transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-nebulizer-purple transition-colors">
              Terms
            </Link>
            <Link to="/shipping" className="text-sm text-gray-600 hover:text-nebulizer-purple transition-colors">
              Shipping
            </Link>
            <Link to="/returns" className="text-sm text-gray-600 hover:text-nebulizer-purple transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
