import React from 'react';

const Box = ({ onClick, value }) => {
  return (
    <div 
      onClick={onClick} 
      disabled={true}
      className='h-36 w-36 rounded-lg bg-green-400 border-2 border-gray-600 cursor-pointer'
    >
        <button className='text-center pt-14 font-bold text-xl'>{value}</button>
    </div>
  );
};

export default Box;
