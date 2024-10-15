import React, {useState} from 'react';

const categories = [
    {
        name: "Panel Doors",
        products: [
            {
                id: "PD-02",
                name: "PD-02",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): Choose either 20mm thk or 45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-02.png"
            },
            {
                id: "PD-06",
                name: "PD-06",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-06.png"
            },
            {
                id: "PD-07",
                name: "PD-07",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-07.png"
            },
            {
                id: "PD-08",
                name: "PD-08",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-08.png"
            },
            {
                id: "PD-15",
                name: "PD-15",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): Choose either 20mm thk or 45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-15.png"
            },
            {
                id: "PD-21",
                name: "PD-21",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-21.png"
            },
            {
                id: "PD-23",
                name: "PD-23",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-23.png"
            },
            {
                id: "PD-24",
                name: "PD-24",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-24.png"
            },
            {
                id: "PD-25",
                name: "PD-25",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-25.png"
            },
            {
                id: "PD-26",
                name: "PD-26",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-26.png"
            },
            {
                id: "PD-27",
                name: "PD-27",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 30mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-27.png"
            },
            {
                id: "PD-28",
                name: "PD-28",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 45mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-28.png"
            },
            {
                id: "PD-29",
                name: "PD-29",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nBest for double-door setting\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-29.png"
            },
            {
                id: "PD-30",
                name: "PD-30",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nGlass not included\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-30.png"
            },
            {
                id: "PD-31",
                name: "PD-31",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-31.png"
            },
            {
                id: "PD-32",
                name: "PD-32",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-32.png"
            },
            {
                id: "PD-33",
                name: "PD-33",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm or 45mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-33.png"
            },
            {
                id: "PD-34",
                name: "PD-34",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/PD-34.png"
            },
        ],
    },
    {
        name: "Frameless Doors",
        products: [
            {
                id: "FLD-06",
                name: "FLD-06",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/FLD-06.png"
            },
            {
                id: "FLD-08",
                name: "FLD-08",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/FLD-08.png"
            },
            {
                id: "FLD-09",
                name: "FLD-09",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/FLD-09.png"
            },
            {
                id: "FLD-10",
                name: "FLD-10",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/FLD-10.png"
            },
        ],
    },
    {
        name: "Carved Doors",
        products: [
            {
                id: "WC-01",
                name: "WC-01",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\n“DRAGON”\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/WC-01.png"
            },
            {
                id: "WC-02",
                name: "WC-02",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\n“AGILA”\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/WC-02.png"
            },
            {
                id: "WC-03",
                name: "WC-03",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/WC-03.png"
            },
            {
                id: "WC-04",
                name: "WC-04",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\n“BUTTERFLY”\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/WC-04.png"
            },
        ],
    },
];

function ProductListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productsPerPage = 9;

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // Reset to first page when category changes
    };

    const selectedProducts = categories.find(category => category.name === selectedCategory).products;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = selectedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    return (
        <div className="min-h-screen bg-[#F8F6F3] text-[#3A2D28]">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F6F3]/70">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">powersashent</span>
                            <span className="text-sm">Power Sash Enterprises</span>
                        </div>
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

                <div className="mb-8">
                    <label htmlFor="category" className="block text-lg font-medium text-[#3A2D28] mb-2">Select Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                    >
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#EBE3DB] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            onClick={() => openModal(product)}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-[#A48374] whitespace-pre-line mt-2">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {Array.from({ length: Math.ceil(selectedProducts.length / productsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#CBAD8D] text-[#3A2D28]' : 'bg-[#EBE3DB] text-[#A48374]'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </main>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto max-w-full max-h-[60vh] object-contain" />
                        <h3 className="font-semibold text-lg mt-4">{selectedProduct.name}</h3>
                        <p className="text-[#A48374] whitespace-pre-line mt-2">{selectedProduct.description}</p>
                    </div>
                </div>
            )}

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