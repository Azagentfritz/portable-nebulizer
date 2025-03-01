
import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModernComparison = () => {
  useEffect(() => {
    // Initialize animation for check marks
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all checkmarks
    document.querySelectorAll('.check-animation').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="comparison" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Nebulizer Stands Out</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our Military Grade Portable Nebulizer compares to traditional options
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-nebulizer-purple text-white">
            <div className="p-4 md:p-6 font-semibold border-r border-white/20">Features</div>
            <div className="p-4 md:p-6 font-semibold border-r border-white/20 text-center">
              Our Military Grade Portable Nebulizer
            </div>
            <div className="p-4 md:p-6 font-semibold text-center">Traditional Nebulizers</div>
          </div>

          {/* Comparison rows */}
          <ComparisonRow 
            feature="Portability" 
            ours={true} 
            traditional={false}
            highlight={true}
          />
          <ComparisonRow 
            feature="Battery Operated" 
            ours={true} 
            traditional={false}
          />
          <ComparisonRow 
            feature="Ultra-Quiet Operation" 
            ours={true} 
            traditional={false}
            highlight={true}
          />
          <ComparisonRow 
            feature="Quick Treatment Time" 
            ours={true} 
            traditional={false}
          />
          <ComparisonRow 
            feature="Compact & Lightweight" 
            ours={true} 
            traditional={false}
            highlight={true}
          />
          <ComparisonRow 
            feature="Child-Friendly Design" 
            ours={true} 
            traditional={false}
          />
          <ComparisonRow 
            feature="Travel-Ready" 
            ours={true} 
            traditional={false}
            highlight={true}
          />
          <ComparisonRow 
            feature="No Medication Waste" 
            ours={true} 
            traditional={false}
          />
          <ComparisonRow 
            feature="USB Rechargeable" 
            ours={true} 
            traditional={false}
            highlight={true}
          />
        </div>
      </div>
    </section>
  );
};

interface ComparisonRowProps {
  feature: string;
  ours: boolean;
  traditional: boolean;
  highlight?: boolean;
}

const ComparisonRow = ({ feature, ours, traditional, highlight = false }: ComparisonRowProps) => {
  return (
    <div className={cn("grid grid-cols-3 border-b border-gray-200", 
      highlight ? "bg-nebulizer-lavender bg-opacity-40" : "bg-white")}>
      <div className="p-4 md:p-6 border-r border-gray-200 font-medium">{feature}</div>
      <div className="p-4 md:p-6 border-r border-gray-200 flex justify-center items-center">
        {ours ? (
          <div className="check-animation bg-nebulizer-purple text-white rounded-full p-1">
            <Check size={20} className="opacity-0 animate-delay-300" />
          </div>
        ) : (
          <X size={20} className="text-red-500" />
        )}
      </div>
      <div className="p-4 md:p-6 flex justify-center items-center">
        {traditional ? (
          <div className="bg-green-500 text-white rounded-full p-1">
            <Check size={20} />
          </div>
        ) : (
          <X size={20} className="text-red-500" />
        )}
      </div>
    </div>
  );
};

export default ModernComparison;
