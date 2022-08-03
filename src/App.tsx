import React, {useEffect, useState} from 'react';
import './App.css';
import Square from './Square';

const initialState:string[] = ["", "", "", "", "", "", "", "", ""];


function App() {

  const [gameState, setGameState] = useState(initialState);

  const [x, setY]= useState(1);

  const onSquareClicked = (index:number):void => {
    if(gameState[index] === ""){
    let strings:string[] = Array.from(gameState);
    strings[index] = x ? "X" : "O";
    setGameState(strings);
    if(x === 1) setY(0); 
    else setY(1); 
    }

    else return;

  }

  useEffect(() => {
   let winner = calculateWinner();
    if(winner){
      alert(`${winner} has won the game!`);
      setGameState(initialState);
    }
  },[gameState])

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
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

      <div>
        <button onClick={() => setGameState(initialState)}>Reset</button>
      </div>

    </div>
  );
}

export default App;
