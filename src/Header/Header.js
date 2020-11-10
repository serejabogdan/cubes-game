import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div class="header">
      <h1>Cubes game</h1>
      <div class="header__game-control">
        <div class="header__buttons buttons">
          <button type="button" class="buttons-start btn btn-success">
            Start
          </button>
          <button type="button" class="buttons-new-game btn btn-primary">
            New game
          </button>
        </div>
        <div class="header__game-info info">
          <div class="info__points form-group">
            <label for="points">Points</label>
            <input type="text" class="form-control" id="points" placeholder="47" />
          </div>
          <div class="info__time form-group">
            <label for="time">Time left</label>
            <input type="text" class="form-control" id="time" placeholder="1:00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
