import React, { useEffect, useRef } from 'react';

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = projectsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const projects = [
        {
            icon: 'fas fa-robot',
            title: 'AI Assistant Dashboard',
            description: 'A modern dashboard interface for managing AI-powered workflows, analytics, and user actions with a clean responsive design.',
            tags: ['React', 'Node.js', 'MongoDB'],
            category: 'Web App / Admin UI'
        },
        {
            icon: 'fas fa-store',
            title: 'E-Commerce Platform',
            description: 'A product-focused shopping experience with category filtering, cart workflows, and a structured back office for management.',
            tags: ['Angular', 'Express', 'MySQL'],
            category: 'Full-Stack Commerce'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization platform with interactive charts, custom reporting, and automated insights generation.',
            tags: ['React', 'D3.js', 'Python'],
            category: 'Data Analytics'
        }
    ];

    return (
        <section 
            ref={projectsRef}
            id="projects" 
            className="section py-16 md:py-20 px-4 md:px-6" 
            style={{ zIndex: 40 }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold orbitron-font mb-4">
                            <span className="neon-green">{ '{ }' }</span> FEATURED PROJECTS
                        </h2>
                        <div className="w-24 h-1 accent-gradient rounded-full"></div>
                    </div>
                    <p className="text-gray-400 max-w-2xl">
                        A selection of projects that reflect my focus on product quality, modern interfaces, and scalable full-stack implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <article key={index} className="card rounded-3xl overflow-hidden">
                            <div className="h-48 project-icon flex items-center justify-center">
                                <i className={`${project.icon} text-6xl neon-green opacity-80`}></i>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-400 leading-7 mb-5">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm neon-green">{project.category}</span>
                                    <button 
                                        className="text-green-400 hover:text-green-300 bg-transparent border-none cursor-pointer" 
                                        aria-label={`Open ${project.title} project`}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fas fa-arrow-up-right-from-square"></i>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
