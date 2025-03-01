
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  stars: number;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "This portable nebulizer has been a game-changer for managing my asthma. It's so quiet and convenient that I can use it anywhere without drawing attention.",
    author: "Sarah Johnson",
    role: "Asthma Patient",
    stars: 5
  },
  {
    quote: "As a pediatrician, I recommend this nebulizer to parents of children with respiratory conditions. It's easy to use, quiet, and very effective.",
    author: "Dr. Michael Chen",
    role: "Pediatrician",
    stars: 5
  },
  {
    quote: "I travel frequently for work, and this nebulizer has made it so much easier to manage my COPD. It's compact, lightweight, and the battery lasts longer than advertised.",
    author: "Robert Davis",
    role: "Business Traveler",
    stars: 4
  },
  {
    quote: "After trying several portable nebulizers, this is by far the best. The near-silent operation and consistent medication delivery make it worth every penny.",
    author: "Emily Martinez",
    role: "Respiratory Therapist",
    stars: 5
  },
  {
    quote: "The family pack was perfect for our household with multiple asthma sufferers. The quality is excellent, and the devices are so simple to maintain.",
    author: "Thomas Wilson",
    role: "Parent",
    stars: 5
  }
];

const TestimonialCard = ({ quote, author, role, stars }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5",
              i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <blockquote className="flex-grow mb-4">
        <p className="text-gray-700 italic">"{quote}"</p>
      </blockquote>
      <div className="mt-auto">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxSlides = testimonials.length - 2;

  const nextSlide = () => {
    setActiveSlide(prev => (prev < maxSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : maxSlides));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (sectionRef.current) {
              sectionRef.current.querySelectorAll('.reveal').forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('active');
                }, i * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section className="section-padding bg-nebulizer-lavender bg-opacity-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-white text-nebulizer-purple inline-block mb-4" style={{ color: "#5a189a" }}>
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700">
            Don't just take our word for it. Hear from healthcare professionals and individuals 
            who have experienced the difference our portable nebulizer makes.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 33.33}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-nebulizer-purple hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(maxSlides + 1)].map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "w-5 h-5 rounded-full transition-all duration-200", // Increased size for better touch targets
                  activeSlide === index 
                    ? "bg-nebulizer-purple" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial set ${index + 1}`}
                aria-current={activeSlide === index ? "true" : "false"}
              />
            ))}
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-nebulizer-purple hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
