import React from 'react';
import { motion as _motion} from 'framer-motion';
import { FaLeaf, FaTrophy, FaHeart, FaBolt } from 'react-icons/fa';

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '1000+', label: 'Orders Delivered' },
  { value: '100%', label: 'Customer Satisfaction' },
  { value: '0', label: 'Complaints' },
];

const deliveryAreas = [
  'Padanthalumoodu', 'Kuzhithurai',
  'Marthandam', 'Kaliyakkavilai',
  'Pudukadai', 'Munchirai','Thengapattanam',
  'Parassala', 'Poovar',
];

const reasons = [
  { icon: <FaLeaf />, text: 'Traditional recipes with modern hygiene standards' },
  { icon: <FaTrophy />, text: 'Consistent quality that customers love' },
  { icon: <FaHeart />, text: 'Personal care and attention to every order' },
  { icon: <FaBolt />, text: 'Fast and reliable delivery service' },
];

const statVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.07,
    boxShadow: '0 8px 32px rgba(17,17,17,0.18)', // black shadow
    backgroundColor: '#e5e7eb', // Tailwind gray-200
    transition: { duration: 0.3 },
  },
};

const reasonVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  whileHover: {
    scale: 1.05,
    color: '#111827', // Tailwind gray-900 (text-black)
    backgroundColor: '#f3f4f6', // Tailwind gray-100
    transition: { duration: 0.2 },
    borderRadius: '0.375rem',
  },
};

const areaVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    scale: 1.04,
    backgroundColor: '#d1d5db', // Tailwind gray-300
    color: '#111827',
    transition: { duration: 0.2 },
  },
};

const TrustedCommunity = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto text-center p-8 md:p-16 ">
        <_motion.h2
          className="text-3xl md:text-5xl pb-5 font-bold text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Our Community
        </_motion.h2>
        <_motion.p
          className="text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We've proudly served over 500+ happy customers in our locality.
          With consistent quality and personal touch, we're not just selling batter –
          we’re serving tradition.
        </_motion.p>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center mb-12">
          {stats.map((stat, idx) => (
            <_motion.div
              key={idx}
              className="bg-gray-200 rounded-lg py-6 hover:bg-gray-300 transition-colors duration-300 shadow-sm cursor-pointer"
              variants={statVariants}
              initial="initial"
              whileInView="animate"
              whileHover="whileHover"
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
              <p className="text-sm text-gray-800">{stat.label}</p>
            </_motion.div>
          ))}
        </div>

        {/* Flex container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Why Choose Box */}
          <_motion.div
            className="bg-black text-white p-8 rounded-xl w-full lg:max-w-sm shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Why Choose Master?</h4>
            <ul className="space-y-3 text-sm">
              {reasons.map((reason, idx) => (
                <_motion.li
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors"
                  variants={reasonVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="whileHover"
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-yellow-300">{reason.icon}</span>
                  <span>{reason.text}</span>
                </_motion.li>
              ))}
            </ul>
          </_motion.div>

          {/* Delivery Areas */}
          <_motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-black mb-2">
              Delivery Areas
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              We currently deliver fresh batter to the following areas in Kanyakumari and Thiruvananthapuram:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {deliveryAreas.map((area, idx) => (
                <_motion.div
                  key={idx}
                  className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-black px-4 py-2 rounded text-sm font-medium shadow-sm cursor-pointer"
                  variants={areaVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="whileHover"
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {area}
                </_motion.div>
              ))}
            </div>

            {/* Note Box */}
            <_motion.div
              className="mt-6  border border-black-300 text-gray-900 text-sm p-4 rounded shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Don’t see your area?</strong> Contact us! We’re always expanding our
              delivery zones based on customer demand.
            </_motion.div>
          </_motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCommunity;
