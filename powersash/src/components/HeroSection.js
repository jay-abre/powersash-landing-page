import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#CBAD8D] to-[#D1C7BD] text-[#3A2D28] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="/natural-wooden-background.jpg" alt="Wood texture" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Crafting Excellence in Wood
                    </h1>
                    <p className="text-xl mb-8 text-[#3A2D28]">From door jambs to custom cabinets, we bring your wooden dreams to life.</p>
                    <div className="space-x-4">
                        <a href="#contact" className="inline-block bg-[#3A2D28] text-[#F8F6F3] px-8 py-3 rounded-full font-semibold hover:bg-[#A48374] transition-colors">
                            Get a Quote
                        </a>
                        <a href="#products" className="inline-block border-2 border-[#3A2D28] text-[#3A2D28] px-8 py-3 rounded-full font-semibold hover:bg-[#3A2D28] hover:text-[#F8F6F3] transition-colors">
                            Our Products
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#F8F6F3" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;