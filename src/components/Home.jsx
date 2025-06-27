import React, { useState, useCallback, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import ProductsSection from './Home/Product.jsx';
import img1 from '../assets/slide1.png';
import img2 from '../assets/slide3.png';
import img3 from '../assets/slide2.png';
import InfoCard from './Home/InfoCard.jsx';
import AboutSection from './Home/About.jsx';
import WhatWeOffer from './Home/AboutUs.jsx';
import Testimonials from './Home/Testimonials.jsx';
import OrderProduct from './Home/OrderProduct.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsRef = useRef(null); // 1. Create a ref

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 40 },
      color: { value: ['#e0e0e0', '#cccccc', '#aaaaaa', '#888888'] },
      shape: { type: 'circle' },
      opacity: { value: 0.6 },
      size: { value: { min: 3, max: 6 } },
      move: { enable: true, speed: 1, random: true, outModes: { default: 'out' } },
    },
    detectRetina: true,
  };

  // 2. Handler for scroll
  const handleExploreNow = (e) => {
    e.preventDefault();
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      title: 'Master',
      subtitle: 'Freshly Made, Naturally Tasty',
      description: `Welcome to Master — where every batch of South Indian batter is made fresh daily in our home kitchen. We craft 100% preservative-free batters using authentic, time-honored recipes, delivering the true taste of South India right to your doorstep.`,
      ctaText: 'EXPLORE NOW',
      ctaAction: handleExploreNow, // Use action instead of link
      ctaSecondary: 'How To Buy',
      ctaSecondaryLink: '/order',
      image: img1,
    },
    {
      title: 'Delicious Dosa & Idly',
      subtitle: 'Crispy & Golden',
      description: 'Perfect crispy dosas and fluffy idlis every morning — made with 100% natural ingredients to ensure freshness and authenticity in every bite. Our easy-to-cook batters are delivered straight to your doorstep, completely free from preservatives, making your mornings healthier and hassle-free.',
      ctaText: 'EXPLORE NOW',
      ctaAction: handleExploreNow,
      image: img3,
    },
    {
      title: 'Authentic Appam Batter',
      subtitle: 'Soft & Fluffy',
      description: 'Soft, lacy-edged appams that are light, fluffy, and naturally fermented to perfection. Crafted with care using traditional methods, our appam batter ensures a wholesome and authentic South Indian breakfast, free from any artificial preservatives.',
      ctaText: 'EXPLORE NOW',
      ctaAction: handleExploreNow,
      image: img2,
    },
  ];

  const handleNext = () => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <section id="home" className="relative w-full min-h-screen pt-10 bg-white overflow-hidden">
        <Particles init={particlesInit} options={particlesConfig} className="absolute inset-0 z-0" />

        <Carousel
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          autoPlay={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          renderArrowPrev={() => (
            <button
              onClick={handlePrev}
              className={`carousel-arrow-btn absolute top-1/2 left-4 z-10 p-3 bg-white rounded-full ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Previous Slide"
              disabled={currentSlide === 0}
            >
              ‹
            </button>
          )}
          renderArrowNext={() => (
            <button
              onClick={handleNext}
              className={`carousel-arrow-btn absolute top-1/2 right-4 z-10 p-3 bg-white rounded-full ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Next Slide"
              disabled={currentSlide === slides.length - 1}
            >
              ›
            </button>
          )}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative grid grid-cols-1 md:grid-cols-12 items-center w-full px-4 pt-16 pb-8 md:px-20 md:pt-0 md:pb-0 z-10 gap-6
                md:h-[100vh] md:min-h-[600px]"
            >
              {/* Left Text */}
              <div className={`md:col-span-6 space-y-4 text-left transition-all duration-700 ${i === currentSlide ? 'animate-slide-left' : 'opacity-0'}`}>
                <h2 className="text-black text-3xl md:text-5xl font-bold animate-fade-in">{s.title}</h2>
                <h3 className="text-black text-xl md:text-2xl animate-fade-in delay-200">{s.subtitle}</h3>
                <p className="text-gray-700 whitespace-pre-line animate-fade-in delay-400">{s.description}</p>
                <div className="mt-4 animate-fade-in delay-600">
                  {/* 3. Use button instead of Link for scroll */}
                  <button
                    onClick={s.ctaAction}
                    className="inline-block px-6 py-2 bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                  >
                    {s.ctaText}
                  </button>
                  {s.ctaSecondary && (
                    <Link
                      to={s.ctaSecondaryLink || "#"}
                      className="ml-4 px-6 py-2 border border-black text-black rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 inline-block"
                    >
                      {s.ctaSecondary}
                    </Link>
                  )}
                  <div className="flex space-x-4 mt-4">
                    <a href="https://www.facebook.com/profile.php?id=61558791071549" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookF className="text-xl text-black transition-transform duration-300 hover:text-gray-700 hover:scale-110" />
                    </a>
                    <a href="https://www.instagram.com/master_food_shop/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram className="text-xl text-black transition-transform duration-300 hover:text-gray-700 hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div
                className={`md:col-span-6 flex justify-center items-center transition-all duration-700 pt-10 ${i === currentSlide ? 'animate-slide-right' : 'opacity-0'
                  } pb-8 md:pb-16`}
            >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-11/12 max-w-[300px] sm:w-4/5 sm:max-w-full h-auto max-h-[40vh] sm:max-h-[60vh] md:max-h-[60vh] object-contain transition-transform duration-700 hover:scale-105 bg-white rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </Carousel>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`cursor-pointer h-1 transition-all duration-300 ease-in-out
                ${currentSlide === idx ? 'bg-gray-600 w-8' : 'bg-gray-300 w-4'}
              `}
              style={{ minWidth: '1rem' }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .delay-600 {
            animation-delay: 0.6s;
          }
          .animate-slide-left {
            animation: slideLeft 1s ease-out forwards;
            opacity: 0;
          }
          .animate-slide-right {
            animation: slideRight 1s ease-out forwards;
            opacity: 0;
          }

          .carousel-arrow-btn {
            transition: background 0.2s, color 0.2s;
            font-size: 2.5rem;
            line-height: 1;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
            border: none;
            outline: none;
          }
          .carousel-arrow-btn:hover:not(:disabled) {
            background: gray;
            color: #fff;
          }
        `}</style>
      </section>

      {/* 4. Attach ref to ProductsSection */}
      <div ref={productsRef}>
        <InfoCard />
        <ProductsSection />
      </div>
      <AboutSection />
      <WhatWeOffer />
      <Testimonials />
    </div>
  );
};

export default Home;
