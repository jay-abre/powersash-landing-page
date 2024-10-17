import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ProductListHeader from "../components/ProductListHeader";
import Footer from '../components/Footer';
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
const ProductListPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const productsPerPage = 9;
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
        });
    }, [controls]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1);
    };

    const selectedProducts = categories.find(category => category.name === selectedCategory)?.products || [];
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = selectedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const openModal = (product: any) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    return (
        <div className="min-h-screen bg-[#F8F6F3] text-[#3A2D28]">
            <ProductListHeader isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main className="container mx-auto px-0">
                <section
                    className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#CBAD8D] to-[#D1C7BD] text-[#3A2D28] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            src="/natural-wooden-background.jpg"
                            alt="Wood texture"
                            className="w-full h-full object-cover"
                            initial={{opacity: 0, scale: 1.1}}
                            animate={{opacity: 0.2, scale: 1}}
                            transition={{duration: 1.5}}
                        />
                    </div>
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-[#3A2D28] mb-6"
                            initial={{opacity: 0, y: -20}}
                            animate={controls}
                        >
                            Our Crafted Products
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#3A2D28] mb-12"
                            initial={{opacity: 0, y: 20}}
                            animate={controls}
                        >
                            Explore our wide range of handcrafted wooden masterpieces
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={controls}
                        >
                            <a
                                href="#product-list"
                                className="inline-block bg-white text-[#3A2D28] px-8 py-3 rounded-full font-semibold hover:bg-[#F8F6F3] transition-colors duration-300 shadow-lg"
                            >
                                Discover Our Collection
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: [0, 10, 0]}}
                        transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
                    >
                        <ChevronDown className="text-white w-8 h-8"/>
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                            <path
                                fill="#F8F6F3"
                                fillOpacity="1"
                                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </section>

                <div id="product-list" className="mb-8 mt-8 px-4">
                    <label htmlFor="category" className="block text-lg font-medium text-[#3A2D28] mb-2">
                        Select Category:
                    </label>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {currentProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-[#EBE3DB] rounded-lg p-6 shadow-md flex flex-col justify-between"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <div>
                                <img src={product.image} alt={product.name}
                                     className="w-full h-64 object-cover rounded-lg mb-4"/>
                                <h3 className="text-2xl font-semibold mb-2 text-[#3A2D28]">{product.name}</h3>
                                <p className="text-[#3A2D28] whitespace-pre-line">{product.description}</p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => openModal(product)}
                                    className="bg-[#CBAD8D] text-[#3A2D28] px-4 py-2 rounded-full font-semibold hover:bg-[#A48374] transition-colors"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {Array.from({length: Math.ceil(selectedProducts.length / productsPerPage)}, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-4 py-2 rounded-full ${
                                currentPage === i + 1 ? 'bg-[#CBAD8D] text-[#3A2D28]' : 'bg-[#EBE3DB] text-[#3A2D28]'
                            } hover:bg-[#A48374] transition-colors`}
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
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-auto max-w-full max-h-[60vh] object-contain"
                        />
                        <h3 className="font-semibold text-lg mt-4">{selectedProduct.name}</h3>
                        <p className="text-[#A48374] whitespace-pre-line mt-2">{selectedProduct.description}</p>
                    </div>
                </div>
            )}

            <Footer/>
        </div>
    );
}

export default ProductListPage;