
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
  const [showStickyButton, setShowStickyButton] = useState(false);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Portable Nebulizer Machines: The Ultimate Guide to Benefits, Types, and Usage',
      excerpt: 'Learn everything about portable nebulizer machines: how they work, their advantages over traditional nebulizers, and tips for choosing the right one for your respiratory needs.',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: '/lovable-uploads/19e77ff9-6d6e-4ab6-b359-6579f89ca640.png',
      slug: 'ultimate-guide-to-portable-nebulizers'
    },
    // More blog posts will be added here in the future
  ];

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
        <PictureTestimonials />
        <Features />
        <AgeGroups />
        <ModernComparison />
        <Pricing />
        <Testimonials />
        <FAQ />
        
        {/* Blog Section */}
        <section id="blog" className="bg-nebulizer-gray py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Respiratory Health Insights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest articles on portable nebulizer machines and respiratory care advice
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 reveal">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Link to={`/blog/${post.slug}`} className="block h-full">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-wrap items-center text-gray-600 mb-3">
                        <div className="flex items-center mr-6 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Clock size={16} className="mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-2xl font-bold mb-4 hover:text-nebulizer-purple transition-colors">{post.title}</h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-nebulizer-purple font-medium hover:underline"
                      >
                        Read Article
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Link 
                  to="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-nebulizer-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  View All Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
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
