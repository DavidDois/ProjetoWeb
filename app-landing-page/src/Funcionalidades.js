import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import FuncionalidadesIntro from './Components/FuncionalidadesIntro';
import aboutimage from './images/Frame 19.png';

function Funcionalidades() {
  return (
    <div className="App">
      <Navbar />
      <FuncionalidadesIntro />
      <About image={aboutimage} title='Notificações' descriptions='Nosso sistema de notificações avisa quando o mercado tem qualquer alterção, fazendo assim notificações para melhor experiência do usuário.' button='Ver mais' />
    </div>
  );
}

export default Funcionalidades;