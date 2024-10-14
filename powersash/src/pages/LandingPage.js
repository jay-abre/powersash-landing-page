import React from 'react';

function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/placeholder.svg" alt="Power Sash Logo" width={40} height={40} className="rounded-full" />
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

            <main className="flex-grow">
                <section className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
                                Crafting Excellence in Wood
                            </h1>
                            <p className="text-xl mb-8 text-gray-300">From door jambs to custom cabinets, we bring your wooden dreams to life.</p>
                            <div className="space-x-4">
                                <a href="#contact" className="inline-block bg-amber-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors">
                                    Get a Quote
                                </a>
                                <a href="#products" className="inline-block border border-amber-400 text-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-gray-900 transition-colors">
                                    Our Products
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0">
                        <img src="/placeholder.svg" alt="Wood texture" className="w-full h-full object-cover opacity-20" />
                    </div>
                </section>

                <section id="products" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Our Craftsmanship</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "Door jambs and door casing",
                                "Capiz windows",
                                "Balusters and balustrades",
                                "Cabinets, bed frames, tables",
                                "Wooden planks, steps, hand rails",
                                "Wood cladding",
                            ].map((product) => (
                                <div key={product} className="bg-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                    <img src="/placeholder.svg" alt={product} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-2 text-amber-400">{product}</h3>
                                        <p className="text-gray-300">Custom-made to your specifications</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-lg font-semibold text-amber-400">
                            And other wood products that you need!
                        </p>
                    </div>
                </section>

                <section id="about" className="py-20 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">About Us</h2>
                                <p className="text-gray-300">
                                    Power Sash Enterprises has been a leader in woodworking for over two decades. Our skilled craftsmen
                                    combine traditional techniques with modern technology to create stunning, durable wood products for your
                                    home and business.
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-amber-400">Our Mission</h3>
                                    <p className="text-gray-300">
                                        To deliver exceptional quality woodwork that enhances the beauty and functionality of every space,
                                        while maintaining the highest standards of craftsmanship and customer satisfaction.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-amber-400">Our Vision</h3>
                                    <p className="text-gray-300">
                                        To be the premier choice for custom woodwork solutions, recognized for our innovation, sustainability,
                                        and commitment to preserving the art of woodworking for future generations.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                                <img src="/placeholder.svg" alt="John Doe - General Manager" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-amber-400">John Doe</h3>
                                    <p className="text-gray-300 mb-4">General Manager</p>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p><strong className="text-amber-400">Email:</strong> john.doe@powersash.com</p>
                                        <p><strong className="text-amber-400">Phone:</strong> +1 (555) 987-6543</p>
                                        <p>
                                            With over 15 years of experience in the woodworking industry, John leads our team with passion and
                                            expertise, ensuring every project meets our high standards of quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">Get in Touch</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-gray-700 rounded-lg p-6 shadow-xl">
                                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Contact Information</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +1 (555) 123-4567
                                    </p>
                                    <p className="flex items-center text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v2a4 4 0 01-8 0v-2m4-10v6m-4 4H6" />
                                        </svg>
                                        info@powersash.com
                                    </p>
                                    <p className="flex items-center text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-amber-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                                        </svg>
                                        123 Woodwork St, Woodtown, ST 12345
                                    </p>
                                </div>
                            </div>
                            <form className="bg-gray-700 rounded-lg p-6 shadow-xl">
                                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Send Us a Message</h3>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md bg-gray-600 text-white" required />
                                    <input type="email" placeholder="Your Email" className="w-full p-4 rounded-md bg-gray-600 text-white" required />
                                    <textarea placeholder="Your Message" className="w-full p-4 rounded-md bg-gray-600 text-white h-32" required></textarea>
                                    <button type="submit" className="bg-amber-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-6 bg-gray-900 text-gray-300">
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Power Sash Enterprises. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
