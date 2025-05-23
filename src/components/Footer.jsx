import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
      <div 
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-300/5 rounded-full blur-3xl"
        data-parallax-depth="0.1"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 flex items-center mb-4">
              Auto<span className="text-yellow-400">FRM</span>
              <span className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-300 h-4 w-1 rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.9v14.2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zM7.5 8.5h-2v7h2v-7zm-1-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11.5 5h-2v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-2v7h2v-1.5a3.5 3.5 0 1 0 6 0v-5.5z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.003 10.003 0 01-3.127 1.195A4.92 4.92 0 0016.043 2a4.93 4.93 0 00-4.927 4.93c0 .39.043.765.126 1.125A14.01 14.01 0 011.64 3.27a4.928 4.928 0 00-.667 2.49c0 1.71.87 3.214 2.19 4.1a4.898 4.898 0 01-2.23-.618v.06A4.93 4.93 0 004.9 14.13a4.94 4.94 0 01-2.23.085 4.935 4.935 0 004.604 3.417 9.875 9.875 0 01-6.102 2.105c-.4 0-.79-.023-1.172-.067a13.932 13.932 0 007.55 2.213c9.056 0 14.01-7.503 14.01-14.012 0-.21-.005-.423-.014-.634A10.043 10.043 0 0024 4.59l-.047-.02z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.products.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.products.riskIdentification')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.products.riskMeasurement')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.products.riskAssessment')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.products.riskControl')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.products.apiAccess')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.resources.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.links.documentation')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.links.api')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.links.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.resources.caseStudies')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.resources.community')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.company.aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.company.contact')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.company.investors')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">{t('footer.legal.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition text-sm">{t('footer.legal.privacy')}</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition text-sm">{t('footer.legal.terms')}</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition text-sm">{t('footer.legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;