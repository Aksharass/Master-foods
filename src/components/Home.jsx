import React, { useState, useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      title: 'Authentic South Indian Batters',
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
    <div className="">
      {/* Carousel Section */}
      <section id="home" className="relative w-full bg-white pt-8 sm:pt-20 md:pb-0 group px-3 sm:px-0">
        {/* Master Heading and Single Animated Standard Point - with background animation */}
        <div className="relative w-full flex flex-col items-center justify-center z-10 overflow-hidden pt-12 pb-10 sm:pt-4 sm:pb-4 md:pt-4 md:pb-4 lg:pt-4 lg:pb-4">
          {/* Animated balls background for Master content */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute rounded-full bg-gray-300 opacity-60 animate-[moveDiag1_14s_linear_infinite]" style={{width:'32px',height:'32px',left:'5%',top:'10%'}}></div>
            <div className="absolute rounded-full bg-gray-400 opacity-40 animate-[moveDiag2_18s_linear_infinite]" style={{width:'40px',height:'40px',left:'80%',top:'15%'}}></div>
            <div className="absolute rounded-full bg-gray-200 opacity-50 animate-[moveCircle_20s_linear_infinite]" style={{width:'24px',height:'24px',left:'60%',top:'60%'}}></div>
            <div className="absolute rounded-full bg-gray-400 opacity-30 animate-[moveZigzag_16s_linear_infinite]" style={{width:'28px',height:'28px',left:'30%',top:'80%'}}></div>
            <div className="absolute rounded-full bg-gray-300 opacity-50 animate-[moveDiag3_22s_linear_infinite]" style={{width:'18px',height:'18px',left:'50%',top:'30%'}}></div>
            <div className="absolute rounded-full bg-gray-300 opacity-40 animate-[moveCircle_11s_linear_infinite]" style={{width:'10px',height:'10px',left:'20%',top:'70%'}}></div>
            <div className="absolute rounded-full bg-gray-400 opacity-30 animate-[moveZigzag_13s_linear_infinite]" style={{width:'12px',height:'12px',left:'85%',top:'40%'}}></div>
            <div className="absolute rounded-full bg-gray-200 opacity-30 animate-[moveDiag2_15s_linear_infinite]" style={{width:'14px',height:'14px',left:'70%',top:'75%'}}></div>
          </div>
          <h1 className="relative z-10 text-4xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2 drop-shadow-md animate-fadeInText" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Master</h1>
          <div className="relative z-10 max-w-2xl text-center">
            <p className="text-sm sm:text-sm md:text-lg text-gray-700 animate-slideInUp">
              Fresh, preservative-free South Indian batters made daily with authentic recipes and natural ingredients.
            </p>
          </div>
        </div>
        {/* Animated balls background for carousel */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Diagonal Ball 1 */}
          <div className="absolute rounded-full bg-gray-300 opacity-60 animate-[moveDiag1_14s_linear_infinite]" style={{width:'32px',height:'32px',left:'5%',top:'10%'}}></div>
          {/* Diagonal Ball 2 */}
          <div className="absolute rounded-full bg-gray-400 opacity-40 animate-[moveDiag2_18s_linear_infinite]" style={{width:'40px',height:'40px',left:'80%',top:'15%'}}></div>
          {/* Circular Ball 3 */}
          <div className="absolute rounded-full bg-gray-200 opacity-50 animate-[moveCircle_20s_linear_infinite]" style={{width:'24px',height:'24px',left:'60%',top:'60%'}}></div>
          {/* Zigzag Ball 4 */}
          <div className="absolute rounded-full bg-gray-400 opacity-30 animate-[moveZigzag_16s_linear_infinite]" style={{width:'28px',height:'28px',left:'30%',top:'80%'}}></div>
          {/* Diagonal Ball 5 */}
          <div className="absolute rounded-full bg-gray-300 opacity-50 animate-[moveDiag3_22s_linear_infinite]" style={{width:'18px',height:'18px',left:'50%',top:'30%'}}></div>
          {/* Small Circle Ball 6 */}
          <div className="absolute rounded-full bg-gray-300 opacity-40 animate-[moveCircle_11s_linear_infinite]" style={{width:'10px',height:'10px',left:'20%',top:'70%'}}></div>
          {/* Small Zigzag Ball 7 */}
          <div className="absolute rounded-full bg-gray-400 opacity-30 animate-[moveZigzag_13s_linear_infinite]" style={{width:'12px',height:'12px',left:'85%',top:'40%'}}></div>
          {/* Small Diagonal Ball 8 */}
          <div className="absolute rounded-full bg-gray-200 opacity-30 animate-[moveDiag2_15s_linear_infinite]" style={{width:'14px',height:'14px',left:'70%',top:'75%'}}></div>
        </div>
        <Particles init={particlesInit} options={particlesConfig} className="absolute inset-0 z-[-1] pointer-events-none" />

        {/* Swiper with navigation */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="w-full"
            modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="relative grid grid-cols-1 md:grid-cols-12 items-center w-full px-4 pb-6 md:px-20 md:pb-10 z-10 gap-4">
                  {/* Left Text */}
                  <div
                    className={`md:col-span-6 space-y-4 text-left transition-transform duration-700 ease-out
                      ${currentSlide === i ? '' : 'opacity-0'}
                      hover:scale-105`}
                  >
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-gray-900">{s.title}</h2>
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl transition-colors duration-300 hover:text-gray-800">{s.subtitle}</h3>
                    <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base transition-colors duration-300 hover:text-gray-900">{s.description}</p>
                    <div className="mt-4 pt-4 md:pt-0">
                      <div className="flex justify-center items-center space-x-2 md:block md:space-x-0">
                        <button
                          onClick={s.ctaAction}
                          className="px-4 py-2 bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 text-sm sm:text-base"
                        >
                          {s.ctaText}
                        </button>
                        {s.ctaSecondary && s.ctaSecondaryLink && (
                          <Link
                            to={s.ctaSecondaryLink}
                            className="px-4 py-2 border border-black text-black rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 inline-block text-sm sm:text-base md:ml-2 md:mt-0"
                          >
                            {s.ctaSecondary}
                          </Link>
                        )}
                      </div>
                      <div className="flex justify-center space-x-4 mt-4 md:justify-start">
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
                  <div
                    className={`md:col-span-6 flex justify-center items-center pb-4 md:pb-16 transition-transform duration-700 ease-out
                      ${currentSlide === i ? '' : 'opacity-0 translate-y-8'}`}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-10/12 max-w-[220px] sm:w-4/5 sm:max-w-full h-auto max-h-[28vh] sm:max-h-[40vh] md:max-h-[60vh] object-contain transition-transform duration-700 hover:scale-105 bg-white rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom navigation buttons */}
            <button ref={prevRef} className="carousel-arrow-btn custom-swiper-arrow absolute top-1/2 left-2 z-10 p-1 sm:p-2 bg-white rounded-full -translate-y-1/2 transition-all duration-300 w-9 h-9 sm:w-14 sm:h-14 text-xl sm:text-3xl" aria-label="Previous Slide">
              &#8249;
            </button>
            <button ref={nextRef} className="carousel-arrow-btn custom-swiper-arrow absolute top-1/2 right-2 z-10 p-1 sm:p-2 bg-white rounded-full -translate-y-1/2 transition-all duration-300 w-9 h-9 sm:w-14 sm:h-14 text-xl sm:text-3xl" aria-label="Next Slide">
              &#8250;
            </button>
          </Swiper>
        </div>

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
        <style>{`
          .carousel-arrow-btn.custom-swiper-arrow {
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            outline: none;
            background: #fff;
            color: #333;
            transition: background 0.3s, color 0.3s, transform 0.2s, box-shadow 0.2s;
          }
          .carousel-arrow-btn.custom-swiper-arrow:hover:not(:disabled) {
            background: #555;
            color: #fff;
            transform: scale(1.12) translateY(-0.25rem);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          }

          @keyframes flipIn {
            0% {
              opacity: 0;
              transform: rotateY(-60deg) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: rotateY(0deg) scale(1);
            }
          }
          .animate-flipIn {
            animation: flipIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          @keyframes pulseCustom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
          }
          .hover\:animate-pulseCustom:hover, .animate-pulseCustom:hover {
            animation: pulseCustom 0.5s linear both;
          }

          @keyframes fadeInText {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeInText {
            animation: fadeInText 1s ease both;
          }

          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.97);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-slideInUp {
            animation: slideInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes moveDiag1 {
            0% { transform: translate(0, 0);}
            25% { transform: translate(60vw, 20vh);}
            50% { transform: translate(30vw, 60vh);}
            75% { transform: translate(-10vw, 30vh);}
            100% { transform: translate(0, 0);}
          }
          @keyframes moveDiag2 {
            0% { transform: translate(0, 0);}
            20% { transform: translate(-30vw, 30vh);}
            50% { transform: translate(-60vw, 60vh);}
            80% { transform: translate(-20vw, 10vh);}
            100% { transform: translate(0, 0);}
          }
          @keyframes moveDiag3 {
            0% { transform: translate(0, 0);}
            30% { transform: translate(10vw, 40vh);}
            60% { transform: translate(-10vw, 60vh);}
            100% { transform: translate(0, 0);}
          }
          @keyframes moveCircle {
            0% { transform: translate(0, 0);}
            25% { transform: translate(20px, 40px);}
            50% { transform: translate(0, 80px);}
            75% { transform: translate(-20px, 40px);}
            100% { transform: translate(0, 0);}
          }
          @keyframes moveZigzag {
            0% { transform: translate(0, 0);}
            20% { transform: translate(30px, 20px);}
            40% { transform: translate(-20px, 40px);}
            60% { transform: translate(20px, 60px);}
            80% { transform: translate(-10px, 80px);}
            100% { transform: translate(0, 0);}
          }
          @keyframes moveBall5 {
            0% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-20px) scale(1.08);}
            100% { transform: translateY(0) scale(1);}
          }
        `}</style>
    </div>
  );
};

export default Home;
