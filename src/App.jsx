import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './pages/Contact';
import Products from './pages/Product';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './components/PageNotFound';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Import WhatsApp Icon
import OrderProduct from './components/Home/OrderProduct';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* WhatsApp Floating Button - Outside Routes */}
      <a
        href="https://wa.me/917708325357"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-5 right-5 z-50 flex items-center bg-black p-3 rounded-full shadow-lg group transition-colors duration-300"
      >
        <FaWhatsapp
          size={30}
          className="text-green-500 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="whatsapp-text ml-0 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 overflow-hidden whitespace-nowrap text-white">
          Chat with us
        </span>
      </a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
