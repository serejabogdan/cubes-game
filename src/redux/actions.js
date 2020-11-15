import {
  GAME_STATUS,
  POINT_INCREASE,
  GAME_RESET,
  TIME_LEFT,
  GAME_PLAYER,
  MODAL_OPEN_STATUS,
  CHANGE_MAIN_CONTENT
} from './types';

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

export function gamePlayer(data) {
  return {
    type: GAME_PLAYER,
    data
  };
}

export function modalOpenStatus(data) {
  return {
    type: MODAL_OPEN_STATUS,
    data
  };
}

export function changeMainContent(data) {
  return {
    type: CHANGE_MAIN_CONTENT,
    data
  };
}