import React from 'react';
import {connect} from 'react-redux';
import {gameStatus, gameReset, timeUpdate, modalOpenStatus, changeMainContent} from '../redux/actions';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.interval = null;
  }
  onStartGame() {
    this.props.gameStatus({isGameStarted: true, isGamePaused: false});
    const oneSecond = 1000;
    if (!this.interval) {
      this.interval = setInterval(() => this.tick(), oneSecond);
    }
  }

  onNewGame() {
    const gameReset = {
      points: 0,
      timeLeft: 60
    };
    this.props.gameReset(gameReset);
  }

  onPause() {
    this.props.gameStatus({isGameStarted: false, isGamePaused: true});
    this.timerStop();
  }

  timerStop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  tick() {
    const timeIsUp = this.props.timeLeft <= 0;
    if (timeIsUp) {
      this.clear();
      return;
    }

    this.props.timeUpdate({timeLeft: this.props.timeLeft - 1});
  }

  clear() {
    this.props.gameReset({isGameStarted: false, isGamePaused: false, timeLeft: 60, isModalOpen: true});
    this.timerStop();
  }

  gameStartButtons() {
    if (!this.props.mainContent) return;
    return this.props.isGameStarted ? (
      <>
        <button type="button" className="buttons-start btn btn-success" onClick={() => this.onPause()}>
          Pause
        </button>
        <button type="button" className="buttons-new-game btn btn-primary" onClick={() => this.onNewGame()}>
          New game
        </button>
      </>
    ) : this.props.isGamePaused ? (
      <button type="button" className="buttons-new-game btn btn-primary" onClick={() => this.onStartGame()}>
        Unpause
      </button>
    ) : (
      <button type="button" className="buttons-start btn btn-success" onClick={() => this.onStartGame()}>
        Start
      </button>
    );
  }

  onMainContent(value) {
    this.props.changeMainContent({mainContent: value});
  }

  gameOrResults() {
    if (this.props.isGameStarted) return;
    return this.props.mainContent ? (
      <button type="button" className="'buttons-start btn btn-success" onClick={() => this.onMainContent(false)}>
        Results
      </button>
    ) : (
      <button type="button" className="buttons-new-game btn btn-primary" onClick={() => this.onMainContent(true)}>
        Game
      </button>
    );
  }

  timeUpdateOutput() {
    if (this.props.timeLeft > 59) return `01:00`;
    return this.props.timeLeft < 10 ? `00:0${this.props.timeLeft}` : `00:${this.props.timeLeft}`;
  }

  render() {
    return (
      <div className="header">
        <h1>Cubes game</h1>
        <div className="header__game-control">
          <div className="header__buttons buttons">
            {this.gameStartButtons()}
            {this.gameOrResults()}
          </div>
          <div className="header__game-info info">
            <div className="info__points">
              <span>Points</span>
              <div className="info__output form-control">{this.props.points}</div>
            </div>
            <div className="info__time">
              <span>Time left</span>
              <div className="info__output form-control">{this.timeUpdateOutput()}</div>
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
  timeUpdate,
  modalOpenStatus,
  changeMainContent
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
