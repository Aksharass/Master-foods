import React from 'react';
import { motion as _motion} from 'framer-motion';
import dosaImg from '../../assets/dosa.png';
import appamImg from '../../assets/appam.png';

const ProductsSection = () => {
  const products = [
    {
      name: 'Dosa / Idly Batter',
      description:
        'Perfectly fermented batter for soft idlis and crispy dosas. Made fresh daily with traditional recipes.',
      mrp: '₹40',
      offerPrice: '₹30',
      image: dosaImg,
    },
    {
      name: 'Appam Batter',
      description:
        'Soft, fluffy appams made easy with our ready-to-use, naturally fermented batter.',
      mrp: '₹40',
      offerPrice: '₹30',
      image: appamImg,
    },
  ];

  return (
    <section className="py-14 md:py-20  text-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-0">
      <h2 className="text-2xl md:text-5xl font-bold mb-10 px-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-4 md:px-0">
        {products.map((product, idx) => (
          <_motion.div
            key={idx}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-2 md:p-2" // reduced padding here
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-100 h-100 object-contain mb-4 sm:w-50 sm:h-50"
            />
            <h3 className="text-2xl sm:text-2xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2 px-2">
              {product.description}
            </p>
            <div className="mt-4 flex flex-row items-center gap-2 sm:gap-4">
              <button className="text-black font-medium hover:underline text-sm sm:text-base">
                Buy Now
              </button>
              <span className='border-l border-black h-5 mx-2'></span>
              <div className="text-base sm:text-lg text-gray-700 flex items-center">
                <span className="line-through mr-2 text-gray-500 text-xl">{product.mrp}</span>
                <span className="text-black font-semibold text-xl">{product.offerPrice}</span>
              </div>
            </div>
          </_motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
