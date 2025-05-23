import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxSection from './ParallaxSection';

function Future() {
  const { t } = useTranslation();
  return (
    <ParallaxSection>
      <div id="future" className="min-h-screen py-24 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/assets/future-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15)",
          }}
          data-parallax-depth="0.1"
        ></div>

        <div 
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"
          data-parallax-depth="0.3"
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
              data-parallax-depth="0.1"
            >
              {t('future.header')}
            </h2>
            <p 
              className="text-gray-300 text-lg max-w-3xl mx-auto"
              data-parallax-depth="0.15"
            >
              {t('future.subheader')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div 
              className="order-2 md:order-1"
              data-parallax-depth="0.2"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Granular Financial Reporting</h3>
              <p className="text-gray-300 mb-4">
                The future of financial reporting is moving towards increased granularity and transparency. AutoFRM is already preparing for this evolution, with systems designed to adapt to more detailed financial statements.
              </p>
              <p className="text-gray-300 mb-6">
                Our adaptive architecture allows us to quickly incorporate new reporting standards and metrics as they emerge, ensuring that our clients always have access to cutting-edge risk management capabilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Enhanced data extraction from detailed financial reports</span>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Automated adaptation to new reporting standards</span>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Advanced natural language processing for regulatory changes</span>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Real-time risk assessment on emerging data streams</span>
                </div>
              </div>
            </div>
            
            <div 
              className="order-1 md:order-2 bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-slate-700 shadow-xl"
              data-parallax-depth="0.25"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500/50 transition duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <img 
                  src="/assets/future-vision.jpg" 
                  alt="Future of Financial Risk Management" 
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400">Adaptive Architecture</h4>
                    <p className="text-sm text-gray-400">Continuously evolving to meet new financial standards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-400">Extended Capabilities</h4>
                    <p className="text-sm text-gray-400">Risk control module completion at 87% and growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="mt-24 bg-slate-800/30 backdrop-blur-md p-8 rounded-xl border border-slate-700 text-center"
            data-parallax-depth="0.3"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Join the Financial Risk Revolution</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              AutoFRM represents the next generation of financial risk management technology. Partner with us to stay ahead of the curve and transform how your organization handles risk.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-md hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-lg shadow-blue-500/30 text-lg font-medium">
              Become an Early Partner
            </button>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default Future;