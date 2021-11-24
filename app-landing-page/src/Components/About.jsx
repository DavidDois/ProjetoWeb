import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veniam adipisci non cumque pariatur, quis eius excepturi vel totam ad nisi atque tempore fugiat quidem nam porro aspernatur? Dolores, impedit.</p>
                <button> {props.button} </button>
            </div>
        </div>

    )
}
export default About;