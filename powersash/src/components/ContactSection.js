import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-[#F8F6F3]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#3A2D28]">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#EBE3DB] rounded-lg p-6 shadow-md"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-[#3A2D28]">Contact Information</h3>
                        <div className="space-y-4">
                            <p className="flex items-center text-[#A48374]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-[#CBAD8D]">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0933 347 5084
                            </p>
                            <p className="flex items-center text-[#A48374]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-[#CBAD8D]">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                m.jeremiahjabez@gmail.com
                            </p>
                            <p className="flex items-center text-[#A48374]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-[#CBAD8D]">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Sta. Rita, Bulacan / Balagtas, Bulacan / Bocaue, Bulacan
                            </p>
                        </div>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block mb-2 font-medium text-[#3A2D28]">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-[#EBE3DB] border border-[#CBAD8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBAD8D] text-[#3A2D28]" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-medium text-[#3A2D28]">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-[#EBE3DB] border border-[#CBAD8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBAD8D] text-[#3A2D28]" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 font-medium text-[#3A2D28]">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 bg-[#EBE3DB] border border-[#CBAD8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBAD8D] text-[#3A2D28]" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#CBAD8D] text-[#3A2D28] px-6 py-3 rounded-full font-semibold hover:bg-[#A48374] transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;