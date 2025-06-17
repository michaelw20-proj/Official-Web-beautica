import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlideshow from '../components/HeroSlideshow';
import NewArrivals from '../components/NewArrivals';
import BestSellers from '../components/BestSellers';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <HeroSlideshow />
      <NewArrivals />
      <BestSellers />
      <Footer />
    </div>
  );
};

export default Index;
