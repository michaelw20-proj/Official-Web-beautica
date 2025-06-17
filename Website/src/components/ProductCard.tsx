
import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  image,
  description,
  isNew,
  isBestSeller
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md 
    hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
      {/* Badge */}
      {(isNew || isBestSeller) && (
         <div className="absolute top-3 left-3 z-10">
         <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg ${
           isNew ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-600 to-red-600'
          }`}>
            {isNew ? 'NEW' : 'BEST SELLER'}
          </span>
        </div>
      )}

      {/* Image Container with fixed aspect ratio and proper object fitting*/}
      <div className="relative overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p5 sm:p-6">
        <div className="mb-2">
        <span className="text-sm text-pink-600 dark:text-pink-400 font-medium 
        tracking-wide">{category}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 
        group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 
          hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
