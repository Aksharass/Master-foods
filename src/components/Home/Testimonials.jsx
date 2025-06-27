import React, { useState, useEffect } from 'react';
import { motion as _motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Anitha R.',
        location: 'Padanthalumoodu',
        message: "Master's dosa batter is a game-changer! Tastes just like my grandmother's recipe. The consistency is perfect every time.",
    },
    {
        name: 'Divya S.',
        location: 'Kuzhithurai',
        message: 'Master’s dosa batter is a staple in our home now! It’s fresh, natural, and saves me so much time in the kitchen. My kids love it too!',
    },
    {
        name: 'Rahul',
        location: 'Marthandam',
        message: 'Great taste and great service! Their hygiene standards and punctual delivery make Master Food my go-to for batter.',
    },
    {
        name: 'Sneha S.',
        location: 'Kaliyakkavilai',
        message: 'Tried it once, and now I can’t imagine making dosas without it. Consistent texture, fresh aroma, and no preservatives—absolutely love it!',
    },
    {
        name: 'Vishal Kumar',
        location: 'Pudukadai',
        message: 'Highly recommended! Batter stays fresh for days and makes super soft idlis. Delivery is always on time.',
    },
    {
        name: 'Priya D.',
        location: 'Munchirai',
        message: 'A blessing for working professionals like me! Healthy, tasty, and hassle-free breakfast solution.',
    },
    {
        name: 'Ramesh K.',
        location: 'Thengapattanam',
        message: 'Perfect batter every time! It’s thick, fresh, and ferments beautifully. Truly a time-saver for our busy mornings.',
    },
    {
        name: 'Meera T.',
        location: 'Parassala',
        message: 'Love the texture and taste! It reminds me of the dosas we used to have at home in Tamil Nadu. Highly recommended.',
    },
    {
        name: 'Sathish P.',
        location: 'Poovar',
        message: 'Master has nailed the art of convenience and quality. Quick delivery, great consistency, and amazing taste!',
    },

];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const itemsPerPage = 3;
    const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovered, totalSlides]);

    const handleNext = () => setIndex((prev) => (prev + 1) % totalSlides);
    const handlePrev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

    const currentItems = testimonials.slice(
        index * itemsPerPage,
        index * itemsPerPage + itemsPerPage
    );

    return (
        <section
            className="bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <_motion.h2
                    className="text-3xl md:text-5xl pb-5 font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Testimonials
                </_motion.h2>
                <p className="text-gray-600 mb-12">
                    Hear from our happy customers who enjoy the Master touch in every bite.
                </p>

                <div className="relative flex items-center">
                    {/* Left Arrow - placed outside */}
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex items-center justify-center absolute -left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-300 text-black p-3 rounded-full shadow transition z-10 hover:scale-110 hover:shadow-lg"
                        aria-label="Previous"
                        style={{ transform: 'translateY(-50%)' }}
                    >
                        <FaChevronLeft size={22} />
                    </button>
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <_motion.div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                            >
                                {currentItems.map((t, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-left hover:border hover:border-gray-300 hover:scale-[1.03]"
                                    >
                                        <div className="flex justify-start mb-3 text-yellow-500">
                                            {[...Array(5)].map((_, idx) => (
                                                <FaStar key={idx} />
                                            ))}
                                        </div>
                                        <p className="text-sm italic text-gray-700 mb-4">
                                            “{t.message}”
                                        </p>
                                        <h3 className="text-md font-semibold text-black-900">{t.name}</h3>
                                        <p className="text-sm text-gray-700 font-medium">{t.location}</p>
                                    </div>
                                ))}
                            </_motion.div>
                        </AnimatePresence>
                    </div>
                    {/* Right Arrow - placed outside */}
                    <button
                        onClick={handleNext}
                        className="hidden md:flex items-center justify-center absolute -right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-300 text-black p-3 rounded-full shadow transition z-10 hover:scale-110 hover:shadow-lg"
                        aria-label="Next"
                        style={{ transform: 'translateY(-50%)' }}
                    >
                        <FaChevronRight size={22} />
                    </button>
                </div>

                {/* Dots and Arrows */}
                <div className="mt-10 flex items-center justify-center">
                    {/* Dots (Indicator) */}
                    <div className="flex space-x-2">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition border-2 focus:outline-none ${i === index
                                        ? 'bg-gray-500 border-gray-500 scale-110'
                                        : 'bg-gray-300 border-gray-300 hover:bg-gray-400 hover:border-gray-400'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>


            </div>
            <div className="mt-20">
                <div className="w-[85%] mx-auto px-4">
                    <_motion.div
                        className="bg-black rounded-xl py-10 px-6 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-3">
                            Join Our Happy Customers!
                        </h2>
                        <p className="text-gray-300 mb-6 text-sm md:text-base">
                            Experience the taste of tradition with Master’s fresh, authentic South Indian batter.
                        </p>
                        <_motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-white text-black font-medium px-6 py-2 rounded-full shadow hover:bg-gray-500 hover:text-white transition-all duration-300"
                            as="a"
                        >
                            <a href="/contact" className="block w-full h-full">
                                Order Your First Batch
                            </a>
                        </_motion.button>
                    </_motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
