import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 overflow-visible">
      {/* Estrelas amarelas espalhadas pelo fundo do Hero */}
      <div className="absolute top-20 left-10 animate-float" style={{ zIndex: 1, animationDelay: '0.2s' }}>
        <svg className="w-8 h-8 text-yellow-300/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-32 right-16 animate-float-reverse" style={{ zIndex: 1, animationDelay: '0.9s' }}>
        <svg className="w-10 h-10 text-yellow-400/65" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-48 left-1/4 animate-float" style={{ zIndex: 1, animationDelay: '1.4s' }}>
        <svg className="w-7 h-7 text-yellow-300/55" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-64 right-1/3 animate-float-reverse" style={{ zIndex: 1, animationDelay: '0.6s' }}>
        <svg className="w-9 h-9 text-yellow-400/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ zIndex: 1, animationDelay: '1.1s' }}>
        <svg className="w-8 h-8 text-yellow-300/65" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-24 animate-float-reverse" style={{ zIndex: 1, animationDelay: '0.3s' }}>
        <svg className="w-11 h-11 text-yellow-400/70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ zIndex: 1, animationDelay: '1.7s' }}>
        <svg className="w-6 h-6 text-yellow-300/50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2  items-center">

          {/* Left side - Text content */}
          <div className="text-center lg:text-left relative">
            {/* Estrela amarela - Top Left do texto */}
            <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 animate-float" style={{ zIndex: 1, animationDelay: '0.8s' }}>
              <svg className="w-10 h-10 lg:w-14 lg:h-14 text-yellow-300/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
              </svg>
            </div>

            {/* Estrela amarela - Top Right do texto */}
            <div className="absolute -top-2 right-8 lg:-top-4 lg:right-12 animate-float-reverse" style={{ zIndex: 1, animationDelay: '1.3s' }}>
              <svg className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-400/75" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
              </svg>
            </div>

            {/* Estrela amarela - Middle Left do texto */}
            <div className="absolute top-1/2 -left-6 lg:-left-10 transform -translate-y-1/2 animate-float" style={{ zIndex: 1, animationDelay: '0.4s' }}>
              <svg className="w-7 h-7 lg:w-10 lg:h-10 text-yellow-300/65" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
              </svg>
            </div>

            {/* Estrela amarela - Bottom Left do texto */}
            <div className="absolute bottom-8 -left-2 lg:bottom-12 lg:-left-6 animate-float-reverse" style={{ zIndex: 1, animationDelay: '1.6s' }}>
              <svg className="w-9 h-9 lg:w-11 lg:h-11 text-yellow-400/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
              </svg>
            </div>

            <h1 
              className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in-up"
              style={{ fontFamily: '"Baloo 2", cursive' }}
            >
              <span className="inline-block" style={{ color: '#FF6B35' }}>B</span>
              <span className="inline-block" style={{ color: '#F7931E' }}>E</span>
              <span className="inline-block" style={{ color: '#FFD23F' }}>M</span>
              <span className="inline-block" style={{ color: '#06FFA5' }}>-</span>
              <span className="inline-block" style={{ color: '#4ECDC4' }}>V</span>
              <span className="inline-block" style={{ color: '#7B2CBF' }}>I</span>
              <span className="inline-block" style={{ color: '#FF007F' }}>N</span>
              <span className="inline-block" style={{ color: '#00B8D9' }}>D</span>
              <span className="inline-block" style={{ color: '#F94144' }}>O</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-6 leading-relaxed drop-shadow-md animate-fade-in-up delay-200">
            AO CENTRO INFANTIL INFOKIDS
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed drop-shadow-sm animate-fade-in-up delay-300">
              Oferecemos amor, segurança e desenvolvimento, guiados por fé, bondade e respeito.
              Nossa missão é cultivar crianças com amor, respeito, gentileza e princípios cristãos.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative -mt-8 lg:-mt-12">
            <div className="relative rounded-3xl top-8 ">

              {/* Estrela 1 - Top Right (Amarela) */}
              <div className="absolute top-8 right-4 animate-float" style={{ zIndex: 1 }}>
                <svg className="w-12 h-12 text-yellow-400/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 2 - Bottom Left (Amarela) */}
              <div className="absolute bottom-6 left-6 animate-float-reverse" style={{ zIndex: 1 }}>
                <svg className="w-10 h-10 text-yellow-300/75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 3 - Top Left (Amarela) */}
              <div className="absolute top-4 left-4 animate-float" style={{ zIndex: 1, animationDelay: '0.5s' }}>
                <svg className="w-8 h-8 text-yellow-400/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 4 - Top Center (Amarela) */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 animate-float-reverse" style={{ zIndex: 1, animationDelay: '1s' }}>
                <svg className="w-6 h-6 text-yellow-300/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 5 - Right Center (Amarela) */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 animate-float" style={{ zIndex: 1, animationDelay: '1.5s' }}>
                <svg className="w-9 h-9 text-yellow-400/75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 6 - Bottom Right (Amarela) */}
              <div className="absolute bottom-8 right-8 animate-float-reverse" style={{ zIndex: 1, animationDelay: '0.7s' }}>
                <svg className="w-7 h-7 text-yellow-300/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 7 - Left Center (Amarela) */}
              <div className="absolute top-1/3 left-8 animate-float" style={{ zIndex: 1, animationDelay: '1.2s' }}>
                <svg className="w-8 h-8 text-yellow-400/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              {/* Estrela 8 - Bottom Center (Amarela) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float-reverse" style={{ zIndex: 1, animationDelay: '0.3s' }}>
                <svg className="w-6 h-6 text-yellow-300/75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" />
                </svg>
              </div>

              <img
               src="/img/Oracao.png"
               alt="Crianças em oração no centro"
               className="w-full h-auto object-cover rounded-3xl relative z-50 pt-8 lg:pt-12 animate-scale-in delay-300"
              />

            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          DESKTOP CLOUDS (lower)
      ======================================= */}
      <div 
        className="absolute overflow-visible pointer-events-none hidden md:block animate-cloud-float"
        style={{
          bottom: '-80px',   // ← AQUI: estava -75px
          left: '50%',
          width: '100vw',
          zIndex: 15
        }}
      > 
        <svg
          className="w-full h-auto block"
          viewBox="0 0 1920 260"
          preserveAspectRatio="none"
          style={{
            width: "100vw",
            height: "260px",
            display: "block",
          }}
        >
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#e8f4ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d4eaff" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path d="M0,140 C200,60 350,-20 520,30 C680,80 760,-20 950,10 C1160,50 1250,-40 1450,20 C1620,70 1760,20 1920,60 L1920,260 L0,260 Z" fill="url(#cloudGradient)" opacity="1" />
          <path d="M0,150 C220,90 380,20 560,60 C740,100 860,0 1020,30 C1220,70 1340,-10 1520,40 C1700,90 1820,60 1920,90 L1920,260 L0,260 Z" fill="white" opacity="0.85" />
          <path d="M0,160 C240,120 420,60 620,90 C820,120 1000,60 1180,90 C1400,130 1580,100 1800,120 C1870,130 1920,140 1920,140 L1920,260 L0,260 Z" fill="white" opacity="0.6" />
        </svg>
      </div>

      {/* ======================================
          MOBILE CLOUDS (lower)
      ======================================= */}
      <div 
        className="absolute overflow-visible pointer-events-none md:hidden animate-cloud-float"
        style={{
          bottom: '-30px',   // ← AQUI: estava -20px
          left: '50%',
          width: '100vw',
          zIndex: 15
        }}
      >
        <svg
          className="w-full h-auto block"
          viewBox="0 0 800 150"
          preserveAspectRatio="none"
          style={{
            width: "100vw",
            height: "150px",
            display: "block",
          }}
        >
          <defs>
            <linearGradient id="cloudGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#e8f4ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d4eaff" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path 
            d="M0,80 C100,20 200,-10 320,10 C450,50 520,-10 650,20 C740,40 800,30 800,30 L800,150 L0,150 Z"
            fill="url(#cloudGradientMobile)"
            opacity="1"
          />
          <path 
            d="M0,90 C130,60 240,10 360,30 C470,60 560,10 680,35 C760,60 800,60 800,60 L800,150 L0,150 Z"
            fill="white"
            opacity="0.8"
          />
          <path 
            d="M0,105 C150,85 260,40 380,55 C500,70 610,40 720,65 C770,80 800,85 800,85 L800,150 L0,150 Z"
            fill="white"
            opacity="0.6"
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
