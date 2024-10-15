import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <section id="about" className="py-20 bg-[#EBE3DB]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-[#3A2D28]">About Us</h2>
                        <p className="text-[#A48374] text-justify">
                            Our workshop boasts over 20 years of expertise in crafting doors, door jambs, and a range of wooden products. Our woodworking solutions are designed to surpass expectations, enhancing the beauty and functionality of homes, offices, and other spaces. Operating throughout Luzon, we have successfully completed projects for many esteemed establishments, building a strong reputation for reliability and exceptional craftsmanship. Our principles and the company's unwavering commitment to integrity are deeply inspired by faith in God. This foundation guides every aspect of our operations, from our craftsmanship to our customer relationships, ensuring we uphold the highest standards of excellence and morality.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-[#3A2D28]">Our Mission</h3>
                            <p className="text-[#A48374] text-justify">
                                To deliver exceptional doors and wooden products that stand the test of time, and to combine traditional craftsmanship with modern design to meet the diverse needs of our customers while maintaining integrity and great bonds with clients.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-[#3A2D28]">Our Vision</h3>
                            <p className="text-[#A48374] text-justify">
                                To be the leading provider of high-quality woodworking products, known for our dedication to traditional craftsmanship, honesty, and customer satisfaction.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F8F6F3] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openModal({
                            image: "/engr.rex.jpg",
                            name: "Engr. Rex Mendoza",
                            title: "Manager",
                            email: "m.jeremiahjabez@gmail.com",
                            phone: "0933 347 5084",
                            description: "With over 20 years of experience in the woodworking industry, Engr. Rex Mendoza leads our team with passion and expertise, ensuring every project meets our high standards of quality."
                        })}
                    >
                        <img src="/engr.rex.jpg" alt="Engr. Rex Mendoza" className="w-full h-80 object-cover object-top" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-[#3A2D28]">Engr. Rex Mendoza</h3>
                            <p className="text-[#3A2D28] mb-4">Manager</p>
                            <div className="space-y-2 text-sm text-[#3A2D28]">
                                <p><strong className="text-[#CBAD8D]">Email:</strong> m.jeremiahjabez@gmail.com</p>
                                <p><strong className="text-[#CBAD8D]">Phone:</strong> 0933 347 5084</p>
                                <p>
                                    With over 20 years of experience in the woodworking industry,
                                    Engr. Rex Mendoza leads our team with passion and expertise,
                                    ensuring every project meets our high standards of quality.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={modalContent.image} alt={modalContent.name} className="w-full h-auto max-w-full max-h-[60vh] object-contain" />
                        <h3 className="font-semibold text-lg mt-4">{modalContent.name}</h3>
                        <p className="text-[#A48374] mb-4">{modalContent.title}</p>
                        <div className="space-y-2 text-sm text-[#3A2D28]">
                            <p><strong className="text-[#CBAD8D]">Email:</strong> {modalContent.email}</p>
                            <p><strong className="text-[#CBAD8D]">Phone:</strong> {modalContent.phone}</p>
                            <p>{modalContent.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutSection;