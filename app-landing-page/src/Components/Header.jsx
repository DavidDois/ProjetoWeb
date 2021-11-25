import React from 'react';
import Navbar from './Navbar';

function Header() {
    return(
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span><bold>Invista</bold></span> com segurança e lucro conosco.</h1>
                <p className='details'>Aqui você pode investir com segurança e lucro, com o nosso poder de reembolso você pode procurar um lucro dentro de 15 dias, caso contrário seu dinheiro é retornado.</p>
                <a href='#' className='cv-btn'>Começar</a>
            </div>
        </div>
    );
}

export default Header;