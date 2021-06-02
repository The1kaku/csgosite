import React from 'react';
import './howtoplay.scss';
import TeamSelect from './imgs/team_select1156x650.jpg';
import EslProLeague from './imgs/G2ESL-Pro-League453x255.jpg';
import CsgoOld from './imgs/cs_go_old453x254.jpg';

import ExplainedText from '../explainedText/ExplainedText';

const HowToPlay = () => {
    const text1 = 'CS:GO är ett first person shooter spel som är gjort av Valve. CS:GO är en förkortning av Counter Strike: Global Offensive. Ett first player shooter spel är ett spel där man ser allt från en personlig vinkel och där man skjuter fiender. Spelet kom 2012 men det finns tidigare utgåvor av spelet. Det första Counter Strike spelet släpptes bara som ett test spel, men blev så populärt att Valve valde att utveckla serien vidare. ';
    const text2 = 'I början av varje runda kan man köpa vapen, kevlar och granater. Om man är CT kan man även köpa ett desarmerings kit som gör att man kan desarmera bomber snabbare. De olika vapnen som finns att köpa kan delas upp i fyra kategorier; gevär, SMG, pistoler och tunga vapen även kallade heavy. Bland gevären finns bland annat ak-47 för T och M4 för CT och AWP. I kategorin SMG finns olika sorters k-pistar. En SMG är ett mindre semi-automatiskt vapen som oftast skjuter snabbare men gör mindre skada. I kategorin Pistoler finns det olika små pistoler. Sist, i kategorin Heavy finner man shotguns (hagelbössor), samt de tunga maskingäveren: m249 och Negev. ';
    const text3 = 'När runda 1 börjar förses man med 800$, en pistol och en kniv. I varje runda får man bonuspengar beroende på om man lyckats armera/desarmera en bomb och baserat på hur många kills, dvs. hur många i motståndarlaget man dödat, man fått. När man köpt eller plockat upp ett vapen från marken under en runda så har man det med sig i nästa runda om man inte dött. Om man dör måste man vänta tills nästa runda startar. Vid nästa runda spawnas, materialiseras, man med en pistol om man dör och pengarna man redan hade plus dem man tjänade under rundan innan. Alla i sitt lag spawnas på samma ställe. ';
    return (
        <div id="HowToPlay" className="section">
            <h2>Hur man spelar</h2>
            <ExplainedText text={text1}/>
            <img src={TeamSelect} alt="Team Select"/>
            <div className="columns">
                <div className="column">
                    <ExplainedText text={text2}/>
                    <img src={EslProLeague} alt="ESL Pro League" />
                </div>
                <div className="column">
                    <img src={CsgoOld} alt="CS:GO Old" />
                    <ExplainedText text={text3}/>
                </div>
            </div>
        </div>
    )
}

export default HowToPlay;