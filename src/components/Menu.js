import React from 'react'
import '../App.css'


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
