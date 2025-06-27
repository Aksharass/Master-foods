import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Required for routing
import logo from '../assets/footer.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white fixed w-full z-20 shadow-md">
      <img src={logo} alt="Master Logo" className="h-10 px-3" />

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex font-semibold">
          {navItems.map((item, idx) => (
            <li key={idx} className="flex items-center px-3">
              <Link
                to={item.path}
                className="relative text-black hover:text-gray-500 transition duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] bg-gray-500 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
              </Link>

              {idx < navItems.length - 1 && (
                <span className="text-black select-none pl-5 pr-3">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsSidebarOpen(true)} aria-label="Open Menu">
          <FaBars className="text-2xl text-black hover:text-gray-500 transition" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/85 backdrop-blur-md text-white z-40 transform ${
          isSidebarOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } transition-all duration-1500 ease-in-out shadow-md`}
      >
        <div className="flex justify-between items-center p-3 border-b border-black/20">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} aria-label="Close Menu">
            <FaTimes className="text-xl text-white hover:text-gray-700 transition" />
          </button>
        </div>
        <ul className="flex flex-col mt-5 font-semibold">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="w-full px-6 py-4 border-b border-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <Link
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className="block w-full text-center text-white hover:text-gray-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-opacity-40 z-30"
        />
      )}
    </nav>
  );
};

export default Navbar;
