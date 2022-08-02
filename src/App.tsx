import React, {useState} from 'react';
import './App.css';
import Square from './Square';

const initialState:string[] = ["", "", "", "", "", "", "", "", ""];


function App() {

  const [gameState, setGameState] = useState(initialState);

  const [x, setY]= useState(1);

  const onSquareClicked = (index:number) => {
    let strings = Array.from(gameState);
    strings[index] = x ? "X" : "O";
    setGameState(strings);
    if(x === 1){
    setY(0); }

    else setY(1);

  }

  return (
    <div className='App'>
      <div className='heading__Style'> <h1>Tic Tac Toe</h1> </div>
      <div className='main__Body'>
      <div>
        <Square state={gameState[0]} onClick={() => onSquareClicked(0) } />
        <Square state={gameState[1]} onClick={() => onSquareClicked(1) } />
        <Square state={gameState[2]} onClick={() => onSquareClicked(2) } />
      </div>

      <div>
      <Square state={gameState[3]} onClick={() => onSquareClicked(3) } />
      <Square state={gameState[4]} onClick={() => onSquareClicked(4) } />
      <Square state={gameState[5]} onClick={() => onSquareClicked(5) } />
      </div>

      <div>
      <Square state={gameState[6]} onClick={() => onSquareClicked(6) } />
      <Square state={gameState[7]} onClick={() => onSquareClicked(7) } />
      <Square state={gameState[8]} onClick={() => onSquareClicked(8) } />
      </div>

      </div>
    </div>
  );
}

export default App;
