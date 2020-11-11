import React from 'react';
import {connect} from 'react-redux';
import {gameReset, gamePlayer} from '../redux/actions';
import {getLocalStorage, setLocalStorage} from '../utils';
import './Modal.css';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: ''
    };
  }

  componentDidMount() {
    console.log(this.props.player);
    this.setState({nickname: this.props.player});
  }

  onChangeNickname = (e) => {
    const nickname = e.target.value;
    this.setState((prevState) => ({...prevState, nickname}));
  };

  onSavePlayer = () => {
    this.props.gamePlayer({player: this.state.nickname});
    // TODO: bug fix repetitions
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
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.onModalClose}
              >
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
                    onChange={this.onChangeNickname}
                    value={this.state.nickname}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onModalClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={this.onSavePlayer}>
                Save changes
              </button>
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
