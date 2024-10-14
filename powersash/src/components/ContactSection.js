// src/components/ContactSection.js
import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-gray-700 rounded-lg p-6 shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-amber-400">Contact Information</h3>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +1 (555) 123-4567
                            </p>
                            <p className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v2a4 4 0 01-8 0v-2m4-10v6m-4 4H6" />
                                </svg>
                                info@powersash.com
                            </p>
                            <p className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                                </svg>
                                123 Woodwork St, Woodtown, ST 12345
                            </p>
                        </div>
                    </div>
                    <form className="bg-gray-700 rounded-lg p-6 shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-amber-400">Send Us a Message</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md bg-gray-600 text-white" required />
                            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-md bg-gray-600 text-white" required />
                            <textarea placeholder="Your Message" className="w-full p-4 rounded-md bg-gray-600 text-white h-32" required></textarea>
                            <button type="submit" className="bg-amber-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;