import React from 'react';
import './article.scss';
import Header from './header/Header';
import HowToPlay from './howToPlay/HowToPlay';
import TeamSport from './teamSportOnTheInternet/TeamSport';
import RealLife from './realLifeAndCSGO/RealLife';
import WordList from './wordList/WordList';
import AgeRecommendations from './ageRecommendations/AgeRecommendations';
import Footer from './footer/Footer';

const Article = () => {
    return (
        <div id="Article">
            <Header/>
            <HowToPlay/>
            <TeamSport/>
            <RealLife/>
            <WordList/>
            <AgeRecommendations/>
            <Footer/>
        </div>
    )
}

export default Article;