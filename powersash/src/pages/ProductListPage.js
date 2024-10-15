import React, {useState, useEffect} from 'react';
import Header from '../components/Header';

const categories = [
    {
        name: "Panel Doors",
        products: [
            {
                id: "PD-02",
                name: "PD-02",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): Choose either 20mm thk or 45 mm thk\nTanguile and Narra available*",
                image: "/PD-02.png"
            },
            {
                id: "PD-06",
                name: "PD-06",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*",
                image: "/PD-06.png"
            },
            {
                id: "PD-07",
                name: "PD-07",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*",
                image: "/PD-07.png"
            },
            {
                id: "PD-08",
                name: "PD-08",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*",
                image: "/PD-08.png"
            },
            {
                id: "PD-15",
                name: "PD-15",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): Choose either 20mm thk or 45 mm thk\nTanguile and Narra available",
                image: "/PD-15.png"
            },
            {
                id: "PD-21",
                name: "PD-21",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available",
                image: "/PD-21.png"
            },
            {
                id: "PD-23",
                name: "PD-23",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available",
                image: "/PD-23.png"
            },
            {
                id: "PD-24",
                name: "PD-24",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available",
                image: "/PD-24.png"
            },
            {
                id: "PD-25",
                name: "PD-25",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*",
                image: "/PD-25.png"
            },
            {
                id: "PD-26",
                name: "PD-26",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*",
                image: "/PD-26.png"
            },
            {
                id: "PD-27",
                name: "PD-27",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 30mm thk\nTanguile and Narra available*",
                image: "/PD-27.png"
            },
            {
                id: "PD-28",
                name: "PD-28",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 45mm thk\nTanguile and Narra available*",
                image: "/PD-28.png"
            },
            {
                id: "PD-29",
                name: "PD-29",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nBest for double-door setting\nTanguile and Narra available*",
                image: "/PD-29.png"
            },
            {
                id: "PD-30",
                name: "PD-30",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nGlass not included\nTanguile and Narra available*",
                image: "/PD-30.png"
            },
            {
                id: "PD-31",
                name: "PD-31",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*",
                image: "/PD-31.png"
            },
            {
                id: "PD-32",
                name: "PD-32",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*",
                image: "/PD-32.png"
            },
            {
                id: "PD-33",
                name: "PD-33",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm or 45mm\nTanguile and Narra available*",
                image: "/PD-33.png"
            },
            {
                id: "PD-34",
                name: "PD-34",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*",
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
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*",
                image: "/FLD-06.png"
            },
            {
                id: "FLD-08",
                name: "FLD-08",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*",
                image: "/FLD-08.png"
            },
            {
                id: "FLD-09",
                name: "FLD-09",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*",
                image: "/FLD-09.png"
            },
            {
                id: "FLD-10",
                name: "FLD-10",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*",
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
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\n“DRAGON”",
                image: "/WC-01.png"
            },
            {
                id: "WC-02",
                name: "WC-02",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\n“EAGLE”",
                image: "/WC-02.png"
            },
            {
                id: "WC-03",
                name: "WC-03",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\n“PEACOCK”",
                image: "/WC-03.png"
            },
            {
                id: "WC-04",
                name: "WC-04",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\n“PHOENIX”",
                image: "/WC-04.png"
            },
        ],
    },
];


function ProductListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const productsPerPage = 9;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <Header
                isScrolled={isScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

                <div className="mb-8">
                    <label htmlFor="category" className="block text-lg font-medium text-[#3A2D28] mb-2">Select
                        Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full px-4 py-2 border border-[#CBAD8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBAD8D] text-[#3A2D28]"
                    >
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-[#EBE3DB] rounded-lg p-6 shadow-md">
                            <img src={product.image} alt={product.name}
                                 className="w-full h-48 object-cover rounded-lg mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2 text-[#3A2D28]">{product.name}</h3>
                            <p className="text-[#3A2D28] whitespace-pre-line">{product.description}</p>
                            <button
                                onClick={() => openModal(product)}
                                className="mt-4 px-4 py-2 bg-[#CBAD8D] text-[#3A2D28] rounded-lg hover:bg-[#A48374] transition-colors"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {Array.from({length: Math.ceil(selectedProducts.length / productsPerPage)}, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-4 py-2 rounded-full ${currentPage === i + 1 ? 'bg-[#CBAD8D] text-[#3A2D28]' : 'bg-[#EBE3DB] text-[#3A2D28]'} hover:bg-[#A48374] transition-colors`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-[#EBE3DB] rounded-lg">
                    <p className="text-[#3A2D28]">
                        <strong>Note:</strong> Jamb, finishing, and doorknob hole excluded. Thickness measurements are
                        approximate, please allot a small margin of error.
                    </p>
                </div>
            </main>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div
                        className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selectedProduct.image} alt={selectedProduct.name}
                             className="w-full h-auto max-w-full max-h-[60vh] object-contain"/>
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
                            <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Privacy
                                Policy</a>
                            <a href="#" className="text-[#D1C7BD] hover:text-[#CBAD8D] transition-colors">Terms of
                                Service</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ProductListPage;