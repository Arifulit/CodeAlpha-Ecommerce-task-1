import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand Text */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-xl">ShopEase</h2>
          <p className="text-sm mt-1">Your trusted online marketplace.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/shop" className="hover:text-white transition">Shop</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <button className="hover:text-white transition bg-transparent border-none p-0 text-left cursor-pointer">Support</button>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right text-gray-500">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
