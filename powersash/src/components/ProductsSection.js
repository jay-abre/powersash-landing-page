// src/components/ProductsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductsSection() {
    const products = [
        "Door jambs and door casing",
        "Capiz windows",
        "Balusters and balustrades",
        "Cabinets, bed frames, tables",
        "Wooden planks, steps, hand rails",
        "Wood cladding",
    ];

    return (
        <section id="products" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Our Craftsmanship</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product} className="bg-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src="/placeholder.svg" alt={product} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2 text-amber-400">{product}</h3>
                                <p className="text-gray-300">Custom-made to your specifications</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/products" className="text-amber-400 hover:text-amber-600 transition-colors">
                        More Products
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;