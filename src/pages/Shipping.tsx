
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shipping = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Shipping Policy | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our shipping methods, delivery times, and policies for domestic and international shipments of our portable nebulizer machines.');
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Portable Nebulizer, we strive to provide fast, reliable shipping for all of our products. This 
                Shipping Policy outlines our shipping methods, delivery times, and related policies.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Processing Time</h2>
              <p className="text-gray-700 mb-6">
                Orders are typically processed within 1-2 business days after payment confirmation. During peak seasons 
                or promotional periods, processing may take up to 3 business days. Once your order has been processed, 
                you will receive a shipping confirmation email with tracking information.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Shipping Methods and Delivery Times</h2>
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Domestic Shipping (United States)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Standard Shipping:</strong> 3-5 business days (Free on orders over $100)</li>
                <li className="mb-2"><strong>Expedited Shipping:</strong> 2-3 business days ($9.95)</li>
                <li className="mb-2"><strong>Express Shipping:</strong> 1-2 business days ($14.95)</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">International Shipping</h3>
              <p className="text-gray-700 mb-6">
                We currently ship to select countries. International shipping times vary depending on the destination country 
                and customs processing:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Canada and Mexico:</strong> 5-10 business days ($19.95)</li>
                <li className="mb-2"><strong>Europe:</strong> 7-14 business days ($24.95)</li>
                <li className="mb-2"><strong>Asia and Australia:</strong> 10-21 business days ($29.95)</li>
                <li className="mb-2"><strong>Rest of the World:</strong> 14-28 business days ($34.95)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Please note that these are estimated delivery times and do not include potential delays due to customs 
                processing or other unforeseen circumstances.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tracking Your Order</h2>
              <p className="text-gray-700 mb-6">
                Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can 
                use this tracking number to monitor the status of your delivery on our website or through the carrier's 
                tracking portal.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Shipping Restrictions</h2>
              <p className="text-gray-700 mb-6">
                Due to regulatory requirements, we may be unable to ship certain products to specific countries or regions. 
                If we are unable to fulfill your order due to shipping restrictions, we will notify you promptly and provide 
                a full refund.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lost or Damaged Packages</h2>
              <p className="text-gray-700 mb-6">
                If your package is lost, damaged, or significantly delayed in transit, please contact our customer service 
                team at <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline">support@portablenebulizer.com</a> within 14 days of the estimated delivery date. We will work with 
                the shipping carrier to locate your package or process a replacement or refund.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">International Customs and Duties</h2>
              <p className="text-gray-700 mb-6">
                For international orders, customers are responsible for any customs fees, duties, taxes, or other charges 
                imposed by the destination country. These fees are not included in our shipping charges and are collected 
                by the customs agency or delivery service at the time of delivery or when picking up your package.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our shipping policy or need assistance with an order, please contact our 
                customer service team at <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline">support@portablenebulizer.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
