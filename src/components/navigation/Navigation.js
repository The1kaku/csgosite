import React, { useState } from 'react';
import './navigation.scss';

const navItems = [
    {
        id: 1,
        text: "Hur Man Spelar",
        link: "#HowToPlay"
    },
    {
        id: 2,
        text: "En lagsport på internet",
        link: "#TeamSport"
    },
    {
        id: 3,
        text: "Riktiga livet och CS",
        link: "#RealLife"
    },
    {
        id: 4,
        text: "Ordlista",
        link: "#WordList"
    },
    {
        id: 5,
        text: "Åldersrekommendation",
        link: "#AgeRecommendations"
    },
];

const Navigation = () => {

    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <div id="Navigation">
            <button id="Hamburger" onClick={handleToggle} className={`${navOpen ? "cross" : ""}`}><span></span></button>
            <ul className={`${navOpen ? "showNavigation" : ""}`}>
            {navItems.map(function(navItems) {
                return (
                <li key={navItems.id}>
                    <a href={navItems.link}>{navItems.text}</a>
                </li>
                );
            })}
            </ul>
        </div>
    )
}

export default Navigation;