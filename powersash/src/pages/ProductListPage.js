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
                image: "/placeholder.svg"
            },
            {
                id: "PD-07",
                name: "PD-07",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-08",
                name: "PD-08",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-15",
                name: "PD-15",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): Choose either 20mm thk or 45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-21",
                name: "PD-21",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-23",
                name: "PD-23",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-24",
                name: "PD-24",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-25",
                name: "PD-25",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-26",
                name: "PD-26",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm thk\n45 mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-27",
                name: "PD-27",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 30mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-28",
                name: "PD-28",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm & 45mm thk\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-29",
                name: "PD-29",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nBest for double-door setting\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-30",
                name: "PD-30",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nGlass not included\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-31",
                name: "PD-31",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-32",
                name: "PD-32",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-33",
                name: "PD-33",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): 20mm or 45mm\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "PD-34",
                name: "PD-34",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nPanel (Bandeha): VARIES\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
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
                image: "/placeholder.svg"
            },
            {
                id: "FLD-08",
                name: "FLD-08",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "FLD-09",
                name: "FLD-09",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "FLD-10",
                name: "FLD-10",
                description: "Mahogany kiln-dried wood\n45mm thick solid panel door\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
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
                image: "/placeholder.svg"
            },
            {
                id: "WC-02",
                name: "WC-02",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\n“AGILA”\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "WC-03",
                name: "WC-03",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
            {
                id: "WC-04",
                name: "WC-04",
                description: "Mahogany kiln-dried wood\nFrame: 140mm (w) x 45mm thk\nHand-carved solid panel\n“BUTTERFLY”\nTanguile and Narra available*\nJamb, finishing, and doorknob hole excluded\nThickness measurements are approximate, please allot a small margin of error",
                image: "/placeholder.svg"
            },
        ],
    },
];

function ProductListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
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

    return (
        <div className="min-h-screen bg-[#F8F6F3] text-[#3A2D28]">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F6F3]/70">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/logo.jpg" alt="Power Sash Logo" width={40} height={40} className="rounded-full"/>
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

                <div className="mb-8">
                    <label htmlFor="category" className="block text-lg font-medium text-[#3A2D28] mb-2">Select
                        Category:</label>
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
                        <div key={product.id}
                             className="bg-[#EBE3DB] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                <p className="text-[#A48374] whitespace-pre-line">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {Array.from({length: Math.ceil(selectedProducts.length / productsPerPage)}, (_, i) => (
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