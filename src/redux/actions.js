import {GAME_STATUS, POINT_INCREASE, GAME_RESET, TIME_LEFT} from './types';

export function gameStatus(data) {
  return {
    type: GAME_STATUS,
    data
  };
}

export function pointIncrease(data) {
  return {
    type: POINT_INCREASE,
    data
  };
}

export function timeLeft(data) {
  return {
    type: TIME_LEFT,
    data
  };
}

export function gameReset(data) {
  return {
    type: GAME_RESET,
    data
  };
}
