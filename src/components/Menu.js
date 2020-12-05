import React from 'react'
import '../App.css'
import { useContext } from 'react';
import { GameStateContext } from '../Helper/Contexts';

const Menu = () => {

    const btnClickHandler(){

    }

    return (
        <div className="Menu">
            <input type="text" placeholder="enter your name" />
            <button onClick={btnClickHandler}>Start Quiz</button>
        </div>
    )
}

export default Menu;
