import React, { useState } from 'react';

const products = [
    { id: 1, name: "Door jambs and door casing", description: "Custom-made to your specifications", image: "/placeholder.svg" },
    { id: 2, name: "Capiz windows", description: "Elegant and durable window solutions", image: "/placeholder.svg" },
    { id: 3, name: "Balusters and balustrades", description: "Decorative and functional railing components", image: "/placeholder.svg" },
    { id: 4, name: "Cabinets", description: "Custom kitchen and bathroom cabinets", image: "/placeholder.svg" },
    { id: 5, name: "Bed frames", description: "Sturdy and stylish wooden bed frames", image: "/placeholder.svg" },
    { id: 6, name: "Tables", description: "Dining, coffee, and side tables", image: "/placeholder.svg" },
    { id: 7, name: "Wooden planks", description: "High-quality planks for various projects", image: "/placeholder.svg" },
    { id: 8, name: "Steps", description: "Custom wooden steps for interior and exterior use", image: "/placeholder.svg" },
    { id: 9, name: "Hand rails", description: "Smooth and secure wooden hand rails", image: "/placeholder.svg" },
    { id: 10, name: "Wood cladding", description: "Beautiful exterior and interior wood cladding", image: "/placeholder.svg" },
    { id: 11, name: "Wooden flooring", description: "Durable and attractive wooden flooring options", image: "/placeholder.svg" },
    { id: 12, name: "Window frames", description: "Custom window frames for any style", image: "/placeholder.svg" },
    { id: 13, name: "Wooden doors", description: "Interior and exterior doors crafted to perfection", image: "/placeholder.svg" },
    { id: 14, name: "Shelving units", description: "Custom shelving for organization and display", image: "/placeholder.svg" },
    { id: 15, name: "Wooden beams", description: "Structural and decorative wooden beams", image: "/placeholder.svg" },
    // Add more products as needed
];

function ProductListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Power Sash</span>
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
                        <a href="#" className="text-amber-400">Products</a>
                        <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Our Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2 text-amber-400">{product.name}</h3>
                                <p className="text-gray-300">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded ${
                                currentPage === i + 1 ? 'bg-amber-400 text-gray-900' : 'bg-gray-700 text-amber-400'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-900 py-8 mt-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">&copy; 2024 Power Sash Enterprises. All rights reserved.</p>
                        <nav className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ProductListPage;