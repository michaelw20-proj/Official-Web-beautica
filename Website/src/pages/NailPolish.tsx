
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Nailpolish = () => {
  const navigate = useNavigate();

  const products = [
    // Nail Polish Category
    {
      id: 1,
      name: "BEAUTY COLOUR 588 CB",
      category: "",
      image: "produk/Nail Polish/OIl Nail Polish/588CB.png",
      description: "",
      slug: "np-cb"
    },
    {
      id: 2,
      name: "BEAUTICA Gepeng",
      category: "",
      image: "/Produk/Nail Polish/gepeng/gepeng-1.png",
      description: "",
      slug: "np-gepeng"
    },
    {
      id: 3,
      name: "BEAUTICA Mahkota",
      category: "",
      image: "/Produk/Nail Polish/OIl Nail Polish/Beautica-Mahkota.png",
      description: "",
      slug: "np-mahkota"
    },
    {
      id: 4,
      name: "BEAUTY COLOUR Maroon",
      category: "",
      image: "/Produk/Nail Polish/OIl Nail Polish/Maroon-nail-polish.png",
      description: "",
      slug: "np-maroon"
    },
    {
      id: 5,
      name: "BEAUTICA Red Series",
      category: "",
      image: "/Produk/Nail Polish/OIl Nail Polish/Red Series - done/Red-Nail-Polish-1.png",
      description: "",
      slug: "np-red-series"
    },
    {id: 6,
      name: "BEAUTICA Transparant",
      category: "",
      image: "/Produk/Clear edition/clear-collection.png",
      description: "",
      slug: "np-transparant"
    },
    {id: 7,
      name: "BEAUTY COLOUR Black Edition",
      category: "",
      image: "/Produk/Black edition/black edition.png",
      description: "",
      slug: "np-black-edition"
    },
  ];

  const categories = [
    { 
      name: 'All', 
      count: products.length,
      description: 'Semua produk nail polish' 
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: any) => {
    if (product.slug) {
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
              Nail Polish Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              #
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
                        : 'bg-pink-100 text-gray-600'
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

export default Nailpolish;
