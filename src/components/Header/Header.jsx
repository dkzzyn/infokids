import React, { useState } from 'react';
import logoImg from '../../public/img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-b from-blue-100 to-blue-50 overflow-hidden">

      {/* Top Navigation Bar */}
      <div className="relative z-10 bg-blue-100/80 backdrop-blur-sm border-b border-blue-200/50">
        <div className="container mx-auto px-2 py-0">
          <div className="flex flex-row items-center justify-between w-full h-[70px] lg:h-[80px]">

            {/* Logo */}
            <div className="flex items-center -my-3 lg:-my-5">
              <img 
                src={logoImg} 
                alt="logo" 
                className="w-16 h-16 lg:w-32 lg:h-32 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 text-sm font-medium text-gray-700">
              <a href="#about" className="hover:text-orange-500 transition-colors">SOBRE O CENTRO</a>
              <a href="#activities" className="hover:text-orange-500 transition-colors">ATIVIDADES E PASSEIOS</a>
              <a href="/gallery.html" className="hover:text-orange-500 transition-colors">GALERIA DE FOTOS</a>
              <a href="#team" className="hover:text-orange-500 transition-colors">NOSSA EQUIPE</a>
              <a href="#news" className="hover:text-orange-500 transition-colors">NOTÍCIAS</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">CONTATO</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Alternar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-1 pb-2 border-t border-blue-200/50 pt-2">
              <div className="flex flex-col space-y-1 text-sm font-medium text-gray-700">
                <a href="#about" className="hover:text-orange-500 transition-colors py-1">SOBRE O CENTRO</a>
                <a href="#activities" className="hover:text-orange-500 transition-colors py-1">ATIVIDADES E PASSEIOS</a>
                <a href="/gallery.html" className="hover:text-orange-500 transition-colors py-1">GALERIA DE FOTOS</a>
                <a href="#team" className="hover:text-orange-500 transition-colors py-1">NOSSA EQUIPE</a>
                <a href="#news" className="hover:text-orange-500 transition-colors py-1">NOTÍCIAS</a>
                <a href="#contact" className="hover:text-orange-500 transition-colors py-1">CONTATO</a>
              </div>
            </nav>
          )}
        </div>
      </div>

    </header>
  );
};

export default Header;
