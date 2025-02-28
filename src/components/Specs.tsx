
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const SpecRow = ({
  label,
  value
}: {
  label: string;
  value: string;
}) => <div className="grid grid-cols-1 md:grid-cols-3 py-4 border-b border-gray-100">
    <div className="text-gray-600 font-medium">{label}</div>
    <div className="md:col-span-2 text-gray-900">{value}</div>
  </div>;

const Specs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 100);
            });
          }
          if (imgRef.current) {
            imgRef.current.classList.add('scale-100', 'opacity-100');
            imgRef.current.classList.remove('scale-95', 'opacity-0');
          }
        }
      });
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return <section id="specs" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="chip bg-nebulizer-lavender text-nebulizer-purple mb-4 reveal">
                Technical Specifications
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 reveal">
                Technical Details
              </h2>
              <p className="text-lg text-gray-700 mb-8 reveal">
                Our portable nebulizer combines advanced technology with thoughtful design,
                delivering effective respiratory treatment in a compact package.
              </p>
              
              <div className="space-y-2 reveal">
                <SpecRow label="Material" value="Medical-grade ABS Plastic" />
                <SpecRow label="Type" value="Ultrasonic Nebulizer" />
                <SpecRow label="Weight" value="0.3kg (10.6oz)" />
                <SpecRow label="Dimensions" value="14 × 12 × 7.5 cm" />
                <SpecRow label="Input Voltage" value="110V-240V (Universal)" />
                <SpecRow label="Battery" value="Rechargeable + AAA Battery Backup (2×)" />
                <SpecRow label="Noise Level" value="≤36dB (Ultra-Quiet)" />
                <SpecRow label="Certification" value="TÜV Certified" />
                <SpecRow label="Usage" value="Home, Clinic, Hospital, Travel" />
              </div>
              
              <div className="mt-8 pt-4 reveal">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Medical-Grade Quality:</span> Meets stringent healthcare standards for safety and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-nebulizer-purple bg-opacity-5 rounded-3xl transform rotate-3"></div>
            <img ref={imgRef} alt="Portable Nebulizer Technical Details" className="relative z-10 rounded-2xl w-full h-auto shadow-lg transform scale-95 opacity-0 transition-all duration-700 ease-out" src="/lovable-uploads/9497466d-cc73-4fac-b7c3-9bd6145cbdb8.png" />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-md reveal">
              <span className="font-medium text-nebulizer-purple">Ultra-Compact Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Specs;
