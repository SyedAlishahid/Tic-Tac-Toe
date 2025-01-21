import React, { useState } from 'react';
import Box from './Box.jsx';

const TicTactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const HandleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const spreadArray = [...board];
    spreadArray[index] = xTurn ? "X" : "0";
    setBoard(spreadArray);
    setXTurn(!xTurn);

    calculateWinner(spreadArray)
  }


  const calculateWinner = (board) => {
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

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }
  const Winner = calculateWinner(board);

  const restartGame = () => {
setBoard(Array(9).fill(null))
  }
  return (
    <div className="h-screen w-full bg-[#a8c7bb] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-5xl mb-10 text-blue-400 bg-yellow-200 p-4 rounded-lg">
          Tic Tac Toe
        </h1>

        {xTurn ? <p className={`${Winner ? 'hidden' : 'block'} font-bold text-center text-3xl m-10`}>X turn</p>
          : <p className={`${Winner ? 'hidden' : 'block'} font-bold text-center text-3xl m-10`}>0 turn</p>}
        <div className="grid grid-cols-3 gap-4">
          <Box onClick={() => HandleClick(0)} value={board[0]} />
          <Box onClick={() => HandleClick(1)} value={board[1]} />
          <Box onClick={() => HandleClick(2)} value={board[2]} />
          <Box onClick={() => HandleClick(3)} value={board[3]} />
          <Box onClick={() => HandleClick(4)} value={board[4]} />
          <Box onClick={() => HandleClick(5)} value={board[5]} />
          <Box onClick={() => HandleClick(6)} value={board[6]} />
          <Box onClick={() => HandleClick(7)} value={board[7]} />
          <Box onClick={() => HandleClick(8)} value={board[8]} />
        </div>
        {Winner ? <p className='font-bold text-5xl mb-10 text-blue-700 p-4 rounded-lg'>Winner is {Winner}</p> : ''}
        <button onClick={restartGame} className={`${Winner ? '' : 'hidden'} h-14 w-40 rounded-lg bg-emerald-300 font-bold text-center border-slate-600 border-2 hover:bg-emerald-400`}>Restart The Game!</button>
        </div>
    </div>
  );
};

export default TicTactoe;
