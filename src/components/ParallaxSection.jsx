import React, { useEffect, useRef } from 'react';

function ParallaxSection({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const elements = section.querySelectorAll('[data-parallax-depth]');
      
      elements.forEach(element => {
        const depth = parseFloat(element.getAttribute('data-parallax-depth'));
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        // Calculate how far the element is from the center of the viewport
        const centerY = rect.top + rect.height / 2;
        const distanceFromCenter = centerY - viewportHeight / 2;
        
        // Calculate the percentage of the viewport height that the element is away from the center
        const percentageFromCenter = distanceFromCenter / (viewportHeight / 2);
        
        // Apply the transformation based on the depth and the distance from center
        const translateY = percentageFromCenter * depth * 100;
        
        element.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set positions

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative" ref={sectionRef}>
      {children}
    </section>
  );
}

export default ParallaxSection;