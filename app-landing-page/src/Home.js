import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      {/* <About image={aboutimage} title='Any text here' button='Come on' />
      <Presentation /> */}
      {/* <About image={aboutimage1} title='Any text here' button='Come on' /> */}
      <Contact />
    </div>
  );
}

export default App;