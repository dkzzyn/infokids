import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutCenter from './components/AboutCenter/AboutCenter';
import Benefits from './components/Benefits/Benefits';
import About from './components/About/About';
import AgeGroups from './components/AgeGroups/AgeGroups';
import Footer from './components/Footer/Footer';
import GalleryTeaser from './components/GalleryTeaser/GalleryTeaser';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutCenter />
        <Benefits />
        <About />
        <AgeGroups />
        <GalleryTeaser />
      </main>
      <Footer />
    </div>
  );
}

export default App;





