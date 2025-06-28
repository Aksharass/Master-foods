// components/MasterServices.jsx
import React from "react";
import {FaTruck,FaWarehouse,FaTools,FaLeaf,FaHandsWash,FaStoreAlt,FaTrophy,FaHeart,FaBolt,} from "react-icons/fa";
import { motion as motion_ } from "framer-motion";

const services = [
  {
    icon: <FaTruck size={28} />,
    title: "Fast Delivery",
    desc: "Get your batter delivered fresh and on time, every time — with same-day or next-day delivery options in select areas.",
  },
  {
    icon: <FaWarehouse size={28} />,
    title: "Bulk Orders",
    desc: "We support large-scale supply for restaurants, caterers, and cloud kitchens — packaged and delivered with care.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Custom Orders",
    desc: "Need specific pack sizes or ingredients? We cater to your unique business or household needs with flexible batching.",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "100% Natural",
    desc: "Made with high-quality grains, no preservatives, no additives — just clean, wholesome food the way nature intended.",
  },
  {
    icon: <FaHandsWash size={28} />,
    title: "Hygienic Production",
    desc: "Processed in fully sanitized facilities using RO-purified water and automated mixing units for consistent quality.",
  },
  {
    icon: <FaStoreAlt size={28} />,
    title: "Retail Partnering",
    desc: "Join our network of retailers and distributors across the region — exclusive rates and promotional support available.",
  },
];

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
  { icon: <FaLeaf />, text: 'Traditional taste, modern hygiene' },
  { icon: <FaTrophy />, text: 'Consistent quality that customers love' },
  { icon: <FaHeart />, text: 'Personal care and attention to every order' },
  { icon: <FaBolt />, text: 'Fast and reliable delivery service' },
];

const statVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.07,
    boxShadow: '0 8px 32px rgba(17,17,17,0.18)',
    backgroundColor: '#e5e7eb',
    transition: { duration: 0.3 },
  },
};

const reasonVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  whileHover: {
    scale: 1.05,
    color: '#111827',
    backgroundColor: '#f3f4f6',
    transition: { duration: 0.2 },
    borderRadius: '0.375rem',
  },
};

const areaVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    scale: 1.04,
    backgroundColor: '#d1d5db',
    color: '#111827',
    transition: { duration: 0.2 },
  },
};

const Services = () => {
  return (
    <div>
      <div className="text-center pt-30 pb-10 bg-black text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Discover why Master Product is trusted by households, restaurants, and retailers alike.
        </p>
      </div>

      <section className="py-10 sm:py-16 bg-white text-center" id="services">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          {/* Added heading and content */}
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black">What We Offer</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Explore our range of services designed to meet the needs of households, restaurants, and retailers. 
            From fast delivery to custom orders, we ensure quality and satisfaction every step of the way.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion_.div
                key={index}
                className="bg-white shadow-md border rounded-lg p-4 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col items-center min-h-[180px]"
                initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.07,
                  rotate: 2,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                  backgroundColor: '#f3f4f6',
                  borderColor: '#4b5563',
                  transition: { duration: 0.35 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 120 }}
              >
                <div className="flex items-center justify-center h-12 w-12 bg-gray-300 text-black rounded-full mx-auto mb-3 group-hover:bg-gray-800 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-900 group-hover:text-gray-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">{service.desc}</p>
              </motion_.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Community Section */}
      <section className="px-2 sm:px-4">
        <div className="max-w-7xl mx-auto text-center p-4 sm:p-8 md:p-16 ">
          <motion_.h2
            className="text-xl sm:text-3xl md:text-5xl pb-3 sm:pb-5 font-bold text-black mb-2 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Our Community
          </motion_.h2>
          <motion_.p
            className="text-gray-700 mb-6 sm:mb-10 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We've proudly served over 500+ happy customers in our locality.
            With consistent quality and personal touch, we're not just selling batter –
            we’re serving tradition.
          </motion_.p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, idx) => (
              <motion_.div
                key={idx}
                className="flex-1 min-w-[120px] max-w-[180px] bg-gray-200 rounded-lg py-4 sm:py-6 hover:bg-gray-300 transition-colors duration-300 shadow-sm cursor-pointer mx-1"
                variants={statVariants}
                initial="initial"
                whileInView="animate"
                whileHover="whileHover"
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg sm:text-2xl font-bold text-black">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-gray-800">{stat.label}</p>
              </motion_.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-stretch w-full">
            <motion_.div
              className="bg-black text-white p-5 sm:p-8 rounded-xl w-full sm:max-w-xs shadow-md mb-4 sm:mb-0 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-1">Why Choose Master?</h4>
              <ul className="space-y-2 sm:space-y-1 text-xs sm:text-sm">
                {reasons.map((reason, idx) => (
                  <motion_.li
                    key={idx}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 cursor-pointer transition-colors"
                    variants={reasonVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="whileHover"
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400">{reason.icon}</span>
                    <span>{reason.text}</span>
                  </motion_.li>
                ))}
              </ul>
            </motion_.div>

            <motion_.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-black mb-1 sm:mb-2">Delivery Areas</h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4">
                We currently deliver fresh batter to the following areas in Kanyakumari and Thiruvananthapuram:
              </p>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {deliveryAreas.map((area, idx) => (
                  <motion_.div
                    key={idx}
                    className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-black px-2 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium shadow-sm cursor-pointer text-center"
                    variants={areaVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="whileHover"
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {area}
                  </motion_.div>
                ))}
              </div>

              <motion_.div
                className="mt-4 sm:mt-6 border border-black-300 text-red-700 text-xs sm:text-sm p-3 sm:p-4 rounded shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <strong>Don’t see your area?</strong> Contact us! We’re always expanding our
                delivery zones based on customer demand.
              </motion_.div>
            </motion_.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;