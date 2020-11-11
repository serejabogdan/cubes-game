import {START_GAME} from './types';

const initialState = {
  isGameStarted: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      console.log(action.data.isGameStarted);
      return {...state, isGameStarted: action.data.isGameStarted};
    default:
      return state;
  }
};
