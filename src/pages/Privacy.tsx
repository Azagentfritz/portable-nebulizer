
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Privacy Policy | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Our privacy policy outlines how we collect, use, and protect your personal information when you use our website or purchase our portable nebulizer machines.');
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Portable Nebulizer, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or purchase our products.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number, and payment information when you make a purchase.</li>
                <li className="mb-2"><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and navigation paths.</li>
                <li className="mb-2"><strong>Device Information:</strong> Information about your device, such as IP address, browser type, and operating system.</li>
                <li className="mb-2"><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to collect information about your browsing activities.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Processing and fulfilling your orders</li>
                <li className="mb-2">Providing customer support</li>
                <li className="mb-2">Sending order confirmations and updates</li>
                <li className="mb-2">Sending promotional emails (if you've opted in)</li>
                <li className="mb-2">Improving our website and products</li>
                <li className="mb-2">Analyzing website usage and trends</li>
                <li className="mb-2">Preventing fraud and enhancing security</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Share Your Information</h2>
              <p className="text-gray-700 mb-6">
                We may share your information with third parties in certain situations, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and customer support.</li>
                <li className="mb-2"><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests.</li>
                <li className="mb-2"><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information 
                from unauthorized access, loss, misuse, alteration, or destruction. However, no method of transmission 
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">The right to access your personal information</li>
                <li className="mb-2">The right to correct inaccurate or incomplete information</li>
                <li className="mb-2">The right to delete your personal information</li>
                <li className="mb-2">The right to restrict or object to processing of your personal information</li>
                <li className="mb-2">The right to data portability</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
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

export default Privacy;
