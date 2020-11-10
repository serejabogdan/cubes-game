import React from 'react';
import './Buttons.css';

const Buttons = () => {
  const buttons = [
    {
      name: 'Start',
      className: 'buttons-start btn btn-success'
    },
    {
      name: 'New game',
      className: 'buttons-new-game btn btn-primary'
    }
  ];
  return (
    <div className="buttons">
      {buttons.map(({name, className}) => (
        <button key={name} type="button" className={className}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
