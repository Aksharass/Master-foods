import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-start justify-center pt-40 px-4 bg-transparent">
      <div className="text-center p-12 bg-white rounded-xl max-w-lg w-full border border-gray-100 shadow-lg">
        <h1 className="text-7xl font-extrabold text-black mb-2 animate-bounce">
          404
        </h1>
        <h2 className="text-2xl font-bold text-black mb-3">Page Not Found</h2>
        <p className="mb-3 text-gray-700 text-base">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <p className="mb-7 text-gray-500 text-sm">
          Please check the URL or click the button below to return to the homepage
          and continue exploring delicious content!
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-2 px-8 py-3 text-base font-bold rounded-full bg-black text-white shadow transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:border hover:border-black hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;