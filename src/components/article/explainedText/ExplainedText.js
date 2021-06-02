import React from 'react';
import './explainedtext.scss';
import { wordList } from '../../../WordListObject';

// Method 2
/*
    1. Find and save all occurances of all words in an array.

    2. Order them

    3. Split the text according to the found words and save them in an array

    4. Return the arrays.

*/


// Method 2 - Explained
/*
    1. Create FOUND_WORDS array by Looping through all the words in wordList

        1.1 Put current word in an array of objects
            1.1.1 Save the WORD
            1.1.2 Save the START_IDX
            1.1.3 Save the END_IDX
            1.1.4 Save the WORD_ID


    2. Order the FOUND_WORDS array by START_IDX



    3. Create SPLIT_STRINGS array by Looping through the FOUND_WORDS array

        3.1 Set variables
            3.1.1 Set SPLIT_START = 0
            3.1.3 Set N = 0
            3.1.2 Set SPLIT_END = FOUND_WORDS[N].START_IDX

        3.2 Split from SPLIT_START to SPLIT_END
            3.2.1 Set SPLIT_START = FOUND_WORDS[N].END_IDX
            3.2.2 Set N += 1
            3.2.3 Set SPLIT_END = FOUND_WORDS[N].START_IDX



    4. Return SPLIT_STRINGS and FOUND_WORDS.ID in an array
*/

class FoundWord {
    constructor(word, start_idx, end_idx, id) {
        this.word = word;
        this.start_idx = start_idx;
        this.end_idx = end_idx;
        this.id = id;
    }
};

class Result  {
    constructor(str, id) {
        this.str = str;
        this.id = id;
    }
};

function parseText(text) {
    const result = [];
    const foundWords = [];

    // Step 1
    wordList.forEach(word => {
        const regexp = new RegExp(word.regexp, "gi");
        const matches = text.matchAll(regexp); 

        for (const match of matches) {
            const foundWord = new FoundWord(word.word, match.index, match.index + match[0].length, word.id);
            foundWords.push(foundWord);
        }
    });

    if (foundWords.length === 0) return new Result(text, null);
    // Step 2
    foundWords.sort(function(a, b){return a.start_idx-b.start_idx});

    // Step 3 + 4
    let split_start = 0; let split_end;

    foundWords.forEach(word => {
        split_end = word.start_idx;
        const splitString = text.slice(split_start, split_end);
        result.push(new Result(splitString, word.id));
        split_start = word.end_idx;
    });

    return result;
}

class ExplainedText extends React.Component {

    constructor(props) {
        super(props);
        const array = parseText(this.props.text);
        this.state = {
            array: array,
        };
    }

    render() {
        return (
            <p>
                {(this.state.array.id !== null) ? this.state.array.map((item, index) => {
                    return <span key={index}>
                        {item.str}
                        <span className='explanationWrapper'>
                            <span className='explanationTrigger'>
                                {' ' + wordList[item.id-1].word}
                            </span>
                            <span className='explanation'>
                                {wordList[item.id-1].explanation}
                            </span>
                        </span>
                    </span>
                }) : this.state.array.str}
            </p>
        )
    }
}

export default ExplainedText;