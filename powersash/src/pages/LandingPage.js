// src/pages/LandingPage.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <ProductsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;