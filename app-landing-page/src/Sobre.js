import React from 'react';
import Navbar from './Components/Navbar';
import Feature from './Components/Feature';
import SobreIntro from './Components/SobreIntro';
import Contact from './Components/Contact';

function Sobre() {
  return (
    <div className="App">
      <Navbar />
      <SobreIntro />
      <Feature />
      <Contact />
    </div>
  );
}

export default Sobre;