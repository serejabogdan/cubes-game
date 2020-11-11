import React from 'react';
import {connect} from 'react-redux';
import {startGame} from '../redux/actions';
import './Header.css';

class Header extends React.Component {
  onStartGame() {
    this.props.startGame({isGameStarted: true});
  }
  render() {
    return (
      <div className="header">
        <h1>Cubes game</h1>
        <div className="header__game-control">
          <div className="header__buttons buttons">
            <button type="button" className="buttons-start btn btn-success" onClick={() => this.onStartGame()}>
              Start
            </button>
            <button type="button" className="buttons-new-game btn btn-primary">
              New game
            </button>
          </div>
          <div className="header__game-info info">
            <div className="info__points">
              <span>Points</span>
              <div className="info__output form-control">{this.props.points}</div>
            </div>
            <div className="info__time">
              <span>Time left</span>
              <div className="info__output form-control">{this.props.points}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  startGame
};

const mapStateToProps = (state) => {
  return {
    points: state.points
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
