import React from 'react';
import './reallife.scss';
import Guns from './imgs/guns527x388.png';
import Ranks from './imgs/ranks407x407.jpg';
import EslTournament from './imgs/csgo-esl-tournaments1156x650.png'
import ExplainedText from '../explainedText/ExplainedText';

const RealLife = () => {
    const text1 = 'I spelet finns det skins på de olika vapnen i spelet som ändrar utseendet på ditt vapen, Vissa skins kan kosta 1 krona medans ett annat kan kosta upp till 20 000 kronor. I spelet finns olika ranker som visar hur bra man är. Det finns 9 ranker och av dem är Global Elite den högsta ranken. ';
    const text2 = 'CS:GO är en av de största e-sporterna. Varje år så spelas det många turneringar varav två är “Majors”. Det går ut på samma sak som en fotbollsturnering, man möter andra lag och den som förlorar slås ut från turneringen. De två lagen som kommer till finalen slåss om en stor summa pengar som man vinner. 2018 fanns det en prispott på 1,000,000 dollar. Det bästa laget i världen just nu är Team Vitality.';
    return (
        <div id="RealLife" className="section">
            <h2>Riktiga livet och CS</h2>
            <div className="columns">
                <div className="column">
                    <ExplainedText text={text1}/>
                    <img src={Guns} alt="Guns" />
                </div>
                <div className="column">
                    <img src={Ranks} alt="ranks" />
                    <ExplainedText text={text2}/>
                </div>
            </div>
            <img src={EslTournament} alt="Cologne Tournament" />
        </div>
    )
}

export default RealLife;