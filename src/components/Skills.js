import React, { useEffect, useRef } from 'react';

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Animate skill bars when section becomes visible
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 200);
                    });
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = skillsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const skills = [
        { name: 'React / Angular', level: 90 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'HTML / CSS / Tailwind', level: 95 },
        { name: 'MongoDB / MySQL', level: 84 },
        { name: 'C# / .NET', level: 85 }
    ];

    const tools = [
        { icon: 'fab fa-figma', name: 'Figma' },
        { icon: 'fab fa-git-alt', name: 'Git' },
        { icon: 'fab fa-java', name: 'Java' },
        { icon: 'fas fa-leaf', name: 'Spring Boot' },
        { icon: 'fas fa-server', name: 'REST APIs' },
        { icon: 'fas fa-wand-magic-sparkles', name: 'Animations' }
    ];

    return (
        <section 
            ref={skillsRef}
            id="skills" 
            className="section py-16 md:py-20 px-4 md:px-6 bg-black/25" 
            style={{ zIndex: 30 }}
        >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold orbitron-font mb-4 text-center">
                    <span className="neon-green">&lt;/&gt;</span> TECHNICAL SKILLS
                </h2>
                <div className="w-24 h-1 accent-gradient mx-auto mb-10 md:mb-14 rounded-full"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <div className="card rounded-3xl p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-8">Development Stack</h3>

                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span>{skill.name}</span>
                                        <span className="neon-green">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            data-width={skill.level}
                                            style={{ transition: 'width 1.5s ease-out' }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card rounded-3xl p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-8">Design & Tools</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {tools.map((tool, index) => (
                                <div key={index} className="soft-card rounded-2xl p-4 text-center">
                                    <i className={`${tool.icon} text-2xl neon-green mb-3`}></i>
                                    <p className="font-semibold">{tool.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 soft-card rounded-2xl p-5">
                            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">Working style</p>
                            <p className="text-gray-300 leading-7">
                                I value readable code, modular architecture, responsive design, version control discipline, and interfaces that help users complete tasks easily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
