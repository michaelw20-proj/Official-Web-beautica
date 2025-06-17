
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const BestSellersPage = () => {
  const products = [
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              Best Sellers
            </h1>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Customer favorites that have won hearts worldwide with exceptional quality.
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

export default BestSellersPage;
