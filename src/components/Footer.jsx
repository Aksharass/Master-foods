import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Add this import
import logo from '../assets/footer.png';

const Footer = () => (
  <footer className="bg-black text-white py-10 px-6 md:px-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Brand Info */}
      <div>
        <img src={logo} alt="Master Logo" className="h-12 px-4" />
        <p className="mt-4 text-sm">
          Bringing you the authentic taste of South Indian tradition with fresh,
          hygienic batter made daily in our home kitchen.
        </p>
        <div className="flex gap-4 mt-4 text-xl">
          <a href="https://www.instagram.com/master_food_shop/?hl=en" target="_blank"  aria-label="Instagram">
            <BsInstagram className="p-2 rounded-full w-10 h-10 hover:bg-gray-800 transition-colors" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558791071549" target="_blank" aria-label="Facebook">
            <BsFacebook className="p-2 rounded-full w-10 h-10 hover:bg-gray-800 transition-colors" />
          </a>
          <a
            href="https://wa.me/917708325357"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="p-2 rounded-full w-10 h-10 hover:bg-gray-800 transition-colors" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {/* Use Link for internal navigation */}
          <li>
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition-colors">Products</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-gray-400 transition-colors">Testimonials</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Our Products */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Our Products</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/products" className="hover:text-gray-400 transition-colors">Dosa / Idly Batter</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition-colors">Aapam Batter</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">Custom Orders</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">Bulk Orders</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <FaPhone />+91-7708325357
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope size={15} className="min-w-[15px]" />masterfoodsshop@gmail.com
          </li>
          <li className="flex flex-row items-center gap-2 text-xs">
            <FaMapMarkerAlt size={30} />
            11-119, Thengampazhanji, Athencode, S T Mankadu, Marthandam, Kanyakumari District, Tamil Nadu, India 629172

          </li>
          <li className="flex items-center gap-2">
            <FaClock />6   AM - 9 PM
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs">
      <p>© 2024 Master. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
