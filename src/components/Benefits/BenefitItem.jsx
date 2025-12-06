import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const BenefitItem = ({ number, title, description, image, imageBg, isEven, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row-reverse' : ''} scroll-fade-in-up ${isVisible ? 'scroll-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      

      {/* Image container with rounded corners */}
      <div 
        className={`flex-shrink-0 w-full lg:w-5/12 relative scroll-fade-in-${isEven ? 'right' : 'left'} ${isVisible ? 'scroll-visible' : ''} hover:scale-105 transition-transform duration-500`}
        style={{ 
          zIndex: 12,
          transitionDelay: `${delay + 0.2}s`
        }}
      >
        <div 
          className={`relative overflow-hidden shadow-lg bg-gradient-to-br ${imageBg || 'from-blue-100 to-blue-200'}`}
          style={{ 
            borderRadius: '14px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="aspect-[4/3] flex items-center justify-center relative">
            {image || (
              <div className="text-center">
                {/* Boneca como placeholder */}
                <svg className="w-32 h-32 mx-auto text-pink-400/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3" fill="currentColor"/>
                  <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Text content */}
      <div 

      >
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
