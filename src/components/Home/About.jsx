import React, { useState } from 'react';
import { motion as motion_, AnimatePresence } from 'framer-motion';
import aboutImg from "../../assets/about.png"; // Update path to your actual image

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-0 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <motion_.div
          className="relative w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-70 md:w-80 h-70 md:h-80">
            {/* Background image */}
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutImg})` }}
              aria-label="Master Batter"
            />
            {/* Overlays */}
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion_.div
                    className="absolute top-4 left-4 right-40 bg-white shadow-md rounded-md px-3 py-1 text-sm text-black-600 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 }}
                  >
                    100% Natural & Fresh
                  </motion_.div>
                  <motion_.div
                    className="absolute bottom-38 left-50 right-2 bg-white shadow-md rounded-md p-2 text-xs text-black-600"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    Loved by 10,000+ Home Chefs
                  </motion_.div>
                  <motion_.div
                    className="absolute bottom-1 right-40 bottom-4 left-2 flex items-center gap-2 bg-white shadow px-4 py-1 rounded-md text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                  >
                    
                    No preservatives, all tradition!
                  </motion_.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion_.div>

        {/* Text Section */}
        <motion_.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>

          {/* Paragraph 1 & 2 (Always visible) */}
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            At Master Batter, we bring the authentic taste of South Indian kitchens to your home.
            Our dosa, idly, and appam batter is crafted using age-old techniques with no preservatives,
            ensuring perfect texture and flavor in every bite.
          </p>
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            Trusted by thousands, our batter is made fresh daily using the finest ingredients.
            Whether you're preparing a quick breakfast or a festive feast, Master Batter makes it
            easier, tastier, and healthier.
          </p>

          {/* Paragraph 3 - toggled */}
          <AnimatePresence>
            {showMore && (
              <motion_.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                Every morning, we carefully prepare our batters using time-tested recipes passed down
                through generations, ensuring that each batch maintains the perfect consistency and
                flavor that our customers have come to love.
              </motion_.p>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300 mb-8 block sm:inline mx-auto sm:mx-0"
          >
            {showMore ? 'READ LESS' : 'READ MORE'}
          </button>

          {/* Stats Row - Always visible, now below button */}
          <motion_.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion_.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-black-700">500+</h3>
                <p className="text-gray-600 mt-2">Happy Customers</p>
              </motion_.div>
              <motion_.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-black-700">10+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </motion_.div>
              <motion_.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-black-700">100%</h3>
                <p className="text-gray-600 mt-2">Natural Ingredients</p>
              </motion_.div>
            </div>
          </motion_.div>
        </motion_.div>
      </div>
    </section>
  );
};

export default AboutSection;
