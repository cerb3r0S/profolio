import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffects from './components/CursorEffects';
import MatrixBackground from './components/MatrixBackground';
import './styles/index.css';

function App() {
    useEffect(() => {
        // Add smooth scroll behavior with z-index layering
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + scrollPosition;
                const sectionHeight = rect.height;
                
                // Calculate z-index based on scroll position for smooth layering effect
                if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
                    scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
                    // Section is in view - give it higher z-index
                    section.style.zIndex = 50 + index;
                    section.style.transform = 'translateY(0) scale(1)';
                } else if (scrollPosition < sectionTop - window.innerHeight / 2) {
                    // Section is above viewport - lower z-index
                    section.style.zIndex = 10 + index;
                    section.style.transform = 'translateY(0) scale(1)';
                } else {
                    // Section is below viewport - even lower z-index
                    section.style.zIndex = 5 + index;
                    section.style.transform = 'translateY(0) scale(0.98)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <MatrixBackground />
            <CursorEffects />
            <Navbar />
            <main className="pt-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
