import {
  POINT_INCREASE,
  GAME_STATUS,
  TIME_UPDATE,
  GAME_RESET,
  GAME_PLAYER,
  MODAL_OPEN_STATUS,
  CHANGE_MAIN_CONTENT
} from './types';

const initialState = {
  isGameStarted: false,
  points: 0,
  timeLeft: 60,
  player: '',
  isModalOpen: false,
  mainContent: true
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_UPDATE:
      return {...state, time: action.data.time};
    case POINT_INCREASE:
      return {...state, points: action.data.points};
    case GAME_STATUS:
      return {...state, ...action.data};
    case GAME_RESET:
      return {...state, ...action.data};
    case GAME_PLAYER:
      return {...state, player: action.data.player};
    case MODAL_OPEN_STATUS:
      return {...state, isModalOpen: action.data.isModalOpen};
    case CHANGE_MAIN_CONTENT:
      return {...state, mainContent: action.data.mainContent};
    default:
      return state;
  }
};
