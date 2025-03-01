
import React, { useEffect, useRef } from 'react';
import { Battery, Volume2, Activity, Droplets, Clock, Check } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-nebulizer-lavender flex items-center justify-center mb-4 group-hover:bg-nebulizer-purple group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
            });
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
    <section id="features" className="section-padding bg-nebulizer-gray" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-white text-nebulizer-purple inline-block mb-4">
            Innovative Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Designed for Life in Motion
          </h2>
          <p className="text-lg text-gray-700">
            Our portable nebulizer combines cutting-edge technology with user-friendly design, 
            making respiratory therapy convenient and effective - wherever you go.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="reveal">
            <FeatureCard 
              icon={<Battery size={24} />}
              title="Rechargeable Battery"
              description="Built-in battery delivers multiple treatments on a single charge, perfect for travel and on-the-go use."
            />
          </div>
          
          <div className="reveal">
            <FeatureCard 
              icon={<Volume2 size={24} />}
              title="Ultra-Quiet Operation"
              description="With noise levels below 36dB, enjoy whisper-quiet treatments that won't disturb others."
            />
          </div>
          
          <div className="reveal">
            <FeatureCard 
              icon={<Activity size={24} />}
              title="High Efficiency"
              description="Advanced ultrasonic technology delivers medication effectively with minimal waste."
            />
          </div>
          
          <div className="reveal">
            <FeatureCard 
              icon={<Droplets size={24} />}
              title="Fine Particle Size"
              description="Produces optimal particle size for deep lung penetration and enhanced medication effectiveness."
            />
          </div>
          
          <div className="reveal">
            <FeatureCard 
              icon={<Clock size={24} />}
              title="Quick Treatments"
              description="Complete treatments in minutes, not hours, with our high-performance nebulizer."
            />
          </div>
          
          <div className="reveal">
            <FeatureCard 
              icon={<Check size={24} />}
              title="Easy to Clean"
              description="Simple disassembly and cleaning process ensures hygiene and optimal performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
