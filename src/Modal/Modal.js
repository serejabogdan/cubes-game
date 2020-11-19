import React from 'react';
import {connect} from 'react-redux';
import {gameReset, gamePlayer} from '../redux/actions';
import {getLocalStorage, setLocalStorage} from '../utils';
import './Modal.css';

import Button from '../Header/ControlButtons/Button/Button';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: ''
    };
  }

  componentDidMount() {
    this.setState({nickname: this.props.player});
  }

  onChangeNickname = (e) => {
    const nickname = e.target.value;
    this.setState((prevState) => ({...prevState, nickname}));
  };

  onSavePlayer = () => {
    this.props.gamePlayer({player: this.state.nickname});
    const prevLocalStorage = getLocalStorage('players') || [];
    const player = {nickname: this.state.nickname, points: this.props.points};
    prevLocalStorage.push(player);
    setLocalStorage('players', prevLocalStorage);
    this.onModalClose();
  };

  onModalClose = () => {
    this.props.gameReset({points: 0, isModalOpen: false});
  };
  render() {
    return (
      <div className="modal" id="exampleModalCentered" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenteredLabel">
                You got {this.props.points} points.
              </h5>
              <Button className="close" onClick={() => this.onModalClose()}>
                <span aria-hidden="true">&times;</span>
              </Button>
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
                    onChange={this.onChangeNickname}
                    value={this.state.nickname}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button className="btn btn-secondary" onClick={() => this.onModalClose()}>
                Close
              </Button>
              <Button onClick={() => this.onSavePlayer()}>Save changes</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    points: state.points,
    player: state.player
  };
};

const mapDispatchToState = {
  gameReset,
  gamePlayer
};

export default connect(mapStateToProps, mapDispatchToState)(Modal);
