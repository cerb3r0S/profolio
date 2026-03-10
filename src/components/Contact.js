import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const contactLinks = [
        { icon: 'fas fa-envelope', text: 'oukayasalmane@example.com', href: 'mailto:oukayasalmane@example.com' },
        { icon: 'fas fa-phone', text: '+212 600-000-000', href: 'tel:+212600000000' },
        { icon: 'fas fa-map-marker-alt', text: 'Morocco', href: '#' },
        { icon: 'fab fa-linkedin', text: 'linkedin.com/in/oukayasalmane', href: 'https://linkedin.com/in/oukayasalmane' },
        { icon: 'fab fa-github', text: 'github.com/oukayasalmane', href: 'https://github.com/oukayasalmane' }
    ];

    return (
        <section 
            ref={contactRef}
            id="contact" 
            className="section py-16 md:py-20 px-4 md:px-6 bg-black/25" 
            style={{ zIndex: 50 }}
        >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold orbitron-font mb-4 text-center">
                    <span className="neon-green">#</span> GET IN TOUCH
                </h2>
                <div className="w-24 h-1 accent-gradient mx-auto mb-10 md:mb-14 rounded-full"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-gray-300 leading-7 mb-8">
                            I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology and development. Feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            {contactLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href}
                                    className="contact-link flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-green-800 transition-all"
                                >
                                    <i className={`${link.icon} neon-green text-xl w-6`}></i>
                                    <span className="text-gray-300">{link.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="card rounded-3xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-field w-full px-4 py-3 rounded-lg"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-field w-full px-4 py-3 rounded-lg"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="form-field w-full px-4 py-3 rounded-lg resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                <i className="fas fa-paper-plane"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
