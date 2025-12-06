import React from 'react';
import Gallery from '../components/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-b from-blue-100 to-blue-50 border-b border-blue-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Galeria</h1>
          <a href="/" className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Voltar ao Início</a>
        </div>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
};

export default GalleryPage;

