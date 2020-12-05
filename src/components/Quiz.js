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

    const { gameState, setGameState, score, setScore } = useContext(GameStateContext)


    function chooseOption(option) {
        setOptionChosen(option);

    }

    function nextQuestion() {
        if (Questions[currentQuestion].answer == optionChosen) {
            console.log("Correct!!!")
            setScore(score + 1)
        }

        setCurrentQuestion(currentQuestion + 1)
    }

    function finishQuiz() {
        setGameState('finish');
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

            {
                currentQuestion == Questions.length - 1 ?
                    (<button
                        onClick={finishQuiz}>
                        FinishQuiz
                    </button>) :
                    (
                        <button onClick={nextQuestion}>Next</button>
                    )

            }



        </div>
    )
}

export default Quiz;
