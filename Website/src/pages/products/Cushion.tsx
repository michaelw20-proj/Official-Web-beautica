import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Aircushion = () => {
  const productData = {
    id: 1,
    name: "Beauty Colour Air Cushion - Multifunctional & Soft Clean",
    slug: "beauty-colour-air-cushion",
    category: "Cushion",
    images: [
      "/produk/Cushion/1-vanilla.jpeg",
      "/produk/Cushion/2-ivory.jpeg",
      "/produk/Cushion/3-natural.jpeg",
      "/produk/Cushion/4-beige.jpeg",
      "/produk/Cushion/5-sand.jpeg"
    ],
    description: `Cushion Lokal dengan Hasil Flawless & Tahan Lama! ✨
Cari cushion yang ringan, coverage oke, dan tahan seharian? Beauty Colour Air Cushion jawabannya!
Dengan formula ringan yang menyatu sempurna di kulit, cushion ini cocok untuk semua jenis kulit — termasuk kulit berminyak & sensitif!

Desain kemasan kekinian bikin tampilan kamu makin catchy dan praktis untuk touch-up dimanapun dan kapanpun!

Tersedia dalam 5 shade natural yang cocok untuk kulit wanita Indonesia.

Beauty Colour Air Cushion bersertifikat BPOM.
Beauty Colour Air Cushion - 01 Vanilla
NA 11240300237
Beauty Colour Air Cushion - 02 Ivory
NA 11240300238
Beauty Colour Air Cushion - 03 Natural
NA 11240300239
Beauty Colour Air Cushion - 04 Beige
NA 11240300240
Beauty Colour Air Cushion - 05 Sand
NA 11240300241

Cara Pemakaian:
Aplikasikan pada wajah dengan menggunakan puff yang disediakan.
Tepuk-tepuk perlahan untuk meratakan produk dan mendapatkan hasil coverage yang diinginkan.
Untuk tampilan lebih natural, aplikasikan lapisan tipis, atau tambahkan lapisan kedua pada area yang membutuhkan lebih banyak coverage.`,
    
Keunggulan: [
      "Lightweight & breathable — nggak berat di wajah",
      "Tahan hingga 12 jam – no cracky, no cakey!",
      "Medium to full coverage – nutup noda & bekas jerawat",
      "Mengandung SPF – lindungi kulit dari sinar matahari",
      "Hasil akhir dewy matte – tampak glowing tapi nggak berminyak"
    ],
    colors: [
      { name: "Vanilla", value: "#F7DDC5", image: "/produk/Cushion/1-vanilla.jpeg" },
      { name: "Ivory", value: "#F0C5A7", image: "/produk/Cushion/2-ivory.jpeg" },
      { name: "Natural", value: "#E5B088", image: "/produk/Cushion/3-natural.jpeg" },
      { name: "Beige", value: "#CC9E84", image: "/produk/Cushion/4-beige.jpeg" },
      { name: "Sand", value: "#B78C65", image: "/produk/Cushion/5-sand.jpeg" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ProductDetail product={productData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aircushion;
