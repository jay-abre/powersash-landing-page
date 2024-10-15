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
        <div className="min-h-screen bg-[#F8F6F3] text-[#3A2D28]">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F6F3]/70">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
                        <span className="text-xl font-bold">Power Sash</span>
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-[#A48374] transition-colors">Home</a>
                        <a href="#" className="text-[#A48374]">Products</a>
                        <a href="#contact" className="hover:text-[#A48374] transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-[#EBE3DB] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                <p className="text-[#A48374]">{product.description}</p>
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
                                currentPage === i + 1 ? 'bg-[#CBAD8D] text-[#3A2D28]' : 'bg-[#EBE3DB] text-[#A48374]'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </main>

            <footer className="bg-[#3A2D28] py-8 mt-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[#F8F6F3]">&copy; 2024 Power Sash Enterprises. All rights reserved.</p>
                        <nav className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Privacy Policy</a>
                            <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Terms of Service</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ProductListPage;