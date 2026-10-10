import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
