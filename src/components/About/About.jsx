import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 to-blue-500 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <ScrollReveal animation="fade-in-up" className="text-center mb-12">
          <h2 className="section-title text-white mb-4">Missão, Visão e Valores</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal animation="fade-in-left" delay={0.2}>
  <div className="relative">
    <div className="rounded-3xl overflow-hidden shadow-2xl">
      
      {/* Mantém proporção 6/9 */}
      <div className="aspect-[6/9]">
        <video
          src="public/img/video01.mp4"
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          controls
        />
      </div>

            </div>
         </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal animation="fade-in-right" delay={0.3}>
          <div className="text-white space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed">
           Nossa missão é oferecer ensino de qualidade, com respeito e dedicação, mantendo longe das crianças tudo que pode diminuir sua pureza e inocência, tendo como base sólida e inegociável os ensinos de Jesus.
           Nosso conceito pedagógico de ensino é baseado no sistema clássico, unindo bases lúdicas conscientes e bem direcionadas, para uma pré alfabetização eficiente de nossas crianças até os 5 anos. Jesus é a nossa inspiração.
            </p>
            
            <p className="text-lg lg:text-xl leading-relaxed">
             Tornar-se referência no ensino cristão infantil, com uma metodologia capaz de construir as bases do letramento, formando assim cidadãos conscientes de sua fé e de sua relevância na construção de uma sociedade saudável, moral e espiritual.
            </p>
            
            <p className="text-lg lg:text-xl leading-relaxed">
            Nossos valores tem como base um dos principais ensinamentos de Jesus, descrito em João 15:12: "Amem-se uns aos outros como eu vos amei". Esse ensinamento é a base de toda nossa conduta, tanto no trato com as crianças quanto no comprometimento com os pais e profissionalismo dentro da equipe.
            </p>

            {/* Subtle dove icon */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/30">
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="text-white/80 italic text-sm">Guiados pela fé, amor e valores cristãos</span>
            </div>
          </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;
