import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const AboutCenter = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <ScrollReveal animation="fade-in-right">
            <div>
              <h2 className="section-title text-orange-500 mb-6">SOBRE O CENTRO INFOKIDS CRISTÃO</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  O Centro Infantil InfoKids Cristão é um espaço dedicado ao desenvolvimento integral da criança, 
                  onde o amor e os valores cristãos são a base de tudo o que fazemos.
                </p>
                <p>
                  Acreditamos que cada criança é um presente de Deus e merece um ambiente seguro, acolhedor e estimulante 
                  para crescer e aprender. Nossa equipe é formada por profissionais apaixonados e comprometidos 
                  em oferecer o melhor cuidado e educação.
                </p>
                <p>
                  Aqui, seu filho encontrará não apenas uma escola, mas uma extensão do seu lar, onde será amado, 
                  respeitado e encorajado a desenvolver todo o seu potencial.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image/Visual content */}
          <ScrollReveal animation="fade-in-left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-blue-100 aspect-[4/3] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80" 
                  alt="Centro Infokids" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ zIndex: 30 }}></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ zIndex: 30 }}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutCenter;
