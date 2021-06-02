import React from 'react';
import './header.scss';
import title_image from './imgs/title_image1156x650.jpg';

const Header = () => {
    return (
        <div id="Header" className="section">
            <h1>Föräldrarguide till spelet<span> CS:GO</span></h1>
            <span>Av Villiam Taxén <br/>& Måns Zetterström</span>
            <img src={title_image} alt="Big CS:GO wallpaper" />
        </div>
    )
}

export default Header;