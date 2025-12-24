import React from 'react';
import BenefitItem from './BenefitItem';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Benefits = () => {
  const benefits = [
    {
      number: 1,
      title: "Ambiente Seguro e Alegre",
      description: "Localizado em uma área tranquila e verde, com nosso próprio parquinho seguro. Nosso centro oferece um refúgio seguro onde as crianças podem explorar, aprender e crescer em um ambiente cristão acolhedor, cheio de amor e carinho.",
      imageBg: "from-blue-100 to-blue-200",
      image: <img src="https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?auto=format&fit=crop&w=800&q=80" alt="Parquinho" className="w-full h-full object-cover" />
    },
    {
      number: 2,
      title: "Projetado para Conforto e Segurança",
      description: "Nosso jardim de infância foi projetado para ser aconchegante e seguro para as crianças. Cada espaço é cuidadosamente elaborado para inspirar criatividade, aprendizado e felicidade, garantindo os mais altos padrões de segurança.",
      imageBg: "from-orange-200 to-orange-300",
      image: <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80" alt="Sala aconchegante" className="w-full h-full object-cover" />
    },
    {
      number: 3,
      title: "Professores Experientes e Amorosos",
      description: "Nossa equipe de educadores experientes utiliza métodos eficazes para o desenvolvimento e socialização infantil. Guiados por valores cristãos, nossos professores oferecem cuidado amoroso que nutre tanto o crescimento acadêmico quanto o desenvolvimento do caráter.",
      imageBg: "from-blue-100 to-blue-200",
      image: <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" alt="Professora" className="w-full h-full object-cover" />
    },
    {
      number: 4,
      title: "Refeições Saudáveis Preparadas com Carinho",
      description: "Oferecemos uma dieta balanceada de 5 refeições (café da manhã, lanche da manhã, almoço, lanche da tarde, jantar) preparadas com amor e cuidado. Cada refeição é planejada para nutrir corpos em crescimento enquanto ensina gratidão.",
      imageBg: "from-blue-100 to-blue-200",
      image: <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80" alt="Comida saudável" className="w-full h-full object-cover" />
    },
    {
      number: 5,
      title: "Aprendizado Baseado em Valores",
      description: "Nossos educadores compartilham uma abordagem unificada para a criação dos filhos, com um educador e um assistente sempre presentes em cada grupo. Enfatizamos valores cristãos, bondade, respeito e desenvolvimento do caráter juntamente com o aprendizado acadêmico.",
      imageBg: "from-blue-100 to-blue-200",
      image: <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" alt="Aprendizado" className="w-full h-full object-cover" />
    },
  ];

  return (
    <section className="relative bg-white py-20 pt-0 lg:pt-0" style={{  zIndex: 20 }}>
      {/* Transparent overlay area for clouds */}
      <div className="absolute top-0 left-0 w-full h-48 pointer-events-none" style={{ zIndex: 0, background: 'transparent' }}></div>
      
      <div className="container mx-auto px-4 relative" style={{ zIndex: 21 }}>
        {/* Section title */}
        <ScrollReveal animation="fade-in-up" className="text-center mb-16 -mt-8 lg:-mt-12 relative" style={{ zIndex: 22 }}>
          <h2 className="section-title text-orange-500 mb-4">Nossos diferenciais</h2>
          
        </ScrollReveal>

        {/* Benefits timeline */}
        <div className="relative py-12">
          {/* Ícones infantis espalhados no fundo - bem espaçados */}
          {/* Avião 1 - Top Left */}
          <div className="absolute top-20 left-4 lg:left-8 animate-float pointer-events-none" style={{ zIndex: 0, animationDelay: '0.2s' }}>
            <svg className="w-12 h-12 text-orange-300/40 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          {/* Dados 1 - Top Right */}
          <div className="absolute top-96 right-4 lg:right-12 animate-float-reverse pointer-events-none" style={{ zIndex: 0, animationDelay: '0.6s' }}>
            <svg className="w-10 h-10 text-blue-300/40 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6 18 6.67 18 7.5 17.33 9 16.5 9z"/>
            </svg>
          </div>
          {/* Bola 1 - Bottom Left */}
          <div className="absolute bottom-32 left-1/4 lg:left-1/3 animate-float pointer-events-none" style={{ zIndex: 0, animationDelay: '1s' }}>
            <svg className="w-11 h-11 text-yellow-300/40" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
            </svg>
          </div>
          {/* Boneca 1 - Bottom Right */}
          <div className="absolute bottom-64 right-1/4 lg:right-1/3 animate-float-reverse pointer-events-none" style={{ zIndex: 0, animationDelay: '0.4s' }}>
            <svg className="w-9 h-9 text-pink-300/40 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3" fill="currentColor"/>
              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
          {/* Avião 2 - Middle Left */}
          <div className="absolute top-1/3 left-8 lg:left-16 animate-float-reverse pointer-events-none" style={{ zIndex: 0, animationDelay: '0.8s' }}>
            <svg className="w-10 h-10 text-orange-300/35 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          {/* Dados 2 - Middle Right */}
          <div className="absolute top-2/3 right-8 lg:right-20 animate-float pointer-events-none" style={{ zIndex: 0, animationDelay: '1.2s' }}>
            <svg className="w-9 h-9 text-blue-300/35 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6 18 6.67 18 7.5 17.33 9 16.5 9z"/>
            </svg>
          </div>
          {/* Bola 2 - Top Center Right */}
          <div className="absolute top-48 right-1/4 lg:right-1/5 animate-float-reverse pointer-events-none" style={{ zIndex: 0, animationDelay: '0.5s' }}>
            <svg className="w-8 h-8 text-yellow-300/35" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
            </svg>
          </div>
          {/* Boneca 2 - Bottom Center Left */}
          <div className="absolute bottom-96 left-1/5 lg:left-1/4 animate-float pointer-events-none" style={{ zIndex: 0, animationDelay: '1.4s' }}>
            <svg className="w-10 h-10 text-pink-300/35 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3" fill="currentColor"/>
              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
          {/* Avião 3 - Top Center */}
          <div className="absolute top-64 left-1/2 transform -translate-x-1/2 animate-float pointer-events-none" style={{ zIndex: 0, animationDelay: '0.3s' }}>
            <svg className="w-9 h-9 text-orange-300/30 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          {/* Bola 3 - Bottom Center */}
         
          
          {/* Dotted curved path - With beautiful flowing curves */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0" style={{ width: '18px', zIndex: 1 }}>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 18 1000" style={{ overflow: 'visible' }}>
              {/* Draw curved path with smooth flowing curves */}
              {Array.from({ length: 140 }).map((_, i) => {
                const t = i / 140;
                const y = 50 + t * 900;
                
                // Create beautiful flowing curves
                // Main S-curve wave (3 complete waves)
                const mainWave = Math.sin(t * Math.PI * 3) * 6;
                // Secondary wave for more organic feel (5 waves)
                const secondaryWave = Math.sin(t * Math.PI * 5 + Math.PI / 4) * 2;
                // Combine for smooth organic curves
                const offset = mainWave + secondaryWave;
                const x = 9 + offset;
                
                // Draw dots along the curve
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="#D3D3D3"
                  />
                );
              })}
            </svg>
          </div>

          {/* Benefit items */}
          <div className="relative space-y-20" style={{ zIndex: 10 }}>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.number}
                number={benefit.number}
                title={benefit.title}
                description={benefit.description}
                imageBg={benefit.imageBg}
                image={benefit.image}
                isEven={index % 2 === 1}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cloud decorations at bottom with gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="benefitsBottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#B0E0E6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Benefits;
