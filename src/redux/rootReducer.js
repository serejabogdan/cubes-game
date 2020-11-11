import {POINT_INCREASE, START_GAME} from './types';

const initialState = {
  isGameStarted: false,
  points: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {...state, isGameStarted: action.data.isGameStarted};
    case POINT_INCREASE:
      console.log(action.data.points);
      return {...state, points: action.data.points};
    default:
      return state;
  }
};
