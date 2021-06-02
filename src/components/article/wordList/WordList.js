import React from 'react';
import './wordList.scss';
import { wordList } from '../../../WordListObject';

const WordList = () => {
    return ( 
      <div id="WordList" className="section">
        <h2>Ordlista</h2>
        <ul>
          {wordList.map(function(wordList) {
            return (
              <li key={wordList.id}>
                <span className="bold">{wordList.word}</span>
                <span className="explanation">{wordList.explanation}</span>
              </li>
            );
          })}
        </ul>
      </div>
    )
}

export default WordList;