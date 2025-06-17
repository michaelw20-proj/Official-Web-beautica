
import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const bestSellerProducts = [
    {
      id: 1,
      name: "BEAUTICA Mascara Marble",
      category: "Mascara",
      image: "/Produk/Mascara/beautica-mascara-marble.jpg",
      description: "",
      isBestSeller: true
    },
    {
      id: 2,
      name: "BEAUTICA Eyeshadow Palette + Blush 10-Mix",
      category: "Eyeshadow",
      image: "/Produk/Eyeshadow/10-mix-eyeshadow.png",
      description: "",
      isBestSeller: true
    },
    {
      id:3,
      name : "BEAUTICA Sweet Eyeshadow & Blush Palette",
      category: "Eyeshadow",
      image: "/Produk/Eyeshadow/sweet-eyeshadow.png",
      description: "",
      isBestSeller: true
    },
    {
      id: 4,
      name: "BEAUTICA Nail Polish Mahkota",
      category: "Nail Polish",
      image: "/Produk/Nail-Polish/OIl Nail Polish/beautica-mahkota.jpg",
      description: "",
      isBestSeller: true
    },
    {
      id: 5,
      name: "Beauty Colour Nail Polish Bottle #2 Red",
      category: "Nail Polish",
      image: "/Produk/Nail-Polish/OIl Nail Polish/Red/red-nail-polish-2.jpg",
      description: "",
      isBestSeller: true
    },
    {
      id: 6,
      name : "Beauty Colour Nail Polish 308SN",
      category: "Nail Polish",
      image: "/Produk/SN/308SN.jpg",
      description: "",
      isBestSeller: true
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-black-600 max-w-2xl mx-auto">
            Customer favorites that have won hearts worldwide with their exceptional quality and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
            View All Best Sellers
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
