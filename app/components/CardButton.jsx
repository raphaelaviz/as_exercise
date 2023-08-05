import React from 'react';

const IconButton = ({ Icon, onClick }) => {
  return (
    <button onClick={onClick} className='transition-transform hover:scale-150'>
      <Icon />
    </button>
  );
}

export default IconButton;
