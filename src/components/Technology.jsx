import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxSection from './ParallaxSection';

function Technology() {
  const { t } = useTranslation();
  const techStack = [
    {
      title: t('technology.ai.title'),
      description: t('technology.ai.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: t('technology.models.title'),
      description: t('technology.models.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('technology.api.title'),
      description: t('technology.api.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  const tools = [
    t('technology.tools.varCalculator'), 
    t('technology.tools.durationCalculator'), 
    t('technology.tools.financialModelingSystem'), 
    t('technology.tools.reportGenerator'), 
    t('technology.tools.riskDecompositionEngine'), 
    t('technology.tools.scenarioAnalyzer'), 
    t('technology.tools.monteCarloSimulator'), 
    t('technology.tools.stressTestingFramework')
  ];

  return (
    <ParallaxSection>
      <div id="technology" className="min-h-screen py-24 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/assets/tech-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15)",
          }}
          data-parallax-depth="0.1"
        ></div>

        <div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-full blur-3xl"
          data-parallax-depth="0.3"
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
              data-parallax-depth="0.1"
            >
              {t('technology.title')}
            </h2>
            <p 
              className="text-gray-300 text-lg max-w-3xl mx-auto"
              data-parallax-depth="0.15"
            >
              {t('technology.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="bg-slate-800/40 backdrop-blur p-8 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl transition duration-300 text-center hover:border-blue-500/50 group h-full flex flex-col"
                data-parallax-depth={0.2 + index * 0.05}
              >
                <div className="text-blue-400 mb-4 mx-auto group-hover:text-cyan-300 transition duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition duration-300">{tech.title}</h3>
                <p className="text-gray-400 flex-grow">{tech.description}</p>
              </div>
            ))}
          </div>

          <div 
            className="mt-20 bg-slate-800/30 backdrop-blur-md p-8 rounded-xl border border-slate-700"
            data-parallax-depth="0.25"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">{t('technology.toolsSection.title')}</h3>
            <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              {t('technology.toolsSection.description')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/80 py-3 px-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 hover:bg-slate-800/80 transition duration-300"
                >
                  <span className="text-gray-300 hover:text-blue-400 transition duration-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="mt-20 flex flex-col lg:flex-row gap-8 items-center"
            data-parallax-depth="0.3"
          >
            <div className="lg:w-1/2">
              <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-slate-700 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-gray-400 text-sm">{t('technology.modelPipeline.title')}</div>
                </div>
                <div className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  <pre>{`// Risk Identification Intent Model
await trainModel({
  modelType: "intent-classifier",
  baseModel: "financial-llm-v2.3",
  trainingData: financialRiskDataset,
  hyperparams: {
    epochs: 24,
    batchSize: 32,
    learningRate: 3e-5,
    weightDecay: 0.01
  },
  evaluationMetrics: ["precision", "recall", "f1"]
});

// Risk Assessment Analysis Model
await trainModel({
  modelType: "analyzer",
  baseModel: "financial-llm-v2.3",
  trainingData: expertRiskAssessmentData,
  hyperparams: {
    epochs: 18,
    batchSize: 24,
    learningRate: 2e-5,
    weightDecay: 0.01
  },
  evaluationMetrics: ["accuracy", "mae", "rmse"]
});`}</pre>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{t('technology.modelDevelopment.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('technology.modelDevelopment.description1')}
              </p>
              <p className="text-gray-300 mb-4">
                {t('technology.modelDevelopment.description2')}
              </p>
              <p className="text-gray-300">
                {t('technology.modelDevelopment.description3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default Technology;