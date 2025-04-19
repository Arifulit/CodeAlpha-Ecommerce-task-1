import React from 'react';
// import logo from '../../assets/jobs-logo.png';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-6">

        {/* Brand Info */}
        <aside className="col-span-1 lg:col-span-2">
          {/* <img src={logo} alt="ShopEase Logo" className="w-36 mb-4" /> */}
          <p className="text-sm leading-6">
            <span className="text-white font-semibold text-lg">ShopEase</span><br />
            Your trusted online marketplace.<br />
            Shopping made easy since 2010.
          </p>
          {/* Social Media Icons */}
          {/* <div className="flex space-x-4 mt-4 text-xl text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div> */}
        </aside>

        {/* Shop Links */}
        <nav>
          <h6 className="text-white font-semibold mb-4">Shop</h6>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Men</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Women</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Kids</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Electronics</a></li>
          </ul>
        </nav>

        {/* Customer Support */}
        <nav>
          <h6 className="text-white font-semibold mb-4">Customer Support</h6>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Help Center</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Returns</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Track Order</a></li>
            <li><a className="hover:text-white hover:underline transition duration-300" href="#">Shipping Info</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h6 className="text-white font-semibold mb-4">Newsletter</h6>
          <p className="text-sm mb-2">Get the latest deals and updates</p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
            <input
              type="email"
              placeholder="Your email"
              className="input input-sm w-full sm:w-auto text-black focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button className="btn btn-sm btn-primary mt-2 sm:mt-0 sm:ml-2 hover:bg-blue-600 transition duration-300">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
