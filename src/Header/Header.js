import React from 'react';
import {connect} from 'react-redux';
import {gameStatus, gameReset, timeLeft, modalOpenStatus} from '../redux/actions';
import './Header.css';

class Header extends React.Component {
  onStartGame() {
    this.props.gameStatus({isGameStarted: true});
    this.timeLeft();
  }

  timeLeft() {
    if (!this.props.time) {
      return this.timeIsUp();
    }
    const oneSecond = 1000;
    setTimeout(() => this.tick(), oneSecond);
  }

  timeIsUp() {
    const gameReset = {
      timeLeft: 5,
      isGameStarted: false
    };
    this.props.gameReset(gameReset);
    this.props.modalOpenStatus({isModalOpen: true});
  }

  tick() {
    this.props.timeLeft({time: this.props.time - 1});
    return this.timeLeft();
  }

  isGameStarted() {
    return this.props.isGameStarted ? (
      <button type="button" className="buttons-new-game btn btn-primary">
        New game
      </button>
    ) : (
      <button type="button" className="buttons-start btn btn-success" onClick={() => this.onStartGame()}>
        Start
      </button>
    );
  }

  timeLeftOutput() {
    if (this.props.time > 59) return `01:00`;
    return this.props.time < 10 ? `00:0${this.props.time}` : `00:${this.props.time}`;
  }

  render() {
    return (
      <div className="header">
        <h1>Cubes game</h1>
        <div className="header__game-control">
          <div className="header__buttons buttons">{this.isGameStarted()}</div>
          <div className="header__game-info info">
            <div className="info__points">
              <span>Points</span>
              <div className="info__output form-control">{this.props.points}</div>
            </div>
            <div className="info__time">
              <span>Time left</span>
              <div className="info__output form-control">{this.timeLeftOutput()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  gameStatus,
  gameReset,
  timeLeft,
  modalOpenStatus
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
