import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InfoCard = () => {
  const infoData = [
    {
      title: 'What Makes Our Dosa, Idly & Appam Batter Special?',
      content:
        'Our batter is naturally fermented and completely preservative-free. It is crafted using traditional methods to ensure soft idlis, crispy dosas, and fluffy appams every time.',
    },
    {
      title: 'Is the Batter Safe and Healthy for Daily Use?',
      content:
        'Absolutely! We use only high-quality ingredients with no added chemicals. The batter is freshly made every day, making it a healthy choice for your family.',
    },
    {
      title: 'How Convenient is It to Use Our Batter?',
      content:
        'Our batter is ready to pour and cook—no extra prep needed. Save time in the kitchen while still enjoying authentic South Indian taste in minutes.',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % infoData.length);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white rounded-xl px-6 md:px-12 py-10 md:py-12 mt-10 md:mt-20 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-auto max-w-5xl shadow-lg gap-6">
      <div className="text-left w-full md:w-1/3">
        <h2
          className={`text-xl md:text-2xl font-semibold transition-all duration-500 ${
            isAnimating ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
          }`}
        >
          {infoData[index].title}
        </h2>
      </div>

      <div
        className={`text-sm text-gray-300 w-full md:max-w-md transition-all duration-500 ${
          isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
        }`}
      >
        {infoData[index].content}
      </div>

      <button
        onClick={handleNext}
        className="bg-gray-400 hover:bg-gray-600 text-white rounded-full p-4 transition duration-300"
        disabled={isAnimating}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default InfoCard;
