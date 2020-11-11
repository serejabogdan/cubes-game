import {START_GAME} from './types';
import {POINT_INCREASE} from './types';

export function startGame(data) {
  return {
    type: START_GAME,
    data
  };
}

export function pointIncrease(data) {
  console.log('Action', data);
  return {
    type: POINT_INCREASE,
    data
  };
}
