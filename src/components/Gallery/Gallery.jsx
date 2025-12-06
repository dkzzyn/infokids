import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const photos = [
  '/img/Oracao.png',
  '/img/Oracao.png',
  '/img/Oracao.png',
  '/img/Oracao.png',
  '/img/Oracao.png',
  '/img/Oracao.png',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up" className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">Galeria Completa</h2>
          <p className="text-xl text-gray-600">Veja momentos especiais das nossas atividades</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3]">
                <img src={src} alt={`Foto ${i + 1} da galeria`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

