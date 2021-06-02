import React from 'react';
import './agerecommendations.scss';
import ExplainedText from '../explainedText/ExplainedText';

const AgeRecommendations = () => {
    const text1 = 'Enligt statistik från Ungar och medier 2017 (sid 45), är ett av de mest populära spelet för pojkar mellan 13-16 år just Counter-Strike: Global Offensive som har PEGI 18-märkning. Spel som klassifieras som PEGI 18 av den europeiska standarden för åldersmärkning för spel som kallas PEGI (Pan-European-Game-Information) är bäst lämpat för vuxna då det kan innehålla grovt, omotiverat, grafiskt våld eller våld mot försvarslösa karaktärer. Spel med klassificeringen PEGI 18 kan även innehålla grafiskt sexuellt innehåll eller användande av alkohol och droger på ett sätt som kan upplevas glamoriserande. Det är inte lagstadgat att följa PEGI-märkningen. Vissa barn tål mer än andra, så det är upp till var vårdnadshavare att avgöra vad man anser lämpligt för sitt barn.';
    return (
        <div id="AgeRecommendations" className="section">
            <h2>Åldersrekommendation</h2>
            <ExplainedText text={text1}/>
        </div>
    )
}

export default AgeRecommendations;