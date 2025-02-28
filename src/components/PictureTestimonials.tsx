
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TestimonialWithImageProps = {
  name: string;
  role: string;
  comment: string;
  rating: number;
  imageSrc: string;
};

const testimonials: TestimonialWithImageProps[] = [
  {
    name: "Emma Thompson",
    role: "Asthma Patient",
    comment: "This nebulizer has transformed how I manage my asthma. So compact yet powerful!",
    rating: 5,
    imageSrc: "/lovable-uploads/9497466d-cc73-4fac-b7c3-9bd6145cbdb8.png"
  },
  {
    name: "Dr. James Chen",
    role: "Pulmonologist",
    comment: "I recommend this to all my patients. The silent operation and efficiency are unmatched.",
    rating: 5,
    imageSrc: "/lovable-uploads/29cbaf09-0dc9-46bb-8d98-6bce6a56fec0.png"
  },
  {
    name: "Sophia Rodriguez",
    role: "Mother of Two",
    comment: "My children don't fear treatment anymore. It's quick, quiet, and actually fun for them!",
    rating: 5,
    imageSrc: "/lovable-uploads/66f373d2-fc3f-43ad-97d9-c4fb960a2a81.png"
  },
  {
    name: "Robert Williams",
    role: "Travel Enthusiast",
    comment: "Takes up almost no space in my luggage. I never travel without it now.",
    rating: 4,
    imageSrc: "/lovable-uploads/5e8b6184-6a07-40a1-8ac3-9b6cb7b1da59.png"
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Family Physician",
    comment: "The consistency of medication delivery is impressive. I've seen better outcomes in my patients using this device.",
    rating: 5,
    imageSrc: "/lovable-uploads/9497466d-cc73-4fac-b7c3-9bd6145cbdb8.png"
  },
  {
    name: "Michael Chang",
    role: "COPD Patient",
    comment: "As someone with chronic respiratory issues, having a reliable nebulizer is essential. This one exceeds all expectations.",
    rating: 5,
    imageSrc: "/lovable-uploads/29cbaf09-0dc9-46bb-8d98-6bce6a56fec0.png"
  },
  {
    name: "Lisa Peterson",
    role: "Respiratory Therapist",
    comment: "The technology in this device is state-of-the-art. My clients report much better experiences compared to other models.",
    rating: 5,
    imageSrc: "/lovable-uploads/66f373d2-fc3f-43ad-97d9-c4fb960a2a81.png"
  },
  {
    name: "David Martinez",
    role: "Athlete with Asthma",
    comment: "This has been a game-changer for my pre-workout routine. Compact enough to keep in my gym bag.",
    rating: 4,
    imageSrc: "/lovable-uploads/5e8b6184-6a07-40a1-8ac3-9b6cb7b1da59.png"
  }
];

const TestimonialCard = ({ name, role, comment, rating, imageSrc }: TestimonialWithImageProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full max-w-xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-nebulizer-lavender"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className={cn(
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                )} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">{comment}</p>
    </div>
  );
};

const PictureTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto advance slides every 5 seconds - optimal for reading testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (sectionRef.current) {
              sectionRef.current.querySelectorAll('.reveal').forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('active');
                }, i * 150);
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

  return (
    <section className="py-16 bg-gradient-to-b from-nebulizer-lavender to-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <div className="chip bg-white text-nebulizer-purple inline-block mb-4">
            Real Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            From Our Community
          </h2>
          <p className="text-lg text-gray-700">
            See how our portable nebulizer is making a difference in people's lives
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto reveal">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0"
                    style={{ display: index === activeSlide ? 'block' : 'none' }}
                  >
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-nebulizer-purple hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2 justify-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-200",
                    activeSlide === index 
                      ? "bg-nebulizer-purple w-5" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-nebulizer-purple hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureTestimonials;
