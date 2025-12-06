import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
  });

  const animationClass = `scroll-${animation}`;
  const delayClass = delay > 0 ? `delay-${Math.min(Math.floor(delay * 1000), 800)}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'scroll-visible' : ''} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;





