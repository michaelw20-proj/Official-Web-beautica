import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ZoomIn } from 'lucide-react';

interface ColorOption {
  name: string;
  value: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  description: string;
  colors?: ColorOption[];
  Keunggulan: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  slug: string;
}

interface ProductDetailProps {
  product?: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product: productProp }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(productProp || null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(-1);
  const [hoveredColorIndex, setHoveredColorIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!productProp && slug) {
      fetch(`/api/products/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error('Product not found');
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch(() => setProduct(null));
    }
  }, [slug, productProp]);

  if (!product) {
    return (
      <div className="text-center py-32 text-xl text-gray-500">
        Produk tidak ditemukan.
      </div>
    );
  }

  const getCurrentImage = () => {
    if (hoveredColorIndex !== null && product.colors?.[hoveredColorIndex]) {
      return product.colors[hoveredColorIndex].image;
    } else if (hoveredImageIndex !== null) {
      return product.images[hoveredImageIndex];
    } else if (selectedColor !== -1 && product.colors?.[selectedColor]) {
      return product.colors[selectedColor].image;
    } else {
      return product.images[selectedImage] || product.images[0];
    }
  };

  const handleAddToCartShopee = () => {
    window.open('https://shopee.co.id/beautica_official', '_blank');
  };

  const handleAddToCartTiktok = () => {
    window.open('https://www.tiktok.com/shop/beautica_official', '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="relative">
          <img
            src={getCurrentImage()}
            alt={product.name}
            className={`w-full rounded-2xl shadow-lg transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-300"
          >
            <ZoomIn size={20} />
          </button>
        </div>

        {product.images.length > 1 && (
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedColor === -1 && selectedImage === index
                    ? 'ring-2 ring-pink-500'
                    : 'opacity-70 hover:opacity-100'
                }`}
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
                onClick={() => {
                  setSelectedImage(index);
                  setSelectedColor(-1);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-sm text-pink-600 font-medium">{product.category}</span>
            {product.isNew && (
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
            )}
            {product.isBestSeller && (
              <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold">
                BEST SELLER
              </span>
            )}
            {product.isNewArrival && (
              <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold">
                NEW ARRIVAL
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h1>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Colors</h3>
            <div className="flex space-x-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedColor(index);
                    setSelectedImage(0);
                  }}
                  onMouseEnter={() => setHoveredColorIndex(index)}
                  onMouseLeave={() => setHoveredColorIndex(null)}
                  className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    selectedColor === index ? 'border-pink-500 scale-110' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            {selectedColor !== -1 && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Selected: {product.colors[selectedColor]?.name}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Description</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{product.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Keunggulan</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {product.Keunggulan.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <Button onClick={handleAddToCartShopee} className="w-14 h-10 p-0 hover:bg-pink-400 transition mr-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1200px-Shopee_logo.svg.png"
            alt="Shopee"
            className="inline-flex items-center justify-center bg-[hsl(var(--tiktok-background))] w-20 h-16"
          />
        </Button>

        <Button onClick={handleAddToCartTiktok} className="w-15 h-10 p-0 hover:bg-pink-400 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
            alt="Tiktok"
            className="inline-flex items-center justify-center bg-[hsl(var(--tiktok-background))] w-16 h-16"
          />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
