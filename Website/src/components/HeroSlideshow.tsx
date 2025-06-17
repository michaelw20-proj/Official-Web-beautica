import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "produk/Slideshow/Home1.png" },
    { id: 2, image: "produk/Slideshow/Home2.png" },
    { id: 3, image: "produk/Slideshow/Home3.png" },
    { id: 4, image: "produk/Slideshow/Home4.jpeg" }
  ];

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full aspect-[16/6] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity transition-transform duration-1000 ease-in-out will-change-transform will-change-opacity flex items-center justify-center ${
            index === currentSlide
              ? 'opacity-100 z-20 scale-100'
              : 'opacity-0 z-10 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 z-30"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 z-30"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator inside image */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
