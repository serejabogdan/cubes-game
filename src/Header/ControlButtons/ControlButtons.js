import React from 'react';
import Button from './Button/Button';
import './ControlButtons.css';

function controlButtonsSwitch(props) {
  if (props.isGamePaused) {
    return <Button onClick={props.onStartGame}>Unpause</Button>;
  } else if (props.isGameStarted) {
    return (
      <>
        <Button onClick={props.onPause}>Pause</Button>
        <Button onClick={props.onNewGame}>New game</Button>
      </>
    );
  } else if (!props.isGameStarted) {
    return (
      <>
        <Button onClick={props.onStartGame}>Start</Button>
        {props.isMainContent ? (
          <Button onClick={() => props.onMainContent(false)}>Result</Button>
        ) : (
          <Button onClick={() => props.onMainContent(true)}>Game</Button>
        )}
      </>
    );
  }
}

const ControlButtons = (props) => {
  return <div className="control-buttons">{controlButtonsSwitch(props)}</div>;
};

export default ControlButtons;
