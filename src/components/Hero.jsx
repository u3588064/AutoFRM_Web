import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxSection from './ParallaxSection';

function Hero() {
  const { t } = useTranslation();
  return (
    <ParallaxSection>
      <div className="min-h-screen flex items-center relative overflow-hidden" id="hero">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/assets/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
          data-parallax-depth="0.2"
        ></div>

        <div 
          className="absolute top-20 -right-10 w-56 h-56 bg-gradient-to-r from-blue-500/30 to-cyan-300/20 rounded-full blur-3xl"
          data-parallax-depth="0.5"
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl"
          data-parallax-depth="0.3"
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
              data-parallax-depth="0.1"
            >
              {t('hero.title')}
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              data-parallax-depth="0.15"
            >
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4" data-parallax-depth="0.2">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-md hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-lg shadow-blue-500/30 text-lg font-medium">
                {t('hero.requestDemo')}
              </button>
              <button className="bg-transparent border border-blue-400 text-blue-400 px-8 py-3 rounded-md hover:bg-blue-400/10 transition duration-300 text-lg font-medium">
                {t('hero.learnMore')}
              </button>
            </div>
          </div>

          <div 
            className="mt-16 flex justify-center"
            data-parallax-depth="0.25"
          >
            <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl shadow-xl border border-slate-700 max-w-3xl">
              <div className="flex items-center justify-center mb-4">
                <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <div className="mx-auto text-gray-400 text-sm">{t('hero.terminal.title')}</div>
              </div>
              <div className="font-mono text-sm text-gray-300">
                <p>&gt; {t('hero.terminal.line1')}</p>
                <p>&gt; {t('hero.terminal.line2')}</p>
                <p>&gt; <span className="text-green-400">{t('hero.terminal.success')}:</span> {t('hero.terminal.line3')}</p>
                <p>&gt; <span className="text-green-400">{t('hero.terminal.success')}:</span> {t('hero.terminal.line4')}</p>
                <p>&gt; <span className="text-green-400">{t('hero.terminal.success')}:</span> {t('hero.terminal.line5')}</p>
                <p>&gt; <span className="text-yellow-400">{t('hero.terminal.pending')}:</span> {t('hero.terminal.line6')}</p>
                <p className="text-blue-400">&gt; {t('hero.terminal.line7')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default Hero;