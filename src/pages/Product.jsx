import React from 'react';
import { motion as _motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Add this import
import dosaImg from '../assets/dosa.png';
import appamImg from '../assets/appam.png';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, type: 'spring', stiffness: 80 },
  viewport: { once: true }
};

const Products = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-200">
      {/* Product Page Header */}
      <div className="text-center pt-30 pb-10 bg-black text-white">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Explore our range of fresh, authentic South Indian batters—crafted for quality, taste, and convenience.
        </p>
      </div>

      <div className=" px-2 md:px-6 md:py-4 space-y-24 md:space-y-32">

        {/* ======= DOSA / IDLY BATTER PROMO ======= */}
        <div className="md:flex items-center gap-6 md:gap-10 lg:gap-20 px-2 md:px-8 lg:px-16">
          <_motion.div
            className="md:w-3/5 p-4 md:p-6"
            {...fadeInUp}
          >
            <_motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold text-black"
            >
              Dosa / Idly <br /> South Indian Classic
            </_motion.h2>

            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Our Dosa & Idly Batter is crafted with traditional stone-ground techniques and premium grains.
              Enjoy soft idlis and crispy dosas that taste just like home.
            </p>

            {/* Custom animated list with fit-content width */}
            <div className="mt-4 text-gray-700 flex flex-col gap-2 w-fit">
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                100% natural ingredients
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                No preservatives or additives
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Fermented the authentic way
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Free doorstep delivery (within 5km)
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Perfect for 8-10 servings
              </_motion.div>
            </div>

            <_motion.button
              className="mt-8 px-8 py-3 bg-black text-white rounded-md font-medium shadow hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/order')} // Add this line
            >
              Order Dosa Batter
            </_motion.button>

            <p className="text-sm mt-3 text-gray-500">
              *Keep refrigerated • **Use within 3 days
            </p>
          </_motion.div>

          <_motion.img
            src={dosaImg}
            alt="Dosa Batter"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mt-8 md:mt-0 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-contain md:w-2/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </div>

        {/* ======= APPAM BATTER PROMO ======= */}
        <div className="md:flex md:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-20 px-2 md:px-8 lg:px-16">
          <_motion.div
            className="md:w-3/5 p-4 md:p-6"
            {...fadeInUp}
          >
            <_motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold text-black"
            >
              Appam <br /> Authentic Taste
            </_motion.h2>

            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Light, fluffy, and delicately crisp Appams made easy with our ready-to-use batter. Just pour and pan!
              Loved by families, crafted for health and taste.
            </p>

            {/* Custom animated list with fit-content width */}
            <div className="mt-4 text-gray-700 flex flex-col gap-2 w-fit">
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Perfect fermentation for soft texture
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Made with premium rice & coconut
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Gluten-free & vegan
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Hand-packed with hygiene assurance
              </_motion.div>
              <_motion.div
                whileHover={{ x: 10, color: "#000" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 w-fit"
              >
                Delivers fresh, every morning
              </_motion.div>
            </div>

            <_motion.button
              className="mt-8 px-8 py-3 bg-black text-white rounded-md font-medium shadow hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/order')} // Add this line
            >
              Order Appam Batter
            </_motion.button>

            <p className="text-sm mt-3 text-gray-500">
              *Keep refrigerated • **Use within 3 days
            </p>
          </_motion.div>

          <_motion.img
            src={appamImg}
            alt="Appam Batter"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mt-8 md:mt-0 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-contain md:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </div>

      </div>
    </div>
  );
};

export default Products;
