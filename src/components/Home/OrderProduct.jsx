import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import kumari from "../../assets/kumarifoodie.jpg";
import master from "../../assets/ordermaster.png";

const OrderProduct = () => {
  const handleDownloadRedirect = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.kumarifoodie.onlinedelivery&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <div className="">
      <div className="text-center pt-30 pb-10 bg-black text-white">
        <h1 className="text-4xl font-bold">Order Our Products</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Order our delicious South Indian dishes easily through direct contact or the Kumari Foodie App for fast and convenient delivery.
        </p>
      </div>
      <div className="sm:px-8 md:px-16 lg:px-24">
        <div className="min-h-screen  py-6 animate-fadeIn">
          {/* Section 1: Master Contact */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mb-10 bg-white p-4 rounded-2xl shadow-md animate-slide-in-left">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-black mb-3">Contact Our Master Directly</h2>
              <p className="text-[#444] mb-3">
                For personalized service, live catering, or special events, connect directly with our master chef.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-1 text-left text-[#444]">
                <p><span className="font-semibold text-black">Name:</span> Sree Kumar S</p>
                <p><span className="font-semibold text-black">Phone:</span> +91-7708325357</p>
                <p><span className="font-semibold text-black">Email:</span> masterfoodsshop@gmail.com</p>
                <p><span className="font-semibold text-black">Specialties:</span> Bulk Orders, Customized Orders, Retail Orders, Party/Event Orders</p>
              </div>

              <div className="flex gap-6 justify-center md:justify-start mt-4">
                <a href="https://facebook.com/yourmasterlink" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4267B2] text-3xl transition-transform hover:scale-110 hover:drop-shadow">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/yourmasterlink" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#E1306C] text-3xl transition-transform hover:scale-110 hover:drop-shadow">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#25D366] text-3xl transition-transform hover:scale-110 hover:drop-shadow">
                  <FaWhatsapp />
                </a>
              </div>

              <div className="bg-[#f1f1f1] p-3 rounded-xl shadow-inner mt-4">
                <h3 className="text-xl font-bold text-black mb-2">Why Choose Our Master?</h3>
                <div className="flex flex-wrap gap-2 text-left text-sm sm:flex-row flex-col">
                  {["10+ years of hands-on experience", "Hygienic & fresh ingredients", "Traditional family recipes", "Tailored custom event menus", "Outdoor catering (dosa/appam/idly)", "Friendly and timely service"].map((item, index) => (
                    <p
                      key={index}
                      className="bg-white border border-gray-200 rounded-md px-3 py-2 shadow hover:shadow-md transition-transform hover:scale-105 w-full sm:w-auto"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="pt-2 text-sm">
                  <p className="font-semibold text-black">Customer Support:</p>
                  <p>Email: masterfoodsshop@gmail.com</p>
                  <p>Phone: +91-7708325357</p>
                </div>
              </div>
            </div>

            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={master} alt="Master Contact" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* OR Divider */}
          <div className="relative flex items-center justify-center my-8">
            <div className="h-px bg-gray-300 w-full"></div>
            <div className="absolute bg-[#f9f9f9] px-8 py-3 rounded-full border border-gray-300 shadow-md text-black text-lg font-semibold cursor-default hover:scale-105 transition-transform">
              OR
            </div>
          </div>

          {/* Section 2: Kumari Foodie App */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 rounded-2xl shadow-md animate-slide-in-right">
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={kumari} alt="Kumari Foodie App" className="w-full h-full object-cover object-center" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-black mb-3">Order via Kumari Foodie App</h2>
              <p className="text-[#444] mb-3">
                Browse full menu, track orders live, and unlock app-exclusive rewards through our mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-5 justify-center md:justify-start">
                <button
                  onClick={handleDownloadRedirect}
                  className="bg-black text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#222] hover:scale-105 transition-all duration-300 font-medium text-md"
                >
                  Order Now on App
                </button>
              </div>

              <div className="flex gap-6 justify-center md:justify-start mb-5">
                <a href="https://www.facebook.com/p/Kumari-Foodie-Online-Food-Delivery-100077844623779/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4267B2] text-3xl transition-transform hover:scale-110 hover:drop-shadow">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/kumarifoodie/?hl=en" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#E1306C] text-3xl transition-transform hover:scale-110 hover:drop-shadow">
                  <FaInstagram />
                </a>
              </div>

              <div className="bg-[#f1f1f1] p-3 rounded-xl shadow-inner">
                <h3 className="text-xl font-bold text-black mb-2">Why Choose Kumari Foodie?</h3>
                <div className="flex flex-wrap gap-2 text-left text-sm sm:flex-row flex-col">
                  {["Fresh & authentic South Indian flavors",
                    "Real-time delivery tracking",
                    "Exclusive app-only deals",
                    "Secure payment & 24/7 support",
                    "Rewards for repeat customers",
                    "Easy ordering via mobile app",].map((item, index) => (
                      <p key={index} className="bg-white border border-gray-200 rounded-md px-3 py-2 shadow hover:shadow-md transition-transform hover:scale-105 w-full sm:w-auto">
                        {item}
                      </p>
                    ))}
                </div>
                <div className="pt-2 text-sm">
                  <p className="font-semibold text-black">Customer Support:</p>
                  <p>Email: Kumarifoodiecontact@gmail.com</p>
                  <p>Phone: +91-9791241712</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
