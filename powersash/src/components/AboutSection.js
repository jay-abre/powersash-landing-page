import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[#EBE3DB]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-[#3A2D28]">About Us</h2>
                        <p className="text-[#A48374]">
                            Power Sash Enterprises has been a leader in woodworking for over two decades. Our skilled craftsmen
                            combine traditional techniques with modern technology to create stunning, durable wood products for your
                            home and business.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-[#3A2D28]">Our Mission</h3>
                            <p className="text-[#A48374]">
                                To deliver exceptional quality woodwork that enhances the beauty and functionality of every space,
                                while maintaining the highest standards of craftsmanship and customer satisfaction.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-[#3A2D28]">Our Vision</h3>
                            <p className="text-[#A48374]">
                                To be the premier choice for custom woodwork solutions, recognized for our innovation, sustainability,
                                and commitment to preserving the art of woodworking for future generations.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F8F6F3] rounded-lg overflow-hidden shadow-lg"
                    >
                        <img src="/placeholder.svg" alt="John Doe - General Manager" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-[#3A2D28]">John Doe</h3>
                            <p className="text-[#A48374] mb-4">General Manager</p>
                            <div className="space-y-2 text-sm text-[#3A2D28]">
                                <p><strong className="text-[#CBAD8D]">Email:</strong> john.doe@powersash.com</p>
                                <p><strong className="text-[#CBAD8D]">Phone:</strong> +1 (555) 987-6543</p>
                                <p>
                                    With over 15 years of experience in the woodworking industry, John leads our team with passion and
                                    expertise, ensuring every project meets our high standards of quality.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;