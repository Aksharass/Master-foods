import React from 'react';
import { motion as motion_} from 'framer-motion';
import { FaHome, FaTruck, FaCheckSquare, FaSeedling, FaFlask } from 'react-icons/fa';
import { MdWbSunny, MdAccessTimeFilled } from 'react-icons/md';

const offers = [
  {
    icon: <MdWbSunny className="text-5xl text-black" />,
    title: 'Daily Fresh Batches',
    description: 'Prepared every morning to maintain maximum freshness and quality.',
  },
  {
    icon: <FaHome className="text-5xl text-black" />,
    title: 'Hygienic Home Kitchen',
    description: 'Clean, safe, and fully sanitized environment following all health standards.',
  },
  {
    icon: <FaTruck className="text-5xl text-black" />,
    title: 'Local Delivery',
    description: 'Quick doorstep delivery in your area with careful packaging.',
  },
];

const assurancePoints = [
  {
    icon: <FaCheckSquare className="text-2xl" />,
    label: 'No Preservatives',
  },
  {
    icon: <FaSeedling className="text-2xl" />,
    label: 'Natural Ingredients',
  },
  {
    icon: <MdAccessTimeFilled className="text-2xl" />,
    label: 'Always Fresh',
  },
  {
    icon: <FaFlask className="text-2xl" />,
    label: 'Lab Tested',
  },
];

const offerVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.07,
    boxShadow: '0 8px 32px rgba(75,85,99,0.18)', // gray-700
    backgroundColor: '#f3f4f6', // Tailwind gray-100
    transition: { duration: 0.3 },
  },
};

const assuranceVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  whileHover: {
    scale: 1,
    backgroundColor: '#919090', // Tailwind gray-700 (dark gray)
    color: '#111827', // Tailwind gray-900 (text-black)
    transition: { duration: 0.25 },
    borderRadius: '0.375rem',
  },
};

const WhatWeOffer = () => {
  return (
    <>
      {/* What We Offer Section */}
      <section className="bg-white py-15">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion_.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion_.h2>
          <motion_.p
            className="text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our commitment to excellence extends beyond just great-tasting batter.
            <br className="hidden md:block" />
            Here’s what makes <strong>Master</strong> special.
          </motion_.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <motion_.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                variants={offerVariants}
                initial="initial"
                whileInView="animate"
                whileHover="whileHover"
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <motion_.div
                  className="mb-4 flex justify-center"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {offer.icon}
                </motion_.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </motion_.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion_.div
            className="bg-black rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-8">
              Quality Assurance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center p-3">
              {assurancePoints.map((item, idx) => (
                <motion_.div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer"
                  variants={assuranceVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="whileHover"
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  style={{ color: '#fff' }}
                >
                  <motion_.div
                    className="bg-white p-4 rounded-full mb-3 transition-colors"
                    whileHover={{ backgroundColor: '#d1d5db', scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Set icon color to black */}
                    {React.cloneElement(item.icon, { className: 'text-2xl text-black' })}
                  </motion_.div>
                  <p className="text-sm font-medium transition-colors duration-300">
                    {item.label}
                  </p>
                </motion_.div>
              ))}
            </div>
          </motion_.div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
