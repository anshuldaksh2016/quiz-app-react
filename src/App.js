import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import { GameStateContext } from './Helper/Contexts';


//[menu , play  , finished]
const App = () => {

  const [gameState, setGameState] = useState('menu')
  //make this a global state


  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {
          gameState === 'menu' && (
            <Menu />
          )
        }
      </GameStateContext.Provider>
      {/* set the state accessible to each and every component  */}

      {/*<Menu s={gameState} />*/}
    </div>
  );
}

export default App;
