import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        name: 'Interior Wood Cladding Installation',
        description: 'Word of Hope Central',
        image: '/project1.png',
    },
    {
        id: 2,
        name: 'Home Office',
        description: 'Mandaluyong',
        image: '/project2.png',
    },
    {
        id:3,
        name: 'Custom Woodwork',
        description: 'Bulacan',
        image: '/project3.png',
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section id="projects" className="py-16 bg-[#F8F6F3] text-[#3A2D28]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#EBE3DB] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                                onClick={() => openModal(project)}
                            />
                            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-[#3A2D28]">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto max-w-full max-h-[60vh] object-contain" />
                        <h3 className="font-semibold text-lg mt-4">{selectedProject.name}</h3>
                        <p className="text-[#A48374] whitespace-pre-line mt-2">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;