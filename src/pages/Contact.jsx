import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaPhoneAlt, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion as _motion} from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, type: 'spring', stiffness: 120 }
};

const Contact = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSent(false);
        setError(null);
        setLoading(true);

        try {
            const result = await emailjs.sendForm(
                'service_q890dz5',       // Verify this is correct
                'template_4hx10h2',      // Verify this is correct
                formRef.current,
                'uB_FHZFgypwRMX53I',     // Verify this is correct
                {
                    // Add these headers to prevent precondition issues
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('EmailJS success:', result);
            setSent(true);
            formRef.current.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            setError(`
      Failed to send message. 
      Please try again later or contact us directly at masterfoodsshop@gmail.com.
      Error: ${err.text || 'Service unavailable'}
    `);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-gradient-to-r from-gray-50 to-gray-200'>
            {/* Header */}
            <div className="text-center pt-30 pb-10 bg-black text-white">
                <h2 className="text-4xl font-bold">
                    Get In Touch
                </h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Ready to taste the authentic flavors of Master? Contact us today for fresh batter delivery.
                </p>
            </div>
            <section className="px-2 sm:px-4 md:px-10 pt-10" id="contact">
                <div className="max-w-5xl mx-auto">
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {/* Form Section */}
                        <_motion.div
                            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow hover:shadow-2xl transition-all border border-gray-100"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-black">
                                Send us a Message
                            </h3>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                {/* Full Name */}
                                <_motion.div {...fadeInUp}>
                                    <label className="block mb-1 text-xs sm:text-sm font-medium text-black">Full Name *</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full border rounded px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm"
                                    />
                                </_motion.div>

                                {/* Email */}
                                <_motion.div {...fadeInUp}>
                                    <label className="block mb-1 text-xs sm:text-sm font-medium text-black">Email Address *</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="Enter your email address"
                                        className="w-full border rounded px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm"
                                    />
                                </_motion.div>

                                {/* Message */}
                                <_motion.div {...fadeInUp}>
                                    <label className="block mb-1 text-xs sm:text-sm font-medium text-black">Message *</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        required
                                        placeholder="Tell us about your requirements or ask any questions"
                                        className="w-full border rounded px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm"
                                    ></textarea>
                                </_motion.div>

                                {/* Submit Button */}
                                <_motion.button
                                    type="submit"
                                    className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded font-medium transition-all duration-300 disabled:opacity-70 text-sm sm:text-base"
                                    whileHover={{ scale: loading ? 1 : 1.04 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </_motion.button>

                                {/* Status Message */}
                                {sent && (
                                    <_motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-green-600 mt-2 text-center text-sm"
                                    >
                                        Message sent successfully! We'll get back to you soon.
                                    </_motion.p>
                                )}
                                {error && (
                                    <div className="mt-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                                        <p className="text-red-600 text-sm">{error}</p>
                                        <p className="mt-2 text-xs sm:text-sm">
                                            You can also email us directly at:
                                            <a href="mailto:masterfoodsshop@gmail.com" className="text-blue-600 underline ml-1">
                                                masterfoodsshop@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </form>
                        </_motion.div>

                        {/* Contact Info Section */}
                        <_motion.div
                            className="space-y-6 sm:space-y-8"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                        >
                            <div>
                                <_motion.h3
                                    className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black"
                                    whileHover={{ color: "#1a1a1a", scale: 1.04 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Contact Information
                                </_motion.h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {/* Contact Number */}
                                    <_motion.div
                                        className="flex items-start gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg"
                                        whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <_motion.div
                                            whileHover={{ rotate: 20, color: "#222" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FaPhoneAlt className="text-black mt-1 group-hover:text-gray-700 transition" size={18} />
                                        </_motion.div>
                                        <div>
                                            <p className="text-black font-medium group-hover:text-gray-700 transition text-sm">Contact Number</p>
                                            <p className="text-gray-600 text-xs sm:text-sm group-hover:text-black transition">+91 7708325357</p>
                                        </div>
                                    </_motion.div>
                                    {/* Email */}
                                    <_motion.div
                                        className="flex items-start gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg"
                                        whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <_motion.div
                                            whileHover={{ rotate: -10, color: "#222" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FaEnvelope className="text-black mt-1 group-hover:text-gray-700 transition" size={18} />
                                        </_motion.div>
                                        <div>
                                            <p className="text-black font-medium group-hover:text-gray-700 transition text-sm">Email</p>
                                            <p className="text-gray-600 text-xs sm:text-sm group-hover:text-black transition">masterfoodsshop@gmail.com</p>
                                            <p className="text-gray-500 text-xs group-hover:text-black transition">Response within 2 hours</p>
                                        </div>
                                    </_motion.div>
                                    {/* Address */}
                                    <_motion.div
                                        className="flex items-start gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg"
                                        whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <_motion.div
                                            whileHover={{ y: -5, color: "#222" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FaMapMarkerAlt className="text-black mt-1 group-hover:text-gray-700 transition" size={18} />
                                        </_motion.div>
                                        <div>
                                            <p className="text-black font-medium group-hover:text-gray-700 transition text-sm">Address</p>
                                            <p className="text-gray-600 text-xs sm:text-sm group-hover:text-black transition">11-119, Thengampazhanji, Athencode, S T Mankadu, Kanyakumari District, Marthandam, India 629172</p>
                                        </div>
                                    </_motion.div>
                                    {/* Social Icons */}
                                    <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
                                        <_motion.a
                                            href="https://www.facebook.com/profile.php?id=61558791071549"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            whileHover={{ scale: 1.3, color: "#1877f3", rotate: -10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="transition"
                                        >
                                            <FaFacebookF className="text-black text-lg sm:text-xl hover:text-blue-600 transition" />
                                        </_motion.a>
                                        <_motion.a
                                            href="https://www.instagram.com/master_food_shop/?hl=en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            whileHover={{ scale: 1.3, color: "#e1306c", rotate: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="transition"
                                        >
                                            <FaInstagram className="text-black text-lg sm:text-xl hover:text-pink-600 transition" />
                                        </_motion.a>
                                        <_motion.a
                                            href="https://wa.me/917708325357"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            whileHover={{ scale: 1.3, color: "#25D366", rotate: 8 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="transition"
                                        >
                                            <FaWhatsapp className="text-black text-lg sm:text-xl hover:text-green-500 transition" />
                                        </_motion.a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Order Box */}
                            <_motion.div
                                className="bg-gray-50 border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                            >
                                <_motion.h4
                                    className="text-black font-semibold mb-1 sm:mb-2 text-base sm:text-lg"
                                    whileHover={{ color: "#1a1a1a", scale: 1.04 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Quick Order
                                </_motion.h4>
                                <_motion.p
                                    className="text-xs sm:text-sm text-gray-700"
                                    whileHover={{ color: "#000" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    For faster ordering, message us directly on WhatsApp with:
                                </_motion.p>
                                <_motion.ul
                                    className="text-xs sm:text-sm text-gray-600 list-disc list-inside mt-1 sm:mt-2"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                                >
                                    <li>Product name & quantity</li>
                                    <li>Delivery address</li>
                                    <li>Preferred delivery time</li>
                                </_motion.ul>
                            </_motion.div>
                        </_motion.div>
                    </div>

                    {/* Map Section */}
                    <_motion.div
                        className="mt-10 sm:mt-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">Find Us Here</h3>

                        <_motion.div
                            className="w-full h-56 sm:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <iframe
                                title="Master Food Location"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.896994680784!2d77.17355807405981!3d8.313034299787041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTgnNDYuOSJOIDc3wrAxMCczNC4xIkU!5e0!3m2!1sen!2sin!4v1750092893274!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </_motion.div>
                    </_motion.div>
                    {/* FAQ Section */}
                    <_motion.div
                        className="mt-12 sm:mt-20 max-w-3xl mx-auto px-2 sm:px-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">Frequently Asked Questions</h3>
                        <div className="space-y-4 sm:space-y-6 pb-6 sm:pb-10">
                            {[
                                {
                                    q: "What areas do you deliver to?",
                                    a: "We deliver across Marthandam, Kuzhithurai, Padanthalumoodu, and nearby areas. Contact us to check delivery availability for your location."
                                },
                                {
                                    q: "How do I place an order?",
                                    a: "You can order via our website, WhatsApp, or by calling us directly. Visit the Order page or use the contact details above."
                                },
                                {
                                    q: "Is your batter preservative-free?",
                                    a: "Yes! Our batter is made fresh daily with no preservatives or artificial additives."
                                },
                                {
                                    q: "How soon will I get my order?",
                                    a: "Orders are usually delivered within 24 hours. We'll confirm the delivery time after you place your order."
                                },
                                {
                                    q: "How do I store the batter?",
                                    a: "Keep the batter refrigerated and use a clean spoon each time. It stays fresh for up to 3 days."
                                },
                                {
                                    q: "Do you offer bulk or party orders?",
                                    a: "Yes, we do! Please contact us in advance for large or special orders so we can serve you better."
                                }
                            ].map((item, idx) => (
                                <_motion.details
                                    key={idx}
                                    className="bg-white rounded-lg shadow p-3 sm:p-4 group overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        backgroundColor: "#f3f4f6",
                                        y: -6,
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.13)"
                                    }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 200, delay: 0.08 * idx }}
                                    viewport={{ once: true }}
                                >
                                    <_motion.summary
                                        className="cursor-pointer font-semibold text-black group-open:text-gray-700 transition flex items-center justify-between text-sm sm:text-base"
                                        whileHover={{ color: "#374151" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span>{item.q}</span>
                                        <FaChevronRight className="ml-2 text-gray-400 transition-transform duration-300 group-open:rotate-90" />
                                    </_motion.summary>
                                    <_motion.p
                                        className="mt-2 text-gray-700 text-xs sm:text-sm"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {item.a}
                                    </_motion.p>
                                </_motion.details>
                            ))}
                        </div>
                    </_motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;