import React, { useState } from 'react';
import { motion as _motion, AnimatePresence } from 'framer-motion';
import aboutusImg from "../assets/aboutus.png";
import skImg from "../assets/ordermaster.png";
import tenuImg from "../assets/ordermaster.png";
import { FaLeaf, FaHome, FaClock, FaStar } from 'react-icons/fa';

const values = [
  {
    icon: <FaLeaf className="text-4xl transition-colors" />,
    title: "Natural Ingredients",
    desc: "We use only the finest, natural ingredients without any preservatives or artificial additives."
  },
  {
    icon: <FaHome className="text-4xl transition-colors" />,
    title: "Home-Style Cooking",
    desc: "Every batch is prepared with the same care and attention as cooking for our own family."
  },
  {
    icon: <FaClock className="text-4xl transition-colors" />,
    title: "Fresh Daily",
    desc: "Our batters are prepared fresh every day to ensure maximum taste and nutritional value."
  },
  {
    icon: <FaStar className="text-4xl transition-colors" />,
    title: "Quality First",
    desc: "We never compromise on quality and maintain the highest standards in our preparation process."
  }
];

const team = [
  {
    name: "Sree Kumar S",
    title: "Founder & Head Chef",
    img: skImg,
    desc: "With 10+ years of experience, Sree Kumar brings authentic South Indian flavors to every dish.",
    quote: "Cooking connects hearts through flavors."
  },

  {
    name: "Tinu S S",
    title: "Managing Director",
    img: tenuImg, // Replace with actual image if available
    desc: "Tinu leads our vision and growth, ensuring excellence at every step.",
    quote: "Leadership is the ingredient for success."
  },

];


const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="text-center pt-30 pb-15 bg-black text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Bringing authentic South Indian flavors to your table with tradition,
          quality, and love.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Text Section */}
        <_motion.div
          className="w-full md:w-3/5 text-left px-4 sm:px-8 md:px-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6 pt-10">Our Journey</h2>
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
          <AnimatePresence>
            {showMore && (
              <_motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                Every morning, we carefully prepare our batters using time-tested recipes passed down
                through generations, ensuring that each batch maintains the perfect consistency and
                flavor that our customers have come to love.
              </_motion.p>
            )}
          </AnimatePresence>
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300 mb-8"
          >
            {showMore ? 'READ LESS' : 'READ MORE'}
          </button>
          <_motion.div
            className="text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-full sm:max-w-4xl mx-auto">
              <_motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 cursor-pointer flex flex-col items-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700">500+</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Happy Customers</p>
              </_motion.div>
              <_motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 cursor-pointer flex flex-col items-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700">10+</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Years Experience</p>
              </_motion.div>
              <_motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 cursor-pointer flex flex-col items-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700">100%</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Natural Ingredients</p>
              </_motion.div>
            </div>
          </_motion.div>
        </_motion.div>
        {/* Image Section */}
        <_motion.div
          className="relative w-full md:w-2/5 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-70 md:w-80 h-70 md:h-80">
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutusImg})` }}
              aria-label="Master Batter"
            />
            <AnimatePresence>
              {isHovered && (
                <>

                  <_motion.div
                    className="absolute top-4 left-4 right-40 bg-white shadow-md rounded-md px-3 py-1 text-sm text-black-600 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 }}
                  >
                    100% Natural & Fresh
                  </_motion.div>
                  <_motion.div
                    className="absolute bottom-38 left-50 right-2 bg-white shadow-md rounded-md p-2 text-xs text-black-600"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    Loved by 10,000+ Home Chefs
                  </_motion.div>
                  <_motion.div
                    className="absolute bottom-1 right-40 bottom-4 left-2 flex items-center gap-2 bg-white shadow px-4 py-1 rounded-md text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                  >

                    No preservatives, all tradition!
                  </_motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </_motion.div>
      </div>

      {/* Our Values Section */}
      <div className=" py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Values</h2>
        <p className="text-gray-600 mb-10">
          The principles that guide everything we do at Master.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <_motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow transition duration-300 flex flex-col items-center group cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#000",
                color: "#fff",
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <_motion.div
                className="mb-4 transition-colors"
                whileHover={{ color: "#fff", scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {React.cloneElement(value.icon, {
                  className: "text-4xl transition-colors group-hover:text-white"
                })}
              </_motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{value.title}</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors">{value.desc}</p>
            </_motion.div>
          ))}
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          The passionate people behind Master who make it all possible.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-${team.length} gap-8 justify-items-center`}>
          {team.map((member, index) => (
            <_motion.div
              key={index}
              className={`text-center bg-white p-6 rounded-xl shadow transition duration-300 flex flex-col items-center group`}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
              }}
            >
              <_motion.img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-gray-200 shadow group-hover:border-black"
                whileHover={{
                  scale: 1.12,
                  borderColor: "#000",
                  boxShadow: "0 0 0 6px #d1d5db"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <_motion.h3
                className="text-xl font-semibold group-hover:text-black transition-colors"
                whileHover={{ color: "#000" }}
              >
                {member.name}
              </_motion.h3>
              <p className="text-black text-sm font-medium">{member.title}</p>
              <p className="text-gray-600 text-sm mt-1">{member.desc}</p>
              <p className="italic text-gray-500 mt-3">"{member.quote}"</p>
            </_motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
