
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const NewArrival = () => {
  const products = [
    {
      id: 1,
      name: "BEAUTICA Air Cushion",
      category: "Cushion",
      image: "produk/Cushion/cushion.png",
      description: "",
      isNew: true
    },
    {
      id: 2,
      name: "BEAUTY COLOUR Royale kiss Lip Serum",
      category: "Lips",
      image: "/Produk/Lips/royale-kiss-lip-serum.png",
      description: "",
      isNew: true
    },
    {
      id: 3,
      name: "BEAUTY COLOUR Nail Polish Maroon",
      category: "Oil Nail Polish",
      image: "produk/Nail Polish/OIl Nail Polish/Maroon nail polish.png",
      description: "",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              New Arrivals
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our latest Makeup & Nail Polish products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewArrival;
