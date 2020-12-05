import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import { GameStateContext } from './Helper/Contexts';
import Quiz from './components/Quiz'
import End from './components/EndScreen'

//[menu , play  , finished]
const App = () => {

  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState("")
  const [score, setScore] = useState(0);
  //make this a global state


  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, userName, setUserName, score, setScore }}>

        {gameState === 'menu' && <Menu />}
        {gameState === 'play' && <Quiz />}
        {gameState === 'finish' && <End />}
      </GameStateContext.Provider>
      {/* set the state accessible to each and every component  */}

      {/*<Menu s={gameState} />*/}
    </div>
  );
}

export default App;
