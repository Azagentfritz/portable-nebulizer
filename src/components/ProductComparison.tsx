
import React, { useRef, useEffect } from 'react';
import { Check, X, Shield, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ComparisonFeature = ({ 
  feature, 
  militaryGrade = true, 
  budget = false 
}: { 
  feature: string; 
  militaryGrade?: boolean; 
  budget?: boolean;
}) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 text-gray-700">{feature}</div>
      <div className="w-32 text-center">
        {militaryGrade ? 
          <div className="flex justify-center">
            <Check className="text-green-500" size={20} />
          </div> : 
          <div className="flex justify-center">
            <X className="text-red-500" size={20} />
          </div>
        }
      </div>
      <div className="w-32 text-center">
        {budget ? 
          <div className="flex justify-center">
            <Check className="text-green-500" size={20} />
          </div> : 
          <div className="flex justify-center">
            <X className="text-red-500" size={20} />
          </div>
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
              Why Choose Military Grade
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Military Grade vs. Budget Nebulizers
            </h2>
            <p className="text-lg text-gray-700">
              Experience the difference between our military-grade portable nebulizer 
              and budget alternatives available on the market.
            </p>
          </div>
          
          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-2xl shadow-lg">
              {/* Left column - Features */}
              <div className="bg-gray-50 p-6 flex flex-col justify-center">
                <div className="mb-8">
                  <Shield className="h-12 w-12 text-nebulizer-purple mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Feature Comparison</h3>
                  <p className="text-gray-600">See how our military-grade technology outperforms the competition</p>
                </div>
                <div className="hidden md:block h-64 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="h-32 w-32 text-gray-300" />
                  </div>
                </div>
              </div>
              
              {/* Middle column - Military Grade */}
              <div className="bg-nebulizer-purple text-white p-6">
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                      Military Grade
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Our Premium Model</h3>
                    <p className="opacity-80">Superior performance and reliability</p>
                    <div className="mt-6 text-3xl font-bold">$129.99</div>
                    <p className="text-sm opacity-80 mt-1">Lifetime value</p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full py-3 px-6 bg-white text-nebulizer-purple font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200">
                      Select Military Grade
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right column - Budget */}
              <div className="bg-white p-6">
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                      Economy
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Budget Models</h3>
                    <p className="text-gray-600">Basic functionality</p>
                    <div className="mt-6 text-3xl font-bold text-gray-900">$49.99</div>
                    <p className="text-sm text-gray-500 mt-1">Frequent replacements needed</p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200">
                      View Budget Options
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 py-6 px-6 border-b border-gray-100">
                <div className="text-gray-900 font-medium">Features</div>
                <div className="text-center font-medium text-nebulizer-purple">Military Grade</div>
                <div className="text-center font-medium text-gray-700">Budget Models</div>
              </div>
              
              <div className="px-6 py-4">
                <ComparisonFeature feature="Medical-grade materials" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="Ultra-quiet operation (<36dB)" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="Long battery life (6+ hours)" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="Fine particle size for deep penetration" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="TÜV certified" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="Rechargeable battery" militaryGrade={true} budget={true} />
                <ComparisonFeature feature="Portable design" militaryGrade={true} budget={true} />
                <ComparisonFeature feature="24/7 Technical support" militaryGrade={true} budget={false} />
                <ComparisonFeature feature="30-day money-back guarantee" militaryGrade={true} budget={false} />
              </div>
            </div>
            
            <div className="mt-8 text-center reveal">
              <p className="text-gray-600 italic mb-6">
                "Investing in military-grade quality means better treatment efficacy and device longevity."
              </p>
              <button className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-nebulizer-purple text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm">
                <span>See Our Military Grade Models</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
