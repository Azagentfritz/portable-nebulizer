
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Terms of Service | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read our terms of service and conditions for purchasing and using our portable nebulizer machines and website.');
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Please read these Terms of Service carefully before using the Portable Nebulizer website or purchasing 
                our products. By accessing or using our website, or by purchasing our products, you agree to be bound 
                by these Terms of Service.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all 
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                using or accessing this site.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Products and Services</h2>
              <p className="text-gray-700 mb-6">
                All products and services displayed on our website are subject to availability. We reserve the right to 
                discontinue any product or service at any time. Prices for our products are subject to change without notice.
              </p>
              <p className="text-gray-700 mb-6">
                We have made every effort to display as accurately as possible the colors and images of our products. 
                We cannot guarantee that your computer monitor's display of any color will be accurate.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Ordering and Payment</h2>
              <p className="text-gray-700 mb-6">
                When you place an order, you are offering to purchase a product. We reserve the right to accept or decline 
                your order for any reason. After receiving your order, we will send you an email confirming receipt of 
                your order. This email confirmation will constitute our acceptance of your order.
              </p>
              <p className="text-gray-700 mb-6">
                Payment for all products must be made by credit card or other payment methods we make available. By providing 
                payment information, you represent that you are authorized to use the payment method and that the payment 
                information you provide is accurate.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-6">
                We will make every effort to ship products within the timeframe indicated on our website. However, we do not 
                guarantee delivery times. For more information about shipping and delivery, please see our Shipping Policy.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Returns and Refunds</h2>
              <p className="text-gray-700 mb-6">
                For information about returns and refunds, please see our Returns & Refunds Policy.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Product Use</h2>
              <p className="text-gray-700 mb-6">
                Our nebulizers are intended for use as described in the product instructions. While our products are designed 
                to be safe and effective, we recommend consulting with a healthcare professional before using any medical device.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content on our website, including but not limited to text, graphics, logos, images, and software, is the property 
                of Portable Nebulizer or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the fullest extent permitted by law, Portable Nebulizer shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or 
                any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability 
                to access or use our products or services.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the 
                new Terms of Service on this page and updating the "Last Updated" date. Your continued use of our website and services 
                after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the 
                State of Arizona, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at 
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

export default Terms;
