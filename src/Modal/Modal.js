import React, {useState} from 'react';
import {connect} from 'react-redux';
import {gameReset} from '../redux/actions';
import './Modal.css';

const Modal = (props) => {
  const [state, setState] = useState({nickname: ''});

  const onChangeNickname = (e) => {
    const nickname = e.target.value;
    setState((prevState) => ({...prevState, nickname}));
  };

  const onSavePlayer = () => {
    // TODO: bug fix repetitions
    const prevLocalStorage = localStorageGet('players') || [];
    const player = {nickname: state.nickname, points: props.points};
    prevLocalStorage.push(player);
    localStorageSave('players', prevLocalStorage);
    props.gameReset({points: 0, isModalOpen: false});
  };

  const localStorageSave = (key, player) => {
    localStorage.setItem(key, JSON.stringify(player));
  };
  const localStorageGet = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return (
    <div className="modal" id="exampleModalCentered" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenteredLabel">
              Player
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Enter your nickname</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Your nickname"
                  onChange={onChangeNickname}
                  value={state.nickname}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSavePlayer}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    points: state.points
  };
};

const mapDispatchToState = {
  gameReset
};

export default connect(mapStateToProps, mapDispatchToState)(Modal);
