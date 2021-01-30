import React from 'react';

const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ onClick, value, index }) => (
  <button style={style} onClick={() => onClick(index)}>
    {value}
  </button>
);
export default Square;
