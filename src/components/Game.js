import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (boardCopy[index] || winner) return;

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player ' + (xIsNext ? 'X' : 'O')}
        </p>
        <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
      </div>
    </>
  );
};

export default Game;
