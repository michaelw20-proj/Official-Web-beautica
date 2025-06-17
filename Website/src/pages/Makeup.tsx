
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Makeup = () => {
  const navigate = useNavigate();

  const products = [
    // Air Cushion Category
    {
      id: 1,
      name: "Air Cushion",
      category: "Cushion",
      image: "produk/Cushion/cushion.png",
      description: "",
      slug: "air-cushion"
    },
    // Eyeliner Category
    {
      id: 2,
      name: "BEAUTICA Eyeliner Brilliant",
      category: "Eyeliner",
      image: "/Produk/Eyeliner/eyeliner-briliant.png",
      description: "",
      slug: "e-brilliant"
    },
    {
      id: 3,
      name: "BEAUTICA Eyeliner Kuning",
      category: "Eyeliner",
      image: "/Produk/Eyeliner/eyeliner-kuning.png",
      description: "",
      slug: "e-kuning"
    },
    {
      id: 4,
      name: "BEAUTICA Eyeliner Marble",
      category: "Eyeliner",
      image: "/Produk/Eyeliner/eyeliner-marble.png",
      description: "",
      slug: "e-marble"
    },
    {
      id: 5,
      name: "BEAUTICA Eyeliner Pencil",
      category: "Eyeliner",
      image: "/Produk/Eyeliner/eyeliner-pencil.png",
      description: "",
      slug: "e-pencil"
    },
    // Eyeshadow Category
    {
      id: 6,
      name: "BEAUTICA Eyeshadow 10-mix",
      category: "Eyeshadow",
      image: "/Produk/Eyeshadow/10-mix-eyeshadow.png",
      description: "",
      slug: "es-10mix"
    },
    {
      id: 7,
      name: "BEAUTICA Eyeshadow Best Of Me",
      category: "Eyeshadow",
      image: "/Produk/Eyeshadow/Eyeshadow-best-of-me.png",
      description: "",
      slug: "es-bestofme"
    },
    {
      id: 8,
      name: "BEAUTICA Sweet Eyeshadow",
      category: "Eyeshadow",
      image: "/Produk/Eyeshadow/sweet-eyeshadow.png",
      description: "",
      slug: "es-sweet"
    },
    // Lips Category
    {
      id: 9,
      name: "BEAUTICA Lip Cream Feel Me",
      category: "Lips",
      image: "/Produk/Lips/lip-cream-feel-me.jpg",
      description: "",
      slug: "lip-feel"
    },
    {
      id: 10,
      name: "BEAUTY COLOUR Royale Kiss Lip Serum",
      category: "Lips",
      image: "/Produk/Lips/royale-kiss-lip-serum.jpg",
      description: "",
      slug: "lip-royale"
    },
     // Mascara Category
     {
      id: 11,
      name: "BEAUTICA 2 in 1",
      category: "Mascara",
      image: "/Produk/Mascara/Beautica-2in1.jpg",
      description: "",
      slug: "m-2in1"
    },
    {
      id: 12,
      name: "BEAUTICA Mascara Marble",
      category: "Mascara",
      image: "/Produk/Mascara/beautica-mascara-marble.jpg",
      description: "",
      slug: "m-m"
    },
    {
      id: 13,
      name: "BEAUTICA Mascara Kuning",
      category: "Mascara",
      image: "/Produk/Mascara/mascara-kuning.jpg",
      description: "",
      slug: "m-k"
    },
    // Make Up Kit Category
    {
      id: 14,
      name: "BEAUTICA Beauty Me Makeup Kit",
      category: "Makeup Kit",
      image: "/Produk/Makeup Kit/makeup-kit-love.jpg",
      description: "",
      slug: "muk-bm"
    },
  ];

  const categories = [
    { 
      name: 'All', 
      count: products.length,
      description: 'Semua produk makeup' 
    },
    { 
      name: 'Cushion', 
      count: products.filter(p => p.category === 'Cushion').length,
      description: '' 
    },
    { 
      name: 'Eyeliner', 
      count: products.filter(p => p.category === 'Eyeliner').length,
      description: '' 
    },
    { 
      name: 'Eyeshadow', 
      count: products.filter(p => p.category === 'Eyeshadow').length,
      description: '' 
    },
    { 
      name: 'Lips', 
      count: products.filter(p => p.category === 'Lips').length,
      description: '' 
    },
    { 
      name: 'Makeup Kit', 
      count: products.filter(p => p.category === 'Makeup Kit').length,
      description: '' 
    },
    { 
      name: 'Mascara', 
      count: products.filter(p => p.category === 'Mascara').length,
      description: '' 
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: any) => {
    if (product.slug && product.slug !== "#" && product.slug.trim() !=='') {
      navigate(`/products/${product.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Makeup Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional makeup products for every occasion and style preference.
            </p>
          </div>

          {/* Category List */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Kategori Produk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200 shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <p className={`text-sm mb-2 ${
                      selectedCategory === category.name ? 'text-pink-100' : 'text-gray-500'
                    }`}>
                      {category.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedCategory === category.name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-pink-100 text-pink-600'
                    }`}>
                      {category.count} produk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
                }`}
              >
                {category.name} 
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedCategory === 'All' ? 'Semua Produk' : selectedCategory}
              </h3>
              <span className="text-gray-600">
                {filteredProducts.length} produk ditemukan
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => handleProductClick(product)}
                  className={product.slug ? 'cursor-pointer' : ''}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Makeup;
