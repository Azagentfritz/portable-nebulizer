
import React from 'react';
import { Baby, User, HeartPulse, GraduationCap, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const AgeGroups = () => {
  const ageGroups = [
    {
      icon: <Baby className="h-10 w-10 mb-4 text-nebulizer-purple" />,
      title: "Infants & Toddlers",
      description: "Gentle and quiet operation perfect for babies. The soft mask attachment ensures comfortable treatment even for the youngest patients.",
      className: "bg-gradient-to-br from-secondary to-secondary/30",
    },
    {
      icon: <User className="h-10 w-10 mb-4 text-nebulizer-purple" />,
      title: "Children",
      description: "Kid-friendly design with quick operation times that keep children engaged during treatment. Easy to use for parents and caregivers.",
      className: "bg-gradient-to-br from-primary/20 to-secondary/20",
    },
    {
      icon: <GraduationCap className="h-10 w-10 mb-4 text-nebulizer-purple" />,
      title: "Adults",
      description: "Powerful medication delivery system that works efficiently for adult respiratory needs. Portable design for active lifestyles.",
      className: "bg-gradient-to-br from-primary/10 to-secondary/30",
    },
    {
      icon: <HeartPulse className="h-10 w-10 mb-4 text-nebulizer-purple" />,
      title: "Seniors",
      description: "Simple one-button operation ideal for elderly users. Consistent medication delivery with minimal maintenance requirements.",
      className: "bg-gradient-to-br from-secondary/40 to-primary/10",
    }
  ];

  return (
    <section id="age-groups" className="section-padding overflow-hidden bg-nebulizer-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-2">
            <span className="chip bg-secondary text-primary-foreground">For Everyone</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For All Ages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Our portable nebulizer is designed for the entire family, with specialized attachments and settings to provide effective treatment from the first days of life through the golden years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-6 shadow-glass flex flex-col items-center text-center transition-all duration-300 reveal hover:shadow-product hover:scale-105",
                group.className
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {group.icon}
              <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-product reveal flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Clinically Proven Safety for All Ages</h3>
            <p className="text-muted-foreground mb-6">
              Our nebulizer has been thoroughly tested and certified safe for patients of all ages. The adjustable flow settings allow healthcare providers to customize treatment based on individual patient needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-nebulizer-purple mr-2" />
                <span className="text-sm font-medium">TÜV Certified</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-nebulizer-purple mr-2" />
                <span className="text-sm font-medium">Medical Grade Components</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-nebulizer-purple mr-2" />
                <span className="text-sm font-medium">BPA-Free Materials</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden image-shine">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-70"></div>
              <img 
                src="/placeholder.svg" 
                alt="Family using nebulizer" 
                className="w-full h-auto rounded-2xl"
                width={600}
                height={400}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg animate-pulse-slow hidden md:flex">
              <div className="text-center">
                <div className="text-xl font-bold">99%</div>
                <div className="text-xs">Doctor<br/>Recommended</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
