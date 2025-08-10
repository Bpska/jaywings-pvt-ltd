import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Team from './components/Team';
import Gallery from './components/Gallery';


import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Workflow />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;