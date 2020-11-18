import React from 'react';
import './ControlButtons.css';

function controlButtonsSwitch(props) {
  if (props.isGamePaused) {
    return (
      <button type="button" className="buttons-new-game btn btn-primary" onClick={props.onStartGame}>
        Unpause
      </button>
    );
  } else if (props.isGameStarted) {
    return (
      <>
        <button type="button" className="buttons-start btn btn-success" onClick={props.onPause}>
          Pause
        </button>
        <button type="button" className="buttons-new-game btn btn-primary" onClick={props.onNewGame}>
          New game
        </button>
      </>
    );
  } else if (!props.isGameStarted) {
    return (
      <>
        <button type="button" className="buttons-start btn btn-success" onClick={props.onStartGame}>
          Start
        </button>
        {props.isMainContent ? (
          <button type="button" className="buttons-start btn btn-success" onClick={() => props.onMainContent(false)}>
            Result
          </button>
        ) : (
          <button type="button" className="buttons-start btn btn-success" onClick={() => props.onMainContent(true)}>
            Game
          </button>
        )}
      </>
    );
  }
}
const ControlButtons = (props) => {
  return <div className="control-buttons">{controlButtonsSwitch(props)}</div>;
};

export default ControlButtons;
