
import React, { useState, useEffect, useRef } from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type PlanProps = {
  title: string;
  subtitle: string;
  price: number;
  discount?: string;
  features: string[];
  popular?: boolean;
  imageSrc?: string;
  doubleImage?: boolean;
  tripleImage?: boolean;
  paypalLink: string;
  onClick: (paypalLink: string) => void;
};

const PricingPlan = ({ title, subtitle, price, discount, features, popular, imageSrc, doubleImage, tripleImage, paypalLink, onClick }: PlanProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full",
        popular 
          ? "border-2 border-nebulizer-purple shadow-lg transform scale-105 md:scale-110 hover:-translate-y-1 popular-plan" 
          : "border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1"
      )}
    >
      {popular && (
        <div className="bg-nebulizer-purple py-1.5 text-center">
          <span className="text-white text-sm font-medium">Most Popular</span>
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{title}</h3>
        <p className="text-sm text-gray-500 mb-5 text-center">{subtitle}</p>
        
        <div className="flex-grow">
          {imageSrc && !doubleImage && !tripleImage && (
            <div className="mb-6 flex justify-center">
              <div className="relative w-44 h-44 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt="Portable Nebulizer Machine" 
                  className="w-36 h-36 object-contain image-shine"
                />
              </div>
            </div>
          )}

          {imageSrc && doubleImage && (
            <div className="mb-6 flex justify-center">
              <div className="relative flex -space-x-6">
                <div className="w-40 h-40 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                  <img 
                    src={imageSrc} 
                    alt="Portable Nebulizer Machine" 
                    className="w-32 h-32 object-contain image-shine"
                  />
                </div>
                <div className="w-40 h-40 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                  <img 
                    src={imageSrc} 
                    alt="Portable Nebulizer Machine" 
                    className="w-32 h-32 object-contain image-shine"
                  />
                </div>
              </div>
            </div>
          )}

          {imageSrc && tripleImage && (
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="flex justify-center mb-1">
                  <div className="w-32 h-32 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                    <img 
                      src={imageSrc} 
                      alt="Portable Nebulizer Machine" 
                      className="w-24 h-24 object-contain image-shine"
                    />
                  </div>
                </div>
                <div className="flex -space-x-6 -mt-6">
                  <div className="w-32 h-32 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                    <img 
                      src={imageSrc} 
                      alt="Portable Nebulizer Machine" 
                      className="w-24 h-24 object-contain image-shine"
                    />
                  </div>
                  <div className="w-32 h-32 bg-nebulizer-lavender bg-opacity-30 rounded-full flex items-center justify-center">
                    <img 
                      src={imageSrc} 
                      alt="Portable Nebulizer Machine" 
                      className="w-24 h-24 object-contain image-shine"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="mb-4 text-center">
            <div className="flex items-baseline justify-center">
              <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
              {discount && <span className="ml-2 text-sm text-red-500 line-through">{discount}</span>}
            </div>
            <p className="text-xs text-gray-500 mt-1">One-time payment</p>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <button 
          onClick={() => onClick(paypalLink)}
          className={cn(
            "w-full py-3 rounded-lg font-medium transition-all duration-200 btn-glow",
            popular 
              ? "bg-nebulizer-purple text-white hover:bg-opacity-90" 
              : "bg-white border border-nebulizer-purple text-nebulizer-purple hover:bg-nebulizer-lavender"
          )}
        >
          Choose {title}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
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
    
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes highlight-pulse {
        0% { box-shadow: 0 0 0 0 rgba(126, 58, 242, 0.6); }
        70% { box-shadow: 0 0 0 10px rgba(126, 58, 242, 0); }
        100% { box-shadow: 0 0 0 0 rgba(126, 58, 242, 0); }
      }
      .highlight-plan {
        animation: highlight-pulse 1.5s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  const handlePlanSelect = (paypalLink: string) => {
    console.log(`Redirecting to: ${paypalLink}`);
    window.open(paypalLink, '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-nebulizer-gray" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-white text-nebulizer-purple inline-block mb-4">
            Pricing Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-gray-700">
            Select the package that suits your needs, with bundled options for families or healthcare providers.
            All plans include free shipping and 24/7 customer support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:transform md:translate-y-4 reveal">
            <PricingPlan
              title="Single Unit"
              subtitle="Perfect for individual use"
              price={79.95}
              imageSrc="/lovable-uploads/9e30091b-1720-49b5-98d2-8919af272be4.png"
              features={[
                "1 Portable Nebulizer",
                "Adult and Child Masks",
                "Carrying Case",
                "USB Charging Cable",
                "24/7 Technical Support",
                "Free Shipping"
              ]}
              paypalLink="https://www.paypal.com/ncp/payment/P85QX2XA59EJG"
              onClick={handlePlanSelect}
            />
          </div>
          
          <div className="reveal">
            <PricingPlan
              title="Double Pack"
              subtitle="Ideal for couples or backup"
              price={139.95}
              discount="$159.90"
              imageSrc="/lovable-uploads/9e30091b-1720-49b5-98d2-8919af272be4.png"
              doubleImage={true}
              features={[
                "2 Portable Nebulizers",
                "Adult and Child Masks",
                "Premium Carrying Case",
                "USB Charging Cable",
                "Priority Technical Support",
                "Free Priority Shipping"
              ]}
              popular={true}
              paypalLink="https://www.paypal.com/ncp/payment/K94FBB6NV5J2C"
              onClick={handlePlanSelect}
            />
          </div>
          
          <div className="md:transform md:translate-y-4 reveal">
            <PricingPlan
              title="Family Pack"
              subtitle="Perfect for families"
              price={199.95}
              discount="$239.85"
              imageSrc="/lovable-uploads/9e30091b-1720-49b5-98d2-8919af272be4.png"
              tripleImage={true}
              features={[
                "3 Portable Nebulizers",
                "Adult and Child Masks",
                "Premium Carrying Cases",
                "USB Charging Cables",
                "VIP Technical Support",
                "Free Express Shipping"
              ]}
              paypalLink="https://www.paypal.com/ncp/payment/4LNDABWLGM6W8"
              onClick={handlePlanSelect}
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white p-6 rounded-xl shadow-sm reveal">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Try our nebulizer risk-free with our 30-day money-back guarantee. If you're not completely 
                satisfied, return it for a full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
