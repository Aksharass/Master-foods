import React, { useState, useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
  const productsRef = useRef(null);

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
      ctaAction: handleExploreNow,
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

  return (
    <div className="overflow-x-hidden">
      <section id="home" className="relative w-full bg-white pt-16 pb-4 md:pt-20 md:pb-0">
        <Particles init={particlesInit} options={particlesConfig} className="absolute inset-0 z-[-1] pointer-events-none" />

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className="w-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="relative grid grid-cols-1 md:grid-cols-12 items-center w-full px-4 pt-6 pb-6 md:px-20 md:pt-10 md:pb-10 z-10 gap-4">
                {/* Left Text */}
                <div className="md:col-span-6 space-y-4 text-left">
                  <h2 className="text-black text-2xl sm:text-3xl md:text-5xl font-bold">{s.title}</h2>
                  <h3 className="text-black text-lg sm:text-xl md:text-2xl">{s.subtitle}</h3>
                  <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">{s.description}</p>
                  <div className="mt-4">
                    <button
                      onClick={s.ctaAction}
                      className="inline-block px-4 py-2 bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 text-sm sm:text-base"
                    >
                      {s.ctaText}
                    </button>
                    {s.ctaSecondary && s.ctaSecondaryLink && (
                      <Link
                        to={s.ctaSecondaryLink}
                        className="ml-2 px-4 py-2 border border-black text-black rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 inline-block text-sm sm:text-base"
                      >
                        {s.ctaSecondary}
                      </Link>
                    )}
                    <div className="flex space-x-4 mt-4">
                      <a href="https://www.facebook.com/profile.php?id=61558791071549" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF className="text-lg sm:text-xl text-black transition-transform duration-300 hover:text-gray-700 hover:scale-110" />
                      </a>
                      <a href="https://www.instagram.com/master_food_shop/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-lg sm:text-xl text-black transition-transform duration-300 hover:text-gray-700 hover:scale-110" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="md:col-span-6 flex justify-center items-center pt-4 md:pt-10 pb-4 md:pb-16">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-10/12 max-w-[220px] sm:w-4/5 sm:max-w-full h-auto max-h-[28vh] sm:max-h-[40vh] md:max-h-[60vh] object-contain transition-transform duration-700 hover:scale-105 bg-white rounded-lg shadow-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`cursor-pointer h-1 transition-all duration-300 ease-in-out ${currentSlide === idx ? 'bg-gray-600 w-8' : 'bg-gray-300 w-4'}`}
              style={{ minWidth: '1rem' }}
              aria-label={`Go to slide ${idx + 1}`}
            ></div>
          ))}
        </div>
      </section>

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
