
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogListing = () => {
  useEffect(() => {
    // SEO metadata updates
    document.title = 'Respiratory Health Blog: Portable Nebulizer Machines & Respiratory Care | Portable Nebulizer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our respiratory health blog for expert advice on portable nebulizer machines, asthma management, COPD care, and breathing techniques. Stay informed with the latest in respiratory care.');
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Portable Nebulizer Machines: The Ultimate Guide to Benefits, Types, and Usage',
      excerpt: 'Learn everything about portable nebulizer machines: how they work, their advantages over traditional nebulizers, and tips for choosing the right one for your respiratory needs.',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: '/lovable-uploads/19e77ff9-6d6e-4ab6-b359-6579f89ca640.png',
      slug: 'ultimate-guide-to-portable-nebulizers'
    },
    // More blog posts will be added here in the future
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Blog Header */}
        <div className="bg-nebulizer-gray py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Respiratory Health Blog</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert insights, tips, and guides for managing respiratory conditions and getting the most from your portable nebulizer machine therapy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Blog Listing */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Link to={`/blog/${post.slug}`} className="block h-full">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-wrap items-center text-gray-600 mb-3">
                        <div className="flex items-center mr-6 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Clock size={16} className="mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold mb-4 hover:text-nebulizer-purple transition-colors">{post.title}</h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-nebulizer-purple font-medium hover:underline"
                      >
                        Read Article
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="bg-nebulizer-gray rounded-xl p-8 mt-16">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-gray-600">
                    Subscribe to our newsletter for the latest articles, tips, and special offers.
                  </p>
                </div>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nebulizer-purple focus:border-transparent w-full md:w-64"
                  />
                  <button className="bg-nebulizer-purple text-white px-6 py-3 rounded-r-lg font-medium hover:bg-opacity-90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogListing;
