
import React, { useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ComparisonFeature = ({ 
  feature, 
  premium = true, 
  cheap = false 
}: { 
  feature: string; 
  premium?: boolean; 
  cheap?: boolean;
}) => {
  return (
    <div className="grid grid-cols-3 py-4 border-b border-gray-100 last:border-0">
      <div className="text-gray-700">{feature}</div>
      <div className="text-center">
        {premium ? 
          <Check className="mx-auto text-green-500" size={20} /> : 
          <X className="mx-auto text-red-500" size={20} />
        }
      </div>
      <div className="text-center">
        {cheap ? 
          <Check className="mx-auto text-green-500" size={20} /> : 
          <X className="mx-auto text-red-500" size={20} />
        }
      </div>
    </div>
  );
};

const ProductComparison = () => {
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
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip bg-nebulizer-lavender text-nebulizer-purple inline-block mb-4">
              Why Choose Premium
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Premium vs. Budget Nebulizers
            </h2>
            <p className="text-lg text-gray-700">
              Not all nebulizers are created equal. See how our premium portable nebulizer 
              compares to budget alternatives on the market.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal">
            <div className="grid grid-cols-3 bg-nebulizer-lavender bg-opacity-30 py-4">
              <div className="text-gray-900 font-medium pl-6">Features</div>
              <div className="text-center font-medium text-nebulizer-purple">Our Premium Model</div>
              <div className="text-center font-medium text-gray-700">Budget Models</div>
            </div>
            
            <div className="p-6">
              <ComparisonFeature feature="Medical-grade materials" premium={true} cheap={false} />
              <ComparisonFeature feature="Ultra-quiet operation (<36dB)" premium={true} cheap={false} />
              <ComparisonFeature feature="Long battery life (6+ hours)" premium={true} cheap={false} />
              <ComparisonFeature feature="Fine particle size for deep penetration" premium={true} cheap={false} />
              <ComparisonFeature feature="TÜV certified" premium={true} cheap={false} />
              <ComparisonFeature feature="Rechargeable battery" premium={true} cheap={true} />
              <ComparisonFeature feature="Portable design" premium={true} cheap={true} />
              <ComparisonFeature feature="Technical support" premium={true} cheap={false} />
              <ComparisonFeature feature="2-year warranty" premium={true} cheap={false} />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-12 reveal">
            <div className="bg-white rounded-xl shadow-sm p-5 text-center flex-1 mx-2">
              <div className="font-medium text-nebulizer-purple mb-1">Our Premium Model</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$129.99</div>
              <div className="text-sm text-gray-600">Lifetime value</div>
            </div>
            
            <div className="flex flex-col items-center mx-2">
              <span className="text-gray-500 font-medium mb-2">VS</span>
              <div className="w-20 h-px bg-gray-300"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-5 text-center flex-1 mx-2">
              <div className="font-medium text-gray-700 mb-1">Budget Models</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$49.99</div>
              <div className="text-sm text-gray-600">Frequent replacements needed</div>
            </div>
          </div>
          
          <div className="mt-8 text-center reveal">
            <p className="text-gray-600 italic mb-6">
              "Investing in quality means better treatment efficacy and device longevity."
            </p>
            <button className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-nebulizer-purple text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm">
              <span>See Our Premium Models</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
