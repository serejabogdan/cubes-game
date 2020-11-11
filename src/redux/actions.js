import {START_GAME} from './types';

export function startGame(data) {
  return {
    type: START_GAME,
    data
  };
}
