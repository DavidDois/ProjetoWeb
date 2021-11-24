import React from 'react';
import Navbar from './Navbar';

function Header() {
    return(
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span>Launch your app</span> With Confidence And Creativity</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum inventore, facere cupiditate ut quas soluta aliquid magnam suscipit aspernatur quod tenetur qui sequi voluptas sit quaerat non exercitationem voluptatum.</p>
                <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>
    );
}

export default Header;