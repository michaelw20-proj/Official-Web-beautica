import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            The Company
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Didirikan pada tahun 2019, PT. Sinar Terang Megantara muncul sebagai pemain unggul di industri kecantikan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="/Produk/Logo/Logo-stm.png"
            alt="Beautica | Beauty Colour"
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              Perjalanan kami dimulai dengan dua brand kecantikan: <strong>Beautica</strong> dan <strong>Beauty Colour</strong>. Sejak awal berdiri, PT Sinar Terang Megantara berkomitmen untuk menghadirkan produk yang terjangkau tanpa mengesampingkan kualitas. Kami memahami kebutuhan konsumen akan produk kecantikan yang mampu memenuhi berbagai preferensi tanpa harus mengorbankan mutu. Komitmen inilah yang menjadi fondasi dari etos kerja perusahaan kami.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Menjadi inovator terdepan dalam industri kecantikan, menciptakan produk-produk berkualitas tinggi dengan harga terjangkau yang memberdayakan individu untuk tampil dan merasakan yang terbaik.
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg cursor-pointer"
          >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">Mission</h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
            <p>Meneliti dan mengembangkan produk kosmetik dan kecantikan yang memenuhi beragam kebutuhan dan keinginan pelanggan kami.</p>
            <p>Menjaga kepatuhan terhadap standar keselamatan dan kesehatan, memastikan produk kami ramah kulit dan mematuhi persyaratan dari badan-badan pengawas</p>
            <p>Memperluas portofolio brand kami, mendorong pertumbuhan dan keragaman di pasar kecantikan.</p>
          </div>
        </motion.div>
      </div>
      </div>
        {/* Our Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-pink-500 group-hover:scale-110 transition duration-300" />,
                title: 'Innovation',
                color: 'border-pink-500',
                desc: 'Memperkaya budaya kreativitas dengan tetap menjadi yang terdepan dalam tren dan teknologi kecantikan.',
              },
              {
                icon: <Sparkles className="h-10 w-10 text-indigo-500 group-hover:scale-110 transition duration-300" />,
                title: 'Customer-Centricity',
                color: 'border-indigo-500',
                desc: 'Menempatkan pelanggan di garis depan dalam setiap keputusan, berusaha memahami dan memenuhi beragam kebutuhan pelanggan. ',
              },
              {
                icon: <Users className="h-10 w-10 text-emerald-500 group-hover:scale-110 transition duration-300" />,
                title: 'Transparency',
                color: 'border-emerald-500',
                desc: 'Menjaga komunikasi transparan dengan pelanggan, karyawan, dan mitra untuk membangun kepercayaan melalui keterbukaan.',
              },
            ].map((val, i) => (
              <div
                key={i}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-1 hover:shadow-xl transition duration-300 border-t-4 ${val.color}`}
              >
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About the Brand */}
        <div className="mt-24 mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">About the Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Beautica */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border-t-4 border-yellow-400 hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <img
                src="/Produk/Logo/BEAUTICA-logo.jpg"
                alt="Beauty Colour Logo"
                className="h-16 mx-auto mb-4 object-contain group-hover:scale-105 transition duration-300"
              />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4"></h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
              <p>Beautica hadir untuk kamu yang ingin tampil cantik tanpa bikin kantong bolong.</p>
              <p>Dengan kualitas produk yang terjamin, Beautica memberikan pilihan makeup lengkap yang mudah dipakai dan tahan lama. Dirancang untuk kamu yang aktif, percaya diri, dan selalu ingin tampil keren setiap hari.</p>
              <p>Beautica bikin kamu percaya diri tanpa harus mahal.</p>
              <p className="font-semibold italic text-center">Beautica — Cantik Engga Harus Mahal!</p>
              <p className="text-center">
              <strong>Produk:</strong> Makeup Kit, Eyeshadow, Eyeliner, Mascara, Lipcream, Kutek.
              </p>
            </div>
            </motion.div>

            {/* Beauty Colour */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border-t-4 border-pink-400 hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <img
                src="/Produk/Logo/logo-beauty-colour.png"
                alt="Beauty Colour Logo"
                className="h-16 mx-auto mb-4 object-contain group-hover:scale-105 transition duration-300"
              />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4"></h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
              <p> Beauty Colour hadir untuk kamu yang percaya diri berekspresi lewat warna.</p>
              <p>Dari nuansa cerah yang playful sampai tone elegan yang classy, rangkaian produk kami siap bikin makeup kamu standout setiap hari.</p>
              <p>Formula ringan dan tahan lama, cocok dipakai dari sekolah, kampus, sampai hangout malam.</p>
              <p>Bukan cuma buat tampil cantik, tapi juga untuk tunjukin keunikan dan keberanian kamu jadi diri sendiri.</p>
              <p className="font-semibold italic text-center">Beauty Colour — Where Beauty Begins with Your Colours!</p>
              <p className="text-center">
              <strong>Produk:</strong> Kuteks, Lip Serum, Cushion
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
