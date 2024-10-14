// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
                        Crafting Excellence in Wood
                    </h1>
                    <p className="text-xl mb-8 text-gray-300">From door jambs to custom cabinets, we bring your wooden dreams to life.</p>
                    <div className="space-x-4">
                        <a href="#contact" className="inline-block bg-amber-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors">
                            Get a Quote
                        </a>
                        <a href="#products" className="inline-block border border-amber-400 text-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-gray-900 transition-colors">
                            Our Products
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <img src="/natural-wooden-background.jpg" alt="Wood texture" className="w-full h-full object-cover opacity-20" />
            </div>
        </section>
    );
}

export default HeroSection;