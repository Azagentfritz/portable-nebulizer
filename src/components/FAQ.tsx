
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
      question: "What is a portable nebulizer, and how does it work?",
      answer: "A portable nebulizer is a compact medical device that converts liquid medication into a fine mist for inhalation directly into the lungs. It uses either ultrasonic or mesh technology to create aerosol particles small enough to penetrate deep into the respiratory system."
    },
    {
      question: "Are portable nebulizers effective?",
      answer: "Yes, portable nebulizers are clinically proven to effectively deliver respiratory medications comparable to traditional models. Many portable devices use mesh technology which creates optimal particle sizes for medication to reach deep into the lungs."
    },
    {
      question: "Where can I buy a portable nebulizer?",
      answer: "Portable nebulizers are available from medical supply stores, pharmacies, online retailers like Amazon, and directly from manufacturers. Prescription models may require going through a medical supplier that works with your insurance provider."
    },
    {
      question: "How much does a portable nebulizer cost?",
      answer: "Portable nebulizer prices typically range from $50 to $300, depending on technology, features, and brand. With insurance coverage, your out-of-pocket cost may be significantly reduced."
    },
    {
      question: "Does insurance (Medicare/Medicaid) cover portable nebulizers?",
      answer: "Many insurance plans, including Medicare Part B and Medicaid, cover nebulizers when prescribed by a physician. Medicare typically covers 80% of the approved amount after you meet your deductible."
    },
    {
      question: "Can I bring a portable nebulizer on a plane?",
      answer: "Yes, portable nebulizers are allowed on planes as medical devices and don't count toward your carry-on limit. It's recommended to carry your prescription and inform TSA agents that you're carrying a medical device."
    },
    {
      question: "How do I clean and maintain a portable nebulizer?",
      answer: "Clean your portable nebulizer after each use by disassembling parts and rinsing with warm, soapy water. Once weekly, disinfect parts by soaking in a vinegar solution for 30 minutes."
    },
    {
      question: "What is the best portable nebulizer brand to buy?",
      answer: "Leading brands include Philips Respironics, PARI, Omron, and DeVilbiss, including our own model with top-quality engineering. The best choice depends on your specific needs, frequency of use, and budget."
    },
    {
      question: "How do I use a portable nebulizer?",
      answer: "To use a portable nebulizer, add prescribed medication to the cup, attach the mouthpiece, turn on the device, and breathe normally for 5-10 minutes. Clean the device thoroughly after each use."
    },
    {
      question: "Are portable nebulizers safe for babies/children?",
      answer: "Yes, portable nebulizers are safe for children when used as directed with age-appropriate accessories like pediatric masks. Always consult with a pediatrician first and never leave a child unattended during treatment."
    },
    {
      question: "Do portable nebulizers require a prescription?",
      answer: "In the US, the nebulizer device itself is available over-the-counter without a prescription. However, medications used in nebulizers typically require a prescription from a healthcare provider."
    },
    {
      question: "What medications can I use in a portable nebulizer?",
      answer: "Common medications include bronchodilators, anti-inflammatories, anticholinergics, and mucolytics. Always use medications prescribed by your healthcare provider and follow the device manufacturer's guidelines."
    },
    {
      question: "How long does a portable nebulizer battery last?",
      answer: "Most portable nebulizer batteries last for 30 minutes to 2.5 hours of continuous use, which equals approximately 4-15 treatments. Many models can operate while plugged in and some offer USB charging for convenience."
    },
    {
      question: "Why is my portable nebulizer not working?",
      answer: "Common issues include low battery, clogged components, improper assembly, or damaged parts. Consult your user manual's troubleshooting section or contact customer service if basic fixes don't work."
    },
    {
      question: "Can I get a free portable nebulizer through insurance?",
      answer: "With insurance coverage, you may obtain a nebulizer with minimal out-of-pocket costs. Some patient assistance programs may provide free or discounted nebulizers for qualifying individuals."
    },
    {
      question: "Are portable nebulizers TSA-approved for travel?",
      answer: "Yes, portable nebulizers are TSA-approved medical devices that can be carried in addition to regular carry-on luggage. Inform TSA officers of your medical device and be prepared for additional screening."
    },
    {
      question: "What's the difference between a mesh nebulizer and a jet nebulizer?",
      answer: "Mesh nebulizers use a vibrating mesh to produce aerosol, while jet nebulizers use compressed air. Mesh models are typically more portable, quieter, and efficient with medication but are usually more expensive."
    },
    {
      question: "Where can I buy replacement parts for my portable nebulizer?",
      answer: "Replacement parts are available from the original manufacturer's website, medical supply stores, pharmacies, and online retailers. Always use compatible parts for your specific model to ensure proper function."
    },
    {
      question: "Do portable nebulizers work for conditions like asthma or bronchiectasis?",
      answer: "Yes, portable nebulizers effectively treat various respiratory conditions including asthma, COPD, bronchiectasis, and cystic fibrosis. They deliver medication directly to the lungs, providing quick relief for acute symptoms."
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
