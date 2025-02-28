
import React, { useEffect, useRef } from 'react';
import { Users, Baby, User, Wind } from 'lucide-react';

type UserCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const UserCard = ({ icon, title, description, image, imageAlt }: UserCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-full p-3 bg-nebulizer-lavender text-nebulizer-purple">
        {icon}
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
        <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <div className="relative group overflow-hidden rounded-xl bg-white">
          <div className="aspect-square max-h-[240px] flex items-center justify-center p-4">
            <img 
              src={image} 
              alt={imageAlt} 
              className="object-contain max-h-full transition-all duration-300 group-hover:scale-105" 
            />
          </div>
          <div className="absolute inset-0 bg-nebulizer-purple bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

const ForWhom = () => {
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

    // Force initial visibility
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      el.classList.add('active');
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="for-whom" className="section-padding bg-nebulizer-lavender bg-opacity-30 relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-white text-nebulizer-purple inline-block mb-4">
            Universal Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Designed for Everyone
          </h2>
          <p className="text-lg text-gray-700">
            Our portable nebulizer is specifically designed to meet the needs of all ages and conditions,
            providing effective respiratory therapy with customizable options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="reveal">
            <UserCard
              icon={<Baby size={24} />}
              title="Children"
              description="Soft, comfortable pediatric mask designed specifically for children's faces."
              image="/lovable-uploads/5e8b6184-6a07-40a1-8ac3-9b6cb7b1da59.png"
              imageAlt="Child-sized nebulizer mask with flower pattern for pediatric use"
            />
          </div>

          <div className="reveal">
            <UserCard
              icon={<User size={24} />}
              title="Adults"
              description="Ergonomic adult mask for comfortable and effective treatment sessions."
              image="/lovable-uploads/66f373d2-fc3f-43ad-97d9-c4fb960a2a81.png"
              imageAlt="Transparent adult-sized nebulizer mask with ergonomic design"
            />
          </div>

          <div className="reveal">
            <UserCard
              icon={<Wind size={24} />}
              title="Direct Delivery"
              description="Specialized mouthpiece for those who prefer not to use a mask."
              image="/lovable-uploads/29cbaf09-0dc9-46bb-8d98-6bce6a56fec0.png"
              imageAlt="Clear plastic nebulizer mouthpiece for direct medication delivery"
            />
          </div>

          <div className="reveal">
            <UserCard
              icon={<Users size={24} />}
              title="Complete Kit"
              description="Everything you need for effective respiratory therapy in one package."
              image="/lovable-uploads/c8752e26-ae48-4b79-9e20-7a58b63e4992.png"
              imageAlt="Complete nebulizer kit with all components"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Who Benefits from Our Nebulizer?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-medium text-gray-900">Asthma patients</span> seeking reliable symptom management at home or on-the-go</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-medium text-gray-900">COPD sufferers</span> requiring consistent and effective medication delivery</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-medium text-gray-900">Parents of children</span> with respiratory conditions needing gentle, effective treatment</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-medium text-gray-900">Elderly individuals</span> who need simple, intuitive medical equipment</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What Makes Our Solution Unique?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-nebulizer-lavender flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-nebulizer-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Multiple delivery options: child mask, adult mask, and mouthpiece</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-nebulizer-lavender flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-nebulizer-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Medical-grade materials safe for all ages</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-nebulizer-lavender flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-nebulizer-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Ultra-quiet operation (≤36dB) ideal for children and sensitive users</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-nebulizer-lavender flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-nebulizer-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Complete kit includes everything needed for immediate use</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
