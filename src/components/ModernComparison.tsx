
import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureProps = {
  name: string;
  ourProduct: boolean;
  competitor: boolean;
};

const features: FeatureProps[] = [
  { name: "Medical Grade Reliability", ourProduct: true, competitor: false },
  { name: "Ultra-Quiet Operation", ourProduct: true, competitor: false },
  { name: "Rechargeable Battery", ourProduct: true, competitor: true },
  { name: "Compact & Portable", ourProduct: true, competitor: true },
  { name: "Medical-grade Nebulization", ourProduct: true, competitor: false },
  { name: "TÜV Certified", ourProduct: true, competitor: false },
  // Removed 1-year warranty feature
];

const CheckIcon = ({ checked, delay }: { checked: boolean; delay: number }) => (
  <div 
    className={cn(
      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
      "opacity-0 transform translate-y-4",
      checked ? "bg-nebulizer-purple text-white" : "bg-gray-200 text-gray-400"
    )}
    style={{ 
      animationDelay: `${delay}ms`,
      animationFillMode: 'forwards',
      animationName: 'check-animation',
      animationDuration: '0.5s',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }}
  >
    {checked ? <Check size={18} /> : <X size={18} />}
  </div>
);

const ModernComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
              
              // Add the animation class to check icons once the section is visible
              sectionRef.current.querySelectorAll('.check-row').forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('check-visible');
                }, 300 + i * 150);
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
    <section className="section-padding bg-white" ref={sectionRef}>
      <style>
        {`
        @keyframes check-animation {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          70% {
            opacity: 1;
            transform: translateY(0) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .check-row {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        
        .check-row.check-visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-white text-nebulizer-purple shadow-sm border border-purple-100 inline-block mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How We Compare
          </h2>
          <p className="text-lg text-gray-700">
            See why our Medical Grade Nebulizer outperforms traditional options in every way that matters.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden reveal animate-scale-up">
          {/* Product image headers */}
          <div className="grid grid-cols-3 border-b border-gray-100">
            <div className="col-span-1"></div>
            <div className="col-span-1 p-4 text-center">
              <div className="h-48 flex items-center justify-center mb-2">
                <img 
                  src="/lovable-uploads/5e8b6184-6a07-40a1-8ac3-9b6cb7b1da59.png" 
                  alt="Our Advanced Nebulizer" 
                  className="h-full object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-1 p-4 text-center">
              <div className="h-48 flex items-center justify-center mb-2">
                <div className="relative h-full w-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/5e8b6184-6a07-40a1-8ac3-9b6cb7b1da59.png" 
                    alt="Traditional Nebulizer" 
                    className="h-full object-contain opacity-40 grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 bg-nebulizer-lavender p-6 border-b border-gray-100">
            <div className="col-span-1 text-gray-700 font-semibold">Features</div>
            <div className="col-span-1 text-nebulizer-purple font-bold text-center">Our Nebulizer</div>
            <div className="col-span-1 text-gray-500 font-medium text-center">Traditional Nebulizers</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-5 items-center check-row ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="col-span-1 text-gray-700">{feature.name}</div>
                <div className="col-span-1 flex justify-center">
                  <CheckIcon checked={feature.ourProduct} delay={index * 100} />
                </div>
                <div className="col-span-1 flex justify-center">
                  <CheckIcon checked={feature.competitor} delay={index * 100 + 50} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-nebulizer-lavender bg-opacity-30 text-center">
            <p className="text-gray-700 font-medium">
              Experience the difference with our Medical Grade Nebulizer technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparison;
