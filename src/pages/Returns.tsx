
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Returns = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Returns & Refunds Policy | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our returns, refunds, and warranty policies for portable nebulizer machines and accessories.');
    }
    
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Returns & Refunds Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Portable Nebulizer, we want you to be completely satisfied with your purchase. If you're not 
                entirely happy with your order, we're here to help.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Return Policy</h2>
              <p className="text-gray-700 mb-6">
                You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay 
                the return shipping costs if the return is a result of our error (you received an incorrect or defective item).
              </p>
              <p className="text-gray-700 mb-6">
                If you need to return an item, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  Contact our customer service team at <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline">support@portablenebulizer.com</a> to 
                  request a return authorization.
                </li>
                <li className="mb-2">
                  Pack the item securely in its original packaging, if possible.
                </li>
                <li className="mb-2">
                  Include your order number and the reason for return.
                </li>
                <li className="mb-2">
                  Ship the item to the address provided by our customer service team.
                </li>
              </ol>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Refund Policy</h2>
              <p className="text-gray-700 mb-6">
                Once we receive your returned item, we will inspect it and notify you that we have received it. We will 
                immediately notify you of the status of your refund after inspecting the item.
              </p>
              <p className="text-gray-700 mb-6">
                If your return is approved, we will initiate a refund to your original method of payment. You will receive 
                the credit within a certain number of days, depending on your card issuer's policies.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Warranty</h2>
              <p className="text-gray-700 mb-6">
                All Portable Nebulizer machines come with a 2-year warranty against manufacturing defects. This warranty 
                covers defects in materials and workmanship under normal use.
              </p>
              <p className="text-gray-700 mb-6">
                The warranty does not cover:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Damage caused by misuse, abuse, or improper maintenance</li>
                <li className="mb-2">Normal wear and tear</li>
                <li className="mb-2">Consumable parts (such as masks, mouthpieces, and filters)</li>
                <li className="mb-2">Damage caused by unauthorized repair or modification</li>
                <li className="mb-2">Damage caused by accidents or natural disasters</li>
              </ul>
              <p className="text-gray-700 mb-6">
                If your nebulizer develops a defect covered by the warranty, please contact our customer service team at 
                <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline"> support@portablenebulizer.com</a> 
                for warranty service.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exchanges</h2>
              <p className="text-gray-700 mb-6">
                If you received a defective or damaged item, we will gladly exchange it for a new one. Please contact our 
                customer service team within 14 days of receiving your order to arrange an exchange.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Late or Missing Refunds</h2>
              <p className="text-gray-700 mb-6">
                If you haven't received a refund yet, first check your bank account again. Then contact your credit card 
                company, it may take some time before your refund is officially posted. Next contact your bank. There is 
                often some processing time before a refund is posted. If you've done all of this and you still have not 
                received your refund yet, please contact us at <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline">support@portablenebulizer.com</a>.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our returns and refunds policy, please contact our customer service team at 
                <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline"> support@portablenebulizer.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
