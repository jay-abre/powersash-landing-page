// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Power Sash</span>
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#products" className="hover:text-amber-400 transition-colors">Products</a>
                    <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
                    <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
                </nav>
                <button className="md:hidden text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;