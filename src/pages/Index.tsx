
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Specs from '@/components/Specs';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import ProductComparison from '@/components/ProductComparison';
import Footer from '@/components/Footer';

const Index = () => {
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
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to reveal above-the-fold elements
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specs />
        <Pricing />
        <ProductComparison />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
