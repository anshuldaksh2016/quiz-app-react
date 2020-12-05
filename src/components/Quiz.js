import React from 'react';
import '../App.css'
import { Questions } from '../Helper/Questions';

import { useContext } from 'react';
import { GameStateContext } from '../Helper/Contexts';

const Quiz = () => {
    const { userName } = useContext(GameStateContext);
    return (
        <div className="Quiz">
            <h1>Welcome {userName}</h1>

            {
                Questions.map(quest => {
                    return (
                        <>
                            <h2>{quest.question}</h2>
                            <p>{quest.optionA}</p>
                            <p>{quest.optionB}</p>
                            <p>{quest.optionC}</p>
                            <p>{quest.optionC}</p>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Quiz;
