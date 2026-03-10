import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar sticky top-0 w-full z-50 py-4 px-4 md:px-6" style={{ zIndex: 100 }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <a 
                    href="#home" 
                    className="orbitron-font text-2xl neon-green glitch-text mb-2 md:mb-0" 
                    data-text="Oukaya Salmane"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    Oukaya Salmane
                </a>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-2 md:mb-0">
                    <a 
                        href="#home" 
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                    >
                        About
                    </a>
                    <a 
                        href="#skills" 
                        className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('skills');
                        }}
                    >
                        Skills
                    </a>
                    <a 
                        href="#projects" 
                        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projects');
                        }}
                    >
                        Projects
                    </a>
                    <a 
                        href="#contact" 
                        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                    >
                        Contact
                    </a>
                </div>

                <a 
                    href="#contact" 
                    className="btn-primary text-sm md:text-base"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                >
                    <i className="fas fa-paper-plane"></i>
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
