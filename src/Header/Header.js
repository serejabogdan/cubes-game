import React from 'react';
import Buttons from './Buttons/Buttons';
import './Header.css';
import Info from './Info/Info';

const Header = () => {
  return (
    <div className="header">
      <h1>Cubes game</h1>
      <div className="header__game-control">
        <Buttons />
        <Info />
      </div>
    </div>
  );
};

export default Header;
