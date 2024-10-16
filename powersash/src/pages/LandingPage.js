// src/pages/LandingPage.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main>
                <HeroSection />
                <ProductsSection />
                <ProjectsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;