
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'About Us | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the team behind Portable Nebulizer machines and our mission to improve respiratory health care worldwide.');
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Portable Nebulizer</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Portable Nebulizer, we are dedicated to improving respiratory health through innovative, 
                accessible, and user-friendly technology. Our mission is to provide high-quality portable 
                nebulizer machines that empower individuals to manage their respiratory conditions effectively, 
                regardless of where they are.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We believe that respiratory care should be accessible to everyone. Our portable nebulizer 
                machines are designed to be compact, efficient, and easy to use, making respiratory 
                treatments possible at home, at work, or on the go. By providing reliable and convenient 
                nebulizer solutions, we aim to improve the quality of life for individuals with asthma, 
                COPD, and other respiratory conditions.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Portable Nebulizer was founded by a team of healthcare professionals and engineers who 
                recognized the need for more convenient respiratory care options. Inspired by patients who 
                struggled with bulky, noisy, and inefficient traditional nebulizers, our team set out to 
                create a solution that would make respiratory treatments simpler and more accessible.
              </p>
              <p className="text-gray-700 mb-6">
                After years of research and development, we introduced our first portable ultrasonic 
                nebulizer machine, combining cutting-edge technology with user-friendly design. Today, 
                our products are trusted by healthcare providers and patients worldwide for their reliability, 
                efficiency, and ease of use.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-700 mb-6">
                At Portable Nebulizer, quality is our top priority. All of our products undergo rigorous 
                testing to ensure they meet the highest standards of safety and effectiveness. Our nebulizers 
                are TÜV certified, FDA registered, and compliant with international medical device regulations.
              </p>
              <p className="text-gray-700 mb-6">
                We are committed to continuous improvement and innovation, constantly seeking ways to enhance 
                our products based on customer feedback and advancements in medical technology. Our team works 
                tirelessly to develop new features and capabilities that make respiratory care more effective 
                and convenient.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Team</h2>
              <p className="text-gray-700 mb-6">
                Our diverse team includes healthcare professionals, engineers, designers, and customer care 
                specialists united by a shared passion for improving respiratory health. With expertise in 
                medical device technology, product design, and patient care, our team brings a wealth of 
                knowledge and experience to the development of our nebulizer products.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                We are located in Scottsdale, Arizona, and we're always happy to hear from our customers. 
                If you have questions, feedback, or suggestions, please don't hesitate to reach out to us 
                at <a href="mailto:support@portablenebulizer.com" className="text-nebulizer-purple hover:underline">support@portablenebulizer.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
