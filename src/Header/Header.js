import React from 'react';
import './Header.css';

const getButtons = () => {
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
  return buttons.map(({name, className}) => (
    <button type="button" className={className}>
      {name}
    </button>
  ));
};

const Header = () => {
  return (
    <div className="header">
      <h1>Cubes game</h1>
      <div className="header__game-control">
        <div className="header__buttons buttons">{getButtons()}</div>
        <div className="header__game-info info">
          <div className="info__points form-group">
            <label for="points">Points</label>
            <input type="text" className="form-control" id="points" placeholder="47" />
          </div>
          <div className="info__time form-group">
            <label for="time">Time left</label>
            <input type="text" className="form-control" id="time" placeholder="1:00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
