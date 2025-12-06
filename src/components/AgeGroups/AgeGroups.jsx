import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const AgeGroups = () => {
  const ageGroups = [
    {
      title: "Inglês",
      age: "Didático",
      description: "Vocabulário básico, canções e jogos para introduzir o inglês de forma divertida e prática.",
      color: "from-blue-200 to-blue-300",
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="8" height="14" rx="2" fill="currentColor" />
          <rect x="13" y="4" width="8" height="14" rx="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Balé",
      age: "Didático",
      description: "Expressão corporal, coordenação e ritmo com movimentos lúdicos e musicais.",
      color: "from-pink-200 to-pink-300",
      icon: (
        <svg className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      ),
    },
    {
      title: "Taekwondo",
      age: "Didático",
      description: "Disciplina, equilíbrio e noções de defesa em atividades seguras e orientadas.",
      color: "from-amber-200 to-amber-300",
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-20">
      {/* Cloud divider at top with gradient */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ageGroupsTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#E8F4F8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Main cloud layer */}
          <path d="M0,0 Q100,55 200,35 Q300,65 400,45 Q500,75 600,55 Q700,85 800,65 Q900,95 1000,75 Q1100,105 1200,85 L1200,160 L0,160 Z" fill="url(#ageGroupsTopGradient)" />
          {/* Secondary cloud layer */}
          <path d="M0,0 Q150,50 250,40 Q350,60 450,50 Q550,70 650,60 Q750,80 850,70 Q950,90 1050,80 Q1150,100 1200,90 L1200,160 L0,160 Z" fill="white" opacity="0.8" />
          {/* Bottom smooth transition */}
          <path d="M0,50 Q200,45 400,50 Q600,40 800,45 Q1000,35 1200,40 L1200,160 L0,160 Z" fill="white" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="section-title text-orange-500 mb-4">Atividades Didáticas</h2>
          <p className="text-xl text-gray-600">
            Exemplos práticos: Inglês, Balé e Taekwondo
          </p>
        </ScrollReveal>

        {/* Age group cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <ScrollReveal 
              key={index}
              animation="scale-in" 
              delay={index * 0.1}
            >
            <div
              className={`relative bg-gradient-to-br ${group.color} rounded-3xl p-6 shadow-xl card-soft transform hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {group.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {group.title}
                </h3>
                
                {/* Age */}
                <p className="text-lg font-semibold text-gray-700 text-center mb-4">
                  {group.age}
                </p>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-white/30 rounded-b-3xl"></div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
