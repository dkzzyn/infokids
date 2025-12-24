import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const GalleryTeaser = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&w=800&q=80" alt="Foto da nossa comunidade" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-right">
            <div>
              <h2 className="section-title text-orange-500 mb-4">Veja nossas fotos</h2>
              <p className="section-subtitle mb-6">Momentos especiais que refletem fé, amor e alegria.</p>
              <a href="/gallery.html" className="btn-primary">Abrir galeria</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;
