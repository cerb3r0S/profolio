import React, { useEffect, useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={aboutRef}
            id="about" 
            className="section py-16 md:py-20 px-4 md:px-6" 
            style={{ zIndex: 20 }}
        >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold orbitron-font mb-4 text-center">
                    <span className="neon-green">//</span> ABOUT ME
                </h2>
                <div className="w-24 h-1 accent-gradient mx-auto mb-10 md:mb-14 rounded-full"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-base md:text-lg leading-8">
                            I'm Oukaya Salmane, a developer focused on creating practical products with clean code and modern design. I enjoy turning ideas into responsive, user-friendly applications that feel fast, intuitive, and visually polished.
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-8">
                            My background spans front-end engineering, back-end APIs, and UI/UX thinking, which helps me bridge product design and technical implementation. I like building systems that are maintainable, scalable, and enjoyable to use.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="card rounded-2xl p-5">
                                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                                    <i className="fas fa-code neon-green text-xl"></i>
                                </div>
                                <h4 className="font-bold mb-2">End-to-end development</h4>
                                <p className="text-gray-400 text-sm">From interface design to API integration and deployment-ready structure.</p>
                            </div>
                            <div className="card rounded-2xl p-5">
                                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mb-4">
                                    <i className="fas fa-bolt neon-green text-xl"></i>
                                </div>
                                <h4 className="font-bold mb-2">Performance mindset</h4>
                                <p className="text-gray-400 text-sm">Focused on responsive layouts, accessibility, and polished interactions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-3xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-6">What I bring</h3>
                        <div className="space-y-6">
                            <div className="timeline-item pb-6">
                                <h4 className="font-semibold text-white mb-1">Modern Front-End Development</h4>
                                <p className="text-gray-400">Building responsive interfaces with React, Angular, Tailwind CSS, and component-driven thinking.</p>
                            </div>
                            <div className="timeline-item pb-6">
                                <h4 className="font-semibold text-white mb-1">Robust Back-End Solutions</h4>
                                <p className="text-gray-400">Designing APIs and server-side features with Node.js, Express, .NET, Java, and Spring Boot.</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="font-semibold text-white mb-1">Product & UI/UX Sensibility</h4>
                                <p className="text-gray-400">Creating interfaces that are not only functional, but also coherent, intuitive, and pleasant to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
