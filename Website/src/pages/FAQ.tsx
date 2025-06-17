import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'general', name: 'General'},
    { id: 'products', name: 'Products'},
  ];

  const faqData = {
    general: [
      {
        question: "Apakah produk Beautica dan Beauty Colour sudah BPOM?",
        answer: "Ya! Semua produk kami sudah terdaftar BPOM dan aman digunakan. Namun, jika kamu memiliki kulit sensitif atau alergi tertentu, disarankan untuk melakukan patch test terlebih dahulu."
      },
      {
        question: "Apakah bisa mengajukan request collab atau jadi Brand Ambassador?",
        answer: "Bisa dong! Kami selalu terbuka untuk kolaborasi seru. Kamu bisa menghubungi kami melalui sosial media ataupun email resmi kami."
      },
      {
        question: "Bagaimana jika saya menerima produk rusak atau salah kirim?",
        answer: "Tenang! Hubungi tim customer service kami maksimal 3x24 jam setelah produk diterima,, sertakan foto/video unboxing, dan kami akan bantu proses retur atau penggantinya."
      },
    ],
    products: [
      {
        question: "Apakah produk Beautica dan Beauty Colour bisa digunakan untuk remaja?",
        answer: "Bisa banget! Formula kami aman dan ringan, cocok untuk pemula maupun kamu yang baru mulai explore dunia makeup."
      },
      {
        question: "Di mana saya bisa membeli produk Beauty Colour?",
        answer: "Kamu bisa membeli produk kami di marketplace official store (Shopee, Tokopedia, dsb.), serta di beberapa toko offline pilihan. <br> Cek halaman 'Where to Buy' untuk info lengkapnya."
      },
    ],
  };

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen g-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-16 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help Center
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Find answers to your questions quickly and easily
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-white-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center space-x-3 ${
                        activeCategory === category.id
                          ? 'bg-white-100 text-black-600 border-l-4 border-gray-500'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-6">
                  {categories.find(cat => cat.id === activeCategory)?.name} Questions
                </h2>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-600 dark:text-gray-300text-6xl mb-4">🔍</div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">No questions found matching your search.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 pr-4">
                            {item.question}
                          </h3>
                          {openItems.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                          )}
                        </button>
                        {openItems.includes(index) && (
                          <div
                            className="px-6 pb-4 text-black-600 dark:text-gray-300 leading-relaxed border-t border-gray-100"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
