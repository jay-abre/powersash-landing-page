// src/components/ProductListHeader.js
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const ProductListHeader = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F6F3] shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#3A2D28]' : 'text-[#F8F6F3]'}`}>powersashent</span>
                        <span className={`text-sm transition-colors duration-300 ${isScrolled ? 'text-[#3A2D28]' : 'text-[#F8F6F3]'}`}>Power Sash Enterprises</span>
                    </div>
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className={`transition-colors duration-300 ${isScrolled ? 'text-[#A48374] hover:text-[#3A2D28]' : 'text-[#F8F6F3] hover:text-[#D1C7BD]'}`}>Home</a>
                </nav>
                <button
                    className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-[#3A2D28]' : 'text-[#F8F6F3]'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-[#F8F6F3] shadow-lg"
                >
                    <a href="/" className="block py-2 px-4 text-[#A48374] hover:bg-[#EBE3DB]" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                </motion.div>
            )}
        </header>
    );
};

export default ProductListHeader;