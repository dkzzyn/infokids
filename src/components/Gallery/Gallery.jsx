import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const photos = [
  'https://images.unsplash.com/photo-1587654780291-39c940483713?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560785496-7c97d3c27529?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
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

