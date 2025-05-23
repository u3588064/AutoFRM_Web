import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Future from './components/Future';
import Footer from './components/Footer';
import { initParallax } from './utils/parallaxEffect';

function App() {
  useEffect(() => {
    initParallax();
    
    return () => {
      window.removeEventListener('scroll', initParallax);
    };
  }, []);

  return (
    <div className="app bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Future />
      <Footer />
    </div>
  );
}

export default App;