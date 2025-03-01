import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { useIsMobile } from '@/hooks/use-mobile';
import MobileOrderButton from '@/components/MobileOrderButton';

const Index = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const scrollToDoublePack = () => {
    const doublePack = document.querySelector('.popular-plan');
    if (doublePack) {
      doublePack.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = 'Portable Nebulizer Machine | High Quality Medical Ultrasonic Device';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium portable nebulizer machine with rechargeable battery. Ultra-quiet, TÜV certified medical ultrasonic nebulizer for home, clinic, and travel use.');
    }
    
    const checkFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        const faviconHref = favicon.getAttribute('href');
        if (faviconHref) {
          favicon.setAttribute('href', faviconHref + '?v=' + new Date().getTime());
        }
      }
    };
    
    setTimeout(checkFavicon, 100);
    
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
      setTimeout(() => {
        section.style.display = '';
      }, 10);
    });
  }, [location]);

  useEffect(() => {
    const preloadLCPImage = () => {
      const lcpImageLink = document.createElement('link');
      lcpImageLink.rel = 'preload';
      lcpImageLink.as = 'image';
      lcpImageLink.href = '/lovable-uploads/9e30091b-1720-49b5-98d2-8919af272be4.png';
      document.head.appendChild(lcpImageLink);
    };
    
    preloadLCPImage();
  }, []);

  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <PictureTestimonials />
        <section id="features" className="w-full">
          <Features />
        </section>
        <AgeGroups />
        <ModernComparison />
        <Testimonials />
        <section id="pricing" className="w-full">
          <Pricing />
        </section>
        <section id="faq" className="w-full">
          <FAQ />
        </section>
      </main>
      <Footer />
      <MobileOrderButton onClick={scrollToDoublePack} />
    </div>
  );
};

export default Index;
