
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
      answer: "A portable nebulizer is a compact medical device that converts liquid medication into a fine mist for inhalation directly into the lungs. It works using either ultrasonic technology that creates vibrations to aerosolize medication, or mesh technology that forces liquid through tiny holes in a mesh membrane. These devices are smaller and lighter than traditional nebulizers, making them ideal for travel and on-the-go treatment."
    },
    {
      question: "Are portable nebulizers effective?",
      answer: "Yes, portable nebulizers are clinically proven to be effective for delivering respiratory medications. Studies show they provide medication delivery comparable to traditional nebulizers, with the added benefit of convenience. Many portable models use mesh technology, which is particularly efficient at creating the optimal particle size for medication to reach deep into the lungs."
    },
    {
      question: "Where can I buy a portable nebulizer?",
      answer: "Portable nebulizers are available from various sources including medical supply stores, pharmacies, online retailers like Amazon, and directly from manufacturers. Some medical equipment companies also offer them for purchase or rental. For prescription models, you may need to go through a medical supplier that works with your insurance provider."
    },
    {
      question: "How much does a portable nebulizer cost?",
      answer: "Portable nebulizer prices typically range from $50 to $300, depending on the technology, features, and brand. Basic models start around $50-$100, while premium mesh nebulizers with rechargeable batteries and additional features can cost $150-$300. With insurance coverage, your out-of-pocket cost may be significantly reduced."
    },
    {
      question: "Does insurance (Medicare/Medicaid) cover portable nebulizers?",
      answer: "Many insurance plans, including Medicare Part B and Medicaid, cover nebulizers when deemed medically necessary and prescribed by a physician. Medicare typically covers 80% of the approved amount after you meet your deductible. Coverage specifics vary by plan and state, so it's best to check with your insurance provider directly about your specific coverage and any documentation requirements."
    },
    {
      question: "Can I bring a portable nebulizer on a plane?",
      answer: "Yes, portable nebulizers are allowed on planes and are considered medical devices by the TSA. They don't count toward your carry-on limit and can be brought in addition to your regular luggage. It's recommended to carry your prescription or a doctor's note, keep the device in its original case, and inform TSA agents that you're carrying a medical device when going through security."
    },
    {
      question: "How do I clean and maintain a portable nebulizer?",
      answer: "Clean your portable nebulizer after each use by disassembling the medication cup, mouthpiece, and mask, and rinsing them with warm, soapy water. Rinse thoroughly and air dry on a clean towel. Once weekly, disinfect parts by soaking them in a solution of 1 part white vinegar to 3 parts water for 30 minutes, then rinse and air dry. Always follow the manufacturer's specific cleaning instructions for your model."
    },
    {
      question: "What is the best portable nebulizer brand to buy?",
      answer: "Leading portable nebulizer brands include Philips Respironics, PARI, Omron, and DeVilbiss. Our model combines top-quality engineering with user-friendly features. When choosing a nebulizer, consider factors like battery life, noise level, medication delivery efficiency, durability, and warranty coverage. The 'best' brand depends on your specific needs, frequency of use, and budget."
    },
    {
      question: "How do I use a portable nebulizer? (General usage steps)",
      answer: "To use a portable nebulizer: 1) Wash your hands thoroughly, 2) Assemble the device according to instructions, 3) Add the prescribed medication to the medication cup (don't exceed the fill line), 4) Attach the mouthpiece or mask, 5) Turn on the device, 6) Breathe normally through your mouth while the medication is being nebulized (typically 5-10 minutes), 7) Turn off and clean the device after use."
    },
    {
      question: "Are portable nebulizers safe for babies/children?",
      answer: "Yes, portable nebulizers are safe for children when used as directed and with age-appropriate accessories like pediatric masks. Many portable models are designed with child-friendly features such as lower noise levels and fun designs. Always consult with a pediatrician before using a nebulizer for a child, and never leave a child unattended during treatment."
    },
    {
      question: "Do portable nebulizers require a prescription?",
      answer: "In the United States, the nebulizer device itself is available over-the-counter without a prescription. However, the medications used in nebulizers (such as albuterol or ipratropium bromide) typically require a prescription from a healthcare provider. Some insurance plans may require a prescription for both the device and medication to qualify for coverage."
    },
    {
      question: "What medications can I use in a portable nebulizer?",
      answer: "Common medications used in portable nebulizers include bronchodilators (like albuterol, levalbuterol), anti-inflammatories (like budesonide), anticholinergics (like ipratropium), and mucolytics (like hypertonic saline). Always use medications prescribed by your healthcare provider, and consult the device manufacturer's guidelines, as some portable nebulizers may have restrictions on certain medication types."
    },
    {
      question: "How long does a portable nebulizer battery last, and how do I charge it?",
      answer: "Most portable nebulizer batteries last for 30 minutes to 2.5 hours of continuous use, which translates to approximately 4-15 treatments. To charge, connect the device to a power source using the provided cable until the indicator light shows it's fully charged (typically 2-4 hours). Many models can also be operated while plugged in, and some offer USB charging for added convenience."
    },
    {
      question: "Why is my portable nebulizer not working, and how can I fix it?",
      answer: "Common issues include: 1) Low battery - charge the device, 2) Clogged mesh/component - clean thoroughly according to instructions, 3) Improper assembly - check all connections, 4) Medication cup positioning - ensure it's seated correctly, 5) Damaged parts - inspect for cracks or wear. If basic troubleshooting doesn't work, consult your user manual's troubleshooting section or contact the manufacturer's customer service for assistance."
    },
    {
      question: "Can I get a free portable nebulizer through insurance or programs?",
      answer: "With insurance coverage, you may be able to obtain a nebulizer with minimal out-of-pocket costs. Some patient assistance programs offered by manufacturers, non-profit organizations, or state health departments may provide free or discounted nebulizers for qualifying individuals. Check with your healthcare provider, insurance company, or local respiratory therapy department about available programs."
    },
    {
      question: "Are portable nebulizers TSA-approved for travel?",
      answer: "Yes, portable nebulizers are TSA-approved medical devices. When traveling, you can carry your nebulizer in addition to your regular carry-on luggage. Inform TSA officers that you have a medical device, and be prepared for additional screening. It's recommended to carry your prescription or a doctor's note. Batteries must comply with airline lithium battery regulations if your device uses them."
    },
    {
      question: "What's the difference between a portable mesh nebulizer and a jet nebulizer?",
      answer: "Mesh nebulizers use a vibrating mesh with thousands of microscopic holes to produce aerosol, while jet nebulizers use compressed air to create medication mist. Mesh nebulizers are typically more portable, quieter, faster, and more efficient with medication, but they're usually more expensive. Jet nebulizers are generally more durable and less expensive but tend to be noisier, bulkier, and require an electrical outlet or separate compressor."
    },
    {
      question: "Where can I buy replacement parts (e.g., mouthpieces) for my portable nebulizer?",
      answer: "Replacement parts for portable nebulizers are available from the original manufacturer's website, medical supply stores, pharmacies, and online retailers like Amazon. For our nebulizer, replacement parts can be ordered directly through our website or customer service. Always use parts that are compatible with your specific model to ensure proper function and medication delivery."
    },
    {
      question: "Do portable nebulizers work for conditions like asthma or bronchiectasis?",
      answer: "Yes, portable nebulizers are effective for treating various respiratory conditions, including asthma, COPD, bronchiectasis, cystic fibrosis, and pneumonia. They deliver medication directly to the lungs, providing quick relief for acute symptoms and helping manage chronic conditions. For specific conditions, your healthcare provider will prescribe appropriate medications to use with your nebulizer based on your diagnosis and symptoms."
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
