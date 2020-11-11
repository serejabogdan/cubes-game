import React from 'react';
import {connect} from 'react-redux';
import {startGame} from '../../redux/actions';
import './Buttons.css';

const Buttons = (props) => {
  const buttons = [
    {
      name: 'Start',
      className: 'buttons-start btn btn-success',
      onclick: () => props.startGame({isGameStarted: true})
    },
    {
      name: 'New game',
      className: 'buttons-new-game btn btn-primary'
    }
  ];
  return (
    <div className="buttons">
      {buttons.map(({name, className, onclick}) => (
        <button key={name} type="button" className={className} onClick={onclick}>
          {name}
        </button>
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  startGame
};

export default connect(null, mapDispatchToProps)(Buttons);
