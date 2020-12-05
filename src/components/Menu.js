import React from 'react'
import '../App.css'
import { useContext } from 'react';
import { GameStateContext } from '../Helper/Contexts';

const Menu = () => {

    // get an instance of that context
    const { gameState, setGameState } = useContext(GameStateContext);


    return (
        <div className="Menu">
            <input type="text"
                placeholder="enter your name"
            />

            <button onClick={() => {

                setGameState('play')
            }}>
                Start Quiz</button>
        </div>
    )
}

export default Menu;
