import React, { useState } from 'react';
import '../App.css'
import { Questions } from '../Helper/Questions';

import { useContext } from 'react';
import { GameStateContext } from '../Helper/Contexts';

const Quiz = () => {
    const { userName } = useContext(GameStateContext);
    //maintain a state for questions index and another for answered 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")


    function chooseOption(option) {
        setOptionChosen(option);

    }

    function nextQuestion() {
        if (Questions[currentQuestion].answer == optionChosen) {
            console.log("Correct!!!")
        }
        else {
            console.log("incorrect")
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className="Quiz">
            <h1>Welcome {userName}</h1>

            <h2>{Questions[currentQuestion].question}</h2>
            <div className="questions">
                <button onClick={() => { chooseOption('optionA') }}>
                    {Questions[currentQuestion].optionA}
                </button>
                <button onClick={() => { chooseOption('optionB') }}>{Questions[currentQuestion].optionB}</button>
                <button
                    onClick={() => { chooseOption('optionC') }}>
                    {Questions[currentQuestion].optionC}
                </button>

                <button
                    onClick={() => { chooseOption('optionD') }}>
                    {Questions[currentQuestion].optionD}
                </button>
            </div>
            <button onClick={nextQuestion}>Next Question</button>


        </div>
    )
}

export default Quiz;
