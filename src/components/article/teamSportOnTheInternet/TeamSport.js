import React from 'react';
import './teamsport.scss';
import Mirage from './imgs/mirage_a_site965x543.jpg';
import GlobalElite from './imgs/global_elite478x250.jpg';
import DustMap from './imgs/dust2_map428x428.jpg';
import ElitSerien from './imgs/svenska_elit_serien428x428.jpg'
import NinjasInPyjamas from './imgs/nip1156x650.jpg';

import ExplainedText from '../explainedText/ExplainedText';




const TeamSport = () => {
    const text1 = 'Den vanligaste strategin för CT är att man spelaren med 2 spelare på varje bombplats och en spelare mitt mellan dem. Man har en spelare i mitten så dom kan rotera över till den plats som behöver hjälp. För T är det vanligt att man går hela laget mot en site. Som CT så brukar man kasta rökbomber vid ingångarna till bombplatsen så att det blir svårare för T att komma dit. Om man har lite pengar inför en runda kan man köra en eco runda vilket betyder att man inte köper något. De gör så att man kan köpa bättre vapen och mer granater nästa runda. Man kan även tvingas till en force buy, där man köper vapen även fast att man har för lite pengar för att inte förlora en viktig runda. ';
    const text2 = 'På olika banor finns olika calls, namn på olika positioner. Dem används för att berätta vart motståndarna är för sina medspelare. Exempel på en call som man kan säga är till exempel “Popdog”, men det säger man bara på mappen Train där det finns ett rum som kallas Popdog. Man använder de för att göra kommunikationen enklare och snabbare så att ens lagkamrater kan agera genom att ta skydd eller attackera motståndaren. Ett annat sätt att använda calls är förkortningarna på ställen till exempel “Jag smokar connector”, som betyder att man kastar en rökgranat till stället connector. Samma sak kan man säga om man ska kasta en chockgranat, granat, molotov eller lockgranat. ';
    const text3 = 'I spelet är det viktigt med samarbete för då vinner man oftast mycket mer än om man inte samarbetar alls. Ibland kan man vinna utan samarbete men det är oftast på grund av att några i laget presterar mycket bättre individuellt. Eftersom CS:GO är ett stort spel och spelas runt hela jorden så är det viktigt att kunna prata engelska. Detta gör att man blir van att prata engelska. Man får även en bättre reaktionsförmåga eftersom man måste kunna skjuta motståndaren innan han hinner skjuta dig. ';
    const text4 = 'Under en match så kan man ha en timeout på en minut där man kan gå och dricka vatten, gå på toa eller starta om spelet om det kraschat. Man kan inte pausa en match eftersom det är ett online spel. Om man lämnar en match så kommer man inte kunna spela en till match på 30 min. Om man lämnat matcher flera gånger så kan man bli bannad, avstängd, på olika lång tid. ';
    return (
        <div id="TeamSport" className="section">
            <h2>En lagsport på internet</h2>
            <ExplainedText text={text1}/>
            <div className="columns">
                <div className="column">
                    <img src={Mirage} alt="Mirage Map" />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <ExplainedText text={text2}/>
                    <img src={GlobalElite} alt="Global Elite" />
                    <ExplainedText text={text3}/>
                </div>
                <div className="column">
                    <img src={DustMap} alt="Map 1" />
                    <img src={DustMap} alt="Map 2" />
                    <ExplainedText text={text4}/>
                    <img src={ElitSerien} alt="Svenska ElitSerien" />
                </div>
            </div>
            <img src={NinjasInPyjamas} alt="Ninjas In Pyjamas" />
        </div>
    )
}

export default TeamSport;