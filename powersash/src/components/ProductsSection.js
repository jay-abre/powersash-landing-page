import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const categories = [
    { name: "Panel Doors", image: "/PanelDoor.png" },
    { name: "Frameless Doors", image: "/FramelessDoor.png" },
    { name: "Carved Doors", image: "/CarvedDoor.png" },
    { name: "Custom Doors", image: "/CustomDoor.png" },
];

const ProductsSection: React.FC = () => {
    return (
        <section id="products" className="py-20 bg-[#F8F6F3]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#3A2D28]">Our Craftsmanship</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#EBE3DB] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h4 className="font-semibold text-lg mb-2 text-[#3A2D28]">{category.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="/products" className="inline-flex items-center bg-[#CBAD8D] text-[#3A2D28] px-8 py-3 rounded-full font-semibold hover:bg-[#A48374] transition-colors">
                        View All Products
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;