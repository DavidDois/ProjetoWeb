import React from 'react';
import Navbar from './Navbar';

function SobreIntro() {
    return(
        <div id='main' className='noBg'>
            <Navbar/>
            <div className='name'>
                <h1>Veja mais <span><bold>Sobre</bold></span> a <span><bold>BitDavid</bold></span>.</h1>
                <p className='details'>A BitDavid é uma empresa fictícia criada por David Aquino Queiroz para o desenvolvimento de um Web-Projeto em seu Curso de Desenvolvimento de Sistemas.</p>

                <p className='details'>Veja aqui benefícios de assinar nosso serviço:</p>
            </div>
        </div>
    );
}

export default SobreIntro;