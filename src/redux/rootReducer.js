import {POINT_INCREASE, GAME_STATUS, TIME_LEFT, GAME_RESET, GAME_PLAYER, MODAL_OPEN_STATUS} from './types';

const initialState = {
  isGameStarted: false,
  points: 0,
  time: 5,
  player: '',
  isModalOpen: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_LEFT:
      return {...state, time: action.data.time};
    case POINT_INCREASE:
      return {...state, points: action.data.points};
    case GAME_STATUS:
      return {...state, isGameStarted: action.data.isGameStarted};
    case GAME_RESET:
      return {...state, ...action.data};
    case GAME_PLAYER:
      return {...state, player: action.data.player};
    case MODAL_OPEN_STATUS:
      return {...state, isModalOpen: action.data.isModalOpen};
    default:
      return state;
  }
};
