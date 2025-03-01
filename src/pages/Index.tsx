
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AgeGroups from '@/components/AgeGroups';
import PictureTestimonials from '@/components/PictureTestimonials';
import ModernComparison from '@/components/ModernComparison';
import { ShoppingBag, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  // Removing the showStickyButton state since we're removing the sticky button

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

      // Removing the sticky button logic
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
        <PictureTestimonials />
        <section id="features">
          <Features />
        </section>
        <AgeGroups />
        <ModernComparison />
        <Testimonials />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />

      {/* Removed the sticky button component */}
    </div>
  );
};

export default Index;
