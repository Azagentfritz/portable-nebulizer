
import React, { useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ComparisonFeature = ({ 
  feature, 
  premium = true, 
  cheap = false 
}: { 
  feature: string; 
  premium?: boolean; 
  cheap?: boolean;
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-3 py-3 md:py-4 border-b border-gray-100 last:border-0">
      <div className={`text-gray-700 text-xs md:text-base pr-2 ${isMobile ? 'col-span-1' : ''}`}>
        {feature}
      </div>
      <div className="text-center">
        {premium ? 
          <Check className="mx-auto text-green-500" size={isMobile ? 16 : 20} /> : 
          <X className="mx-auto text-red-500" size={isMobile ? 16 : 20} />
        }
      </div>
      <div className="text-center">
        {cheap ? 
          <Check className="mx-auto text-green-500" size={isMobile ? 16 : 20} /> : 
          <X className="mx-auto text-red-500" size={isMobile ? 16 : 20} />
        }
      </div>
    </div>
  );
};

const ModernComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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

  return (
    <section id="comparison" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal">
            <div className="chip bg-nebulizer-lavender text-nebulizer-purple inline-block mb-4">
              Why Choose Premium
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Premium vs. Budget Nebulizers
            </h2>
            <p className="text-sm md:text-lg text-gray-700">
              Not all nebulizers are created equal. See how our premium portable nebulizer 
              compares to budget alternatives on the market.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal">
            <div className="grid grid-cols-3 bg-nebulizer-lavender bg-opacity-30 py-3 md:py-4">
              <div className="text-gray-900 font-medium text-xs md:text-base pl-2 md:pl-6">Features</div>
              <div className="text-center font-medium text-nebulizer-purple text-xs md:text-base">Our Premium</div>
              <div className="text-center font-medium text-gray-700 text-xs md:text-base">Budget Models</div>
            </div>
            
            <div className="p-2 md:p-6">
              <ComparisonFeature feature="Medical-grade materials" premium={true} cheap={false} />
              <ComparisonFeature feature="Ultra-quiet operation" premium={true} cheap={false} />
              <ComparisonFeature feature="Long battery life" premium={true} cheap={false} />
              <ComparisonFeature feature="Fine particle size" premium={true} cheap={false} />
              <ComparisonFeature feature="TÜV certified" premium={true} cheap={false} />
              <ComparisonFeature feature="Rechargeable" premium={true} cheap={true} />
              <ComparisonFeature feature="Portable design" premium={true} cheap={true} />
              <ComparisonFeature feature="24/7 Support" premium={true} cheap={false} />
              <ComparisonFeature feature="30-day guarantee" premium={true} cheap={false} />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 reveal">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 text-center w-full md:flex-1 mx-0 md:mx-2 mb-4 md:mb-0">
              <div className="font-medium text-nebulizer-purple mb-1 text-sm md:text-base">Our Premium Model</div>
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">$129.99</div>
              <div className="text-xs md:text-sm text-gray-600">Lifetime value</div>
            </div>
            
            <div className="flex flex-row md:flex-col items-center justify-center w-full md:w-auto mb-4 md:mb-0 md:mx-2">
              <span className="text-gray-500 font-medium mx-2 md:mb-2 md:mx-0 text-sm md:text-base">VS</span>
              <div className="w-20 h-px bg-gray-300 hidden md:block"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 text-center w-full md:flex-1 mx-0 md:mx-2">
              <div className="font-medium text-gray-700 mb-1 text-sm md:text-base">Budget Models</div>
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">$49.99</div>
              <div className="text-xs md:text-sm text-gray-600">Frequent replacements needed</div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 text-center reveal">
            <p className="text-gray-600 italic mb-4 md:mb-6 text-xs md:text-base">
              "Investing in quality means better treatment efficacy and device longevity."
            </p>
            <button className="btn-glow inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-nebulizer-purple text-white rounded-full text-xs md:text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm">
              <span>See Our Premium Models</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparison;
