import React from 'react';
import Navbar from './Navbar';

function FuncionalidadesIntro() {
    return(
        <div id='main' className='noBg'>
            <Navbar/>
            <div className='name'>
                <h1>Veja as <span><bold>Funcionalidades</bold></span> sobre a <span><bold>BitDavid</bold></span>.</h1>
                <p className='details'>Aqui você pode ver e analisar as funcionalidades da nossa aplicação de investimentos na bolsa de valores e mercados NFT's.</p>
            </div>
        </div>
    );
}

export default FuncionalidadesIntro;