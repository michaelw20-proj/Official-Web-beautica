import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import GoogleMaps from './GoogleMaps';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Social Media Section */}
          {/* Instagram */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/beautica.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>

              <a
              href="https://instagram.com/beautycolour.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>

              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@beauticaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-black transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Shopee Icon */}
              <a
                href="https://shopee.co.id/beautica_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-white transition-colors duration-300"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1200px-Shopee_logo.svg.png"
                alt="shopee logo"
                className="object-contain w-6 h-6"
                />
              </a>
              {/* Google Maps Icon */}
              <a
                href="https://g.co/kgs/YExyytS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/new-arrival" className="text-gray-300 hover:text-pink-400 transition-colors">New Arrival</Link></li>
              <li><Link to="/best-sellers" className="text-gray-300 hover:text-pink-400 transition-colors">Best Sellers</Link></li>
              <li><Link to="/makeup" className="text-gray-300 hover:text-pink-400 transition-colors">Makeup</Link></li>
              <li><Link to="/nail-polish" className="text-gray-300 hover:text-pink-400 transition-colors">Nail Polish</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-pink-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Waktu Operasional</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Senin - Jumat 8.30 - 17.30 WIB</li>
              <li>Sabtu 8.30 - 15.30 WIB</li>
              <li>Ruko Royal Palem Jl. Royale Boulevard Blok RC No. 22-23, RT.22/RW.16, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730</li>
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-center">Our Location</h3>
          <GoogleMaps />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8"> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 PT. Sinar Terang Megantara. All rights reserved.
            </p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
