
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm="" setSearchTerm={() => {}} selectedCategory="All" setSelectedCategory={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
              <p>By accessing and using MoviesFlix, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Use License</h2>
              <p>Permission is granted to temporarily stream and download content for personal, non-commercial transitory viewing only.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
              <p>The materials on MoviesFlix are provided on an 'as is' basis. MoviesFlix makes no warranties, expressed or implied.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Limitations</h2>
              <p>In no event shall MoviesFlix or its suppliers be liable for any damages arising out of the use or inability to use the materials.</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
