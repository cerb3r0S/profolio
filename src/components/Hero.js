import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const text = "Oukaya Salmane";
        let index = 0;
        const typingElement = document.getElementById('typing-text');
        
        if (typingElement) {
            const typeWriter = () => {
                if (index < text.length) {
                    typingElement.textContent = text.substring(0, index + 1);
                    index++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }
    }, []);

    return (
        <section 
            ref={heroRef}
            id="home" 
            className="section min-h-screen flex items-center px-4 md:px-6 py-12" 
            style={{ zIndex: 10 }}
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <span className="badge">
                            <i className="fas fa-circle text-[10px]"></i> Available for freelance
                        </span>
                        <span className="badge">
                            <i className="fas fa-location-dot"></i> Based in Morocco
                        </span>
                    </div>

                    <div className="space-y-4">
                        <p className="text-base md:text-lg neon-green orbitron-font tracking-[0.2em]">HELLO, I'M</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold orbitron-font leading-tight">
                            <span id="typing-text"></span>
                            <span className="neon-green">|</span>
                        </h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-200">
                            Full-Stack Developer crafting fast, modern and immersive web experiences
                        </h3>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                            I build scalable applications, elegant interfaces, and practical digital products with React, Angular, Node.js, .NET and a strong focus on usability, performance, and clean architecture.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                        <a href="/CV-full.pdf" download className="btn-secondary">
                            <i className="fas fa-download"></i>
                            Download CV
                        </a>
                        <a 
                            href="#projects" 
                            className="btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <i className="fas fa-code"></i>
                            View Projects
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                        <div className="stat-box">
                            <p className="text-2xl md:text-3xl font-bold neon-green orbitron-font">5+</p>
                            <p className="text-sm text-gray-400">Projects built</p>
                        </div>
                        <div className="stat-box">
                            <p className="text-2xl md:text-3xl font-bold neon-green orbitron-font">3+</p>
                            <p className="text-sm text-gray-400">Years learning</p>
                        </div>
                        <div className="stat-box">
                            <p className="text-2xl md:text-3xl font-bold neon-green orbitron-font">100%</p>
                            <p className="text-sm text-gray-400">Passion for tech</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="hero-panel rounded-[2rem] p-6 md:p-8 w-full max-w-xl">
                        <div className="flex justify-center mb-6">
                            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden neon-border">
                                <img src="images/photoProfessionelCV.png" alt="Portrait of Oukaya Salmane" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-6 right-4 md:right-10 w-20 h-20 rounded-full border border-cyan-400/40"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="soft-card rounded-2xl p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Primary Stack</p>
                                <p className="font-semibold text-white">React • Angular • Node.js</p>
                            </div>
                            <div className="soft-card rounded-2xl p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Backend</p>
                                <p className="font-semibold text-white">Express • .NET • Spring Boot</p>
                            </div>
                            <div className="soft-card rounded-2xl p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Design</p>
                                <p className="font-semibold text-white">Figma • UI systems • Responsive UX</p>
                            </div>
                            <div className="soft-card rounded-2xl p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Goal</p>
                                <p className="font-semibold text-white">Ship useful and polished products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
