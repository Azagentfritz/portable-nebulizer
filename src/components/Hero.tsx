
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const parallaxSpeed = 0.5;
      
      // Apply parallax effect only when the hero section is visible
      if (scrollY <= heroHeight) {
        imageRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-nebulizer-lavender bg-opacity-40 overlay-dots"></div>
      <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-nebulizer-purple bg-opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-nebulizer-purple bg-opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="max-w-lg">
              <div className="chip bg-nebulizer-lavender text-nebulizer-purple mb-5">
                TÜV Certified Quality
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                Breathe Easy, <br />
                <span className="text-nebulizer-purple">Anywhere.</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ultra-quiet, portable nebulizer with rechargeable battery. 
                Medical-grade technology in a compact design for home and travel use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-glow px-8 py-4 bg-nebulizer-purple text-white rounded-full text-base font-medium hover:shadow-lg transition-all duration-300">
                  Shop Now
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-full text-base font-medium hover:bg-nebulizer-lavender transition-all duration-300">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm font-medium">Warranty Included</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" ref={imageRef}>
            <div className="relative mx-auto transform translate-y-[-10%] lg:translate-y-0">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-nebulizer-purple bg-opacity-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
              <div className="relative z-10 animate-float image-shine">
                <img 
                  src="https://images.unsplash.com/photo-1631549916768-4119b4123a21?q=80&w=1179&auto=format&fit=crop" 
                  alt="Portable Nebulizer Device" 
                  className="mx-auto max-w-full h-auto object-contain rounded-xl shadow-product"
                  style={{
                    width: '350px',
                    height: '350px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToFeatures}>
          <div className="rounded-full bg-white p-2 shadow-md">
            <ArrowDown size={20} className="text-nebulizer-purple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
