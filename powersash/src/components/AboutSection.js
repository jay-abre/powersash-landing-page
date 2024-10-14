// src/components/AboutSection.js
import React from 'react';

function AboutSection() {
    return (
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
    );
}

export default AboutSection;