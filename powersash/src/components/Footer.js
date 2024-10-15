import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#3A2D28] text-[#F8F6F3] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Power Sash Enterprises. All rights reserved.</p>
                    <nav className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Terms of Service</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;