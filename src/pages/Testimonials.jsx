import React, { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const feedbacks = [
	{
		name: "Ananya R.",
		rating: 5,
		comment:
			"Absolutely love the dosa batter! Crispy outside, soft inside – feels just like home!",
		location: "Padanthalumoodu",
	},
	{
		name: "Vikram S.",
		rating: 4,
		comment:
			"Fluffy idlis every time. No sourness, just fresh and clean taste. Loved it!",
		location: "Poovar",
	},
	{
		name: "Reema D.",
		rating: 5,
		comment:
			"Appam turned out amazing – soft, fluffy and full of authentic Kerala taste.",
		location: "Kuzhithurai",
	},
	{
		name: "Naveen K.",
		rating: 4,
		comment:
			"Consistent quality. Saves time and delivers homemade flavor every time.",
		location: "Thengapattanam",
	},
	{
		name: "Lakshmi V.",
		rating: 5,
		comment:
			"The batter makes morning breakfasts quick and delicious. Highly recommended!",
		location: "Munchirai",
	},
	{
		name: "Rajeev M.",
		rating: 5,
		comment:
			"Tried other brands, but Master Batter stands out. Soft idlis and crispy dosas.",
		location: "Padanthalumoodu",
	},
	{
		name: "Meera P.",
		rating: 5,
		comment:
			"Very hygienic packaging and lasts well for 5+ days. Taste stays intact.",
		location: "Marthandam",
	},
	{
		name: "Arun N.",
		rating: 4,
		comment:
			"Affordable, tasty, and fresh. This is a staple in our weekly grocery list.",
		location: "Kuzhithurai",
	},
	{
		name: "Shruthi K.",
		rating: 5,
		comment:
			"Even my kids noticed the taste difference! Truly a game changer at home.",
		location: "Pudukadai",
	},
	{
		name: "Deepak S.",
		rating: 4,
		comment:
			"No need to ferment overnight. Batter is ready-to-use and tastes fantastic.",
		location: "Kaliyakkavilai",
	},
	{
		name: "Sowmya L.",
		rating: 5,
		comment:
			"Perfect consistency for dosa. Makes paper-thin dosas just like restaurants.",
		location: "Marthandam",
	},
	{
		name: "Hari B.",
		rating: 4,
		comment:
			"Easy to pour, easy to clean, and very tasty. What more can you ask for?",
		location: "Padanthalumoodu",
	},
	{
		name: "Kavitha T.",
		rating: 5,
		comment:
			"Loved their new Millet batter too! Great option for health-conscious folks.",
		location: "Poovar",
	},
	{
		name: "Pranav J.",
		rating: 5,
		comment:
			"Texture is just right. No lumps, no foul smell – pure and authentic.",
		location: "Kuzhithurai",
	},
	{
		name: "Swathi D.",
		rating: 5,
		comment:
			"I serve this to guests too. Everyone asks where I got the batter from!",
		location: "Kaliyakkavilai",
	},
	{
		name: "Manoj R.",
		rating: 4,
		comment:
			"Good price for the quality. Makes dosa crispy even on non-stick pans.",
		location: "Marthandam",
	},
	{
		name: "Lalitha G.",
		rating: 5,
		comment:
			"Reminds me of my mom’s cooking. Can’t imagine a Sunday without it now!",
		location: "Parassala",
	},
	{
		name: "Nisha P.",
		rating: 5,
		comment:
			"Love that they now offer subscription – fresh batter delivered weekly!",
		location: "Kaliyakkavilai",
	},


];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0, type: "spring", stiffness: 80 },
    }),
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } },
};

const INITIAL_COUNT = 9;

const Testimonials = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const loadMore = () => setVisibleCount((prev) => prev + 9);
    const viewLess = () => setVisibleCount(INITIAL_COUNT);

    return (
        <div className="bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="bg-black text-white text-center pt-30 pb-15">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We deliver authentic South Indian taste with quality, tradition, and care in every bite.
        </p>
      </div>

        <section
            className="py-9 px-6 md:px-20 relative overflow-hidden">
            <style>
                {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
            </style>
            <div className="max-w-2xl mx-auto mb-10 text-center">
  <_motion.h1
    className="text-4xl md:text-5xl font-bold text-black mb-8 mt-4 "
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    What Our Customers Say
  </_motion.h1>
  <_motion.p
    className="text-lg md:text-xl text-gray-700 mb-3"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
  >
    We’re proud to be a part of your kitchen! Here’s what real families across South India have to say about Master Batter’s freshness, taste, and convenience.
  </_motion.p>


</div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <AnimatePresence>
        {feedbacks
            .slice(0, visibleCount)
            .map((feedback, index) => (
                <_motion.div
                    key={feedback.name + feedback.location}
                    className="group relative rounded-2xl p-6 bg-white shadow-md cursor-pointer overflow-hidden transition-all duration-300"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={index}
                    whileHover={{ scale: 1.04 }}
                >
                    {/* Ripple effect */}
                    <span
                        className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
                        style={{
                            background:
                                "radial-gradient(circle at 60% 40%, #d1d5db 0%, transparent 70%)", // gray on hover
                            transition: "opacity 0.5s",
                        }}
                    />
                    <div className="relative z-10">
                        <div className="mb-3">
                            <h4 className="text-xl font-semibold text-black">
                                {feedback.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {feedback.location}
                            </p>
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                            "{feedback.comment}"
                        </p>
                        <div className="flex text-yellow-400">
                            {[...Array(feedback.rating)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                </_motion.div>
            ))}
    </AnimatePresence>
</div>
            <div className="text-center mt-10 flex flex-col items-center gap-4">
                {visibleCount < feedbacks.length && (
                    <_motion.button
                        onClick={loadMore}
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition duration-300 shadow hover:shadow-lg"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Load More Feedback
                    </_motion.button>
                )}
                {visibleCount > INITIAL_COUNT && (
                    <_motion.button
                        onClick={viewLess}
                        className="px-6 py-3 bg-white text-black border border-black rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow hover:shadow-lg"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        View Less
                    </_motion.button>
                )}
            </div>
        </section>
    </div>
    );
};

export default Testimonials;
