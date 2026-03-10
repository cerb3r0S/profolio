import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: 'fab fa-github', href: 'https://github.com/oukayasalmane' },
        { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/oukayasalmane' },
        { icon: 'fab fa-twitter', href: 'https://twitter.com/oukayasalmane' },
        { icon: 'fas fa-envelope', href: 'mailto:oukayasalmane@example.com' }
    ];

    return (
        <footer className="py-8 px-4 md:px-6 border-t border-gray-800" style={{ zIndex: 60 }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400">
                            © {currentYear} Oukaya Salmane. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Built with React, Tailwind CSS, and lots of ☕
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="footer-link text-gray-400 hover:text-neon-green transition-colors"
                                aria-label={`Social link ${index + 1}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={`${link.icon} text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
