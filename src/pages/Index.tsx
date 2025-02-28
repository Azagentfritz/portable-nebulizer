
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import ProductComparison from '@/components/ProductComparison';
import Footer from '@/components/Footer';
import AgeGroups from '@/components/AgeGroups';
import { ShoppingBag } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Portable Nebulizer Machine | High Quality Medical Ultrasonic Device';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium portable nebulizer machine with rechargeable battery. Ultra-quiet, TÜV certified medical ultrasonic nebulizer for home, clinic, and travel use.');
    }
    
    // Scroll reveal effect
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });

      // Show sticky button once user scrolls past the hero
      if (isMobile) {
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          setShowStickyButton(heroBottom < 0);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to reveal above-the-fold elements
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Force scroll to top and trigger rerendering
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force a rerender of all elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
      setTimeout(() => {
        section.style.display = '';
      }, 10);
    });
  }, []);

  const scrollToTwoPack = () => {
    // First, find the pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      
      // After scrolling to the pricing section, find and highlight the "Most Popular" plan
      setTimeout(() => {
        const popularPlan = document.querySelector('.popular-plan');
        if (popularPlan) {
          // Add a subtle highlight effect
          popularPlan.classList.add('highlight-plan');
          setTimeout(() => {
            popularPlan.classList.remove('highlight-plan');
          }, 1500);
        }
      }, 800); // Delay to allow the scroll to complete
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <AgeGroups />
        <Pricing />
        <ProductComparison />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Mobile-only sticky button */}
      {isMobile && showStickyButton && (
        <button 
          onClick={scrollToTwoPack}
          className="fixed bottom-0 left-0 right-0 bg-nebulizer-purple text-white py-4 px-6 shadow-lg z-50 flex items-center justify-center animate-bounce-slow"
          aria-label="View Double Pack Offer"
        >
          <ShoppingBag size={24} />
          <span className="ml-2 font-medium">Best Deal: Double Pack</span>
        </button>
      )}
    </div>
  );
};

export default Index;
