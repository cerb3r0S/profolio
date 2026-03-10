import React, { useEffect, useRef, useState } from 'react';

const CursorEffects = () => {
    const cursorDot = useRef(null);
    const cursorRing = useRef(null);
    const cursorText = useRef(null);
    const spotlight = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoverText, setHoverText] = useState('');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            
            if (cursorDot.current) {
                cursorDot.current.style.left = e.clientX + 'px';
                cursorDot.current.style.top = e.clientY + 'px';
            }
            
            if (cursorRing.current) {
                cursorRing.current.style.left = e.clientX + 'px';
                cursorRing.current.style.top = e.clientY + 'px';
            }
            
            if (cursorText.current) {
                cursorText.current.style.left = e.clientX + 'px';
                cursorText.current.style.top = (e.clientY - 30) + 'px';
            }
            
            if (spotlight.current) {
                spotlight.current.style.left = e.clientX + 'px';
                spotlight.current.style.top = e.clientY + 'px';
            }
        };

        const handleMouseEnter = (e) => {
            const target = e.target;
            setIsHovering(true);
            
            if (cursorRing.current) {
                cursorRing.current.style.width = '50px';
                cursorRing.current.style.height = '50px';
                cursorRing.current.style.borderColor = 'rgba(0, 255, 157, 0.9)';
            }
            
            if (spotlight.current) {
                spotlight.current.style.opacity = '1';
            }
            
            // Set hover text based on element
            if (target.tagName === 'A' || target.tagName === 'BUTTON') {
                setHoverText(target.textContent.trim() || 'Click');
                if (cursorText.current) {
                    cursorText.current.style.opacity = '1';
                }
            }
        };

        const handleMouseLeave = (e) => {
            const target = e.target;
            setIsHovering(false);
            
            if (cursorRing.current) {
                cursorRing.current.style.width = '34px';
                cursorRing.current.style.height = '34px';
                cursorRing.current.style.borderColor = 'rgba(0, 255, 157, 0.6)';
            }
            
            if (spotlight.current) {
                spotlight.current.style.opacity = '0';
            }
            
            if (cursorText.current) {
                cursorText.current.style.opacity = '0';
            }
        };

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Update cursor text when hoverText changes
    useEffect(() => {
        if (cursorText.current) {
            cursorText.current.textContent = hoverText;
        }
    }, [hoverText]);

    return (
        <>
            <div className="grid-overlay"></div>
            <div ref={spotlight} className="spotlight" id="spotlight"></div>
            <div ref={cursorDot} className="cursor-dot" id="cursorDot"></div>
            <div ref={cursorRing} className="cursor-ring" id="cursorRing"></div>
            <div ref={cursorText} className="cursor-text" id="cursorText"></div>
        </>
    );
};

export default CursorEffects;
