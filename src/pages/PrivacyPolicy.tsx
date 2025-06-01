
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm="" setSearchTerm={() => {}} selectedCategory="All" setSelectedCategory={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our streaming service</li>
                <li>To personalize your experience and recommendations</li>
                <li>To communicate with you about our services</li>
                <li>To improve our platform and develop new features</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@moviesflix.com</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
