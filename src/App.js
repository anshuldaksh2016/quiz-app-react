import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'



//[menu , play  , finished]
const App = () => {

  const [gameState, setGameState] = useState('menu')

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {
        gameState === 'menu' && (
          <Menu />
        )
      }
      {/*<Menu s={gameState} />*/}
    </div>
  );
}

export default App;
