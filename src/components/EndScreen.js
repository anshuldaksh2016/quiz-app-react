import React from 'react';
import '../App.css'
import { useContext } from 'react';
import { GameStateContext } from '../Helper/Contexts';
import { Questions } from '../Helper/Questions'

const EndScreen = () => {

    const { gameState, setGameState, score, setScore } = useContext(GameStateContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }

    return (
        <div className="EndScreen">
            <h1>Quiz finised!!</h1>
            <p>Your final score is {score} out of {Questions.length}</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div >
    )
}

export default EndScreen;