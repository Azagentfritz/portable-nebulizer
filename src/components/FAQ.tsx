
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <div className="ml-2 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-nebulizer-purple" />
          ) : (
            <Plus className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>
      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
        style={{
          maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 1000) + 'px' : '0',
        }}
      >
        <div className="pb-4 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
  
  const faqItems = [
    {
      question: "How does the portable nebulizer work?",
      answer: "Our portable nebulizer uses ultrasonic technology to convert liquid medication into a fine mist that can be easily inhaled into the lungs. The device vibrates at a high frequency to create these tiny particles, making medication delivery efficient and effective."
    },
    {
      question: "How long does the battery last?",
      answer: "Our nebulizer features a rechargeable battery that provides up to 2.5 hours of continuous operation, which is sufficient for multiple treatments. It also includes a backup option for AAA batteries, ensuring you're never without treatment capability."
    },
    {
      question: "Is it suitable for children?",
      answer: "Yes, our nebulizer is designed for users of all ages. It comes with both adult and pediatric masks to ensure proper fit and effective treatment for everyone in the family."
    },
    {
      question: "How do I clean the nebulizer?",
      answer: "The nebulizer can be easily disassembled for cleaning. After each use, rinse the medication cup with warm water and let it air dry. Once a week, clean with a mild soap solution and rinse thoroughly. The device itself can be wiped with a damp cloth. Complete cleaning instructions are included in the user manual."
    },
    {
      question: "What medications can be used with this nebulizer?",
      answer: "Our nebulizer is compatible with most prescribed liquid respiratory medications. Always consult with your healthcare provider regarding specific medications and dosages for your condition."
    },
    {
      question: "Does it require a prescription?",
      answer: "The nebulizer device itself does not require a prescription to purchase. However, the medications used with the nebulizer typically require a prescription from a healthcare provider."
    },
    {
      question: "What is the warranty period?",
      answer: "Our single unit comes with a 1-year warranty, while our double and family packs include extended warranties of 2 and 3 years respectively. The warranty covers manufacturing defects and normal wear issues."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="chip bg-nebulizer-lavender text-nebulizer-purple inline-block mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Got Questions? We Have Answers
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about our portable nebulizer. Can't find the answer you're looking for? 
            Feel free to contact our customer support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 reveal">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center reveal">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-nebulizer-purple text-nebulizer-purple bg-white rounded-full hover:bg-nebulizer-lavender transition-all duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
