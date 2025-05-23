// Initialize parallax effect on all elements with data-parallax-depth attribute
export const initParallax = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('[data-parallax-depth]');
    
    elements.forEach(element => {
      const depth = parseFloat(element.getAttribute('data-parallax-depth'));
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate the element's position relative to the viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      
      // Calculate how far the element is from the center of the viewport
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate the percentage of the viewport height that the element is away from the center
      const percentageFromCenter = distanceFromCenter / viewportCenter;
      
      // Apply the transformation based on the depth and the distance from center
      const translateY = percentageFromCenter * depth * 100;
      
      element.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  };
  
  // Initial call and setup event listener
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  
  // Add resize handler to recalculate positions on window resize
  window.addEventListener('resize', handleScroll);
};