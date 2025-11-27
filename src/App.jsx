// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryCarousel from './components/GalleryCarousel';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutMe />
        <GalleryCarousel/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;