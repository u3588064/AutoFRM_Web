import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxSection from './ParallaxSection';

function Features() {
  const { t } = useTranslation();
  const features = [
    {
      title: t('features.risk.identification.title'),
      description: t('features.risk.identification.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: t('features.risk.monitoring.title'),
      description: t('features.risk.monitoring.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('features.risk.assessment.title'),
      description: t('features.risk.assessment.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('features.risk.mitigation.title'),
      description: t('features.risk.mitigation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <ParallaxSection>
      <div id="features" className="min-h-screen py-24 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/assets/features-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15)",
          }}
          data-parallax-depth="0.1"
        ></div>

        <div 
          className="absolute top-40 right-40 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-full blur-3xl"
          data-parallax-depth="0.3"
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
              data-parallax-depth="0.1"
            >
              {t('features.header')}
            </h2>
            <p 
              className="text-gray-300 text-lg max-w-3xl mx-auto"
              data-parallax-depth="0.15"
            >
              {t('features.subheader')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl transition duration-300 hover:border-blue-500/50 group"
                data-parallax-depth={0.2 + index * 0.05}
              >
                <div className="text-blue-400 mb-4 group-hover:text-cyan-300 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div 
            className="mt-20 text-center"
            data-parallax-depth="0.3"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">{t('features.collaboration.title')}</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              {t('features.collaboration.description')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.environmental')}</span>
              </div>
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.autonomy')}</span>
              </div>
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.toolCalling')}</span>
              </div>
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.decisionMaking')}</span>
              </div>
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.a2aCommunication')}</span>
              </div>
              <div className="bg-slate-800/40 backdrop-blur py-3 px-5 rounded-full border border-slate-700">
                <span className="text-blue-400 font-medium">{t('features.capabilities.anpProtocol')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default Features;