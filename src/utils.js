export const setLocalStorage = (key, player) => {
  localStorage.setItem(key, JSON.stringify(player));
};
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
