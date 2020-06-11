// Types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SHELF = 'CHANGE_SHELF';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

// Creators
export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const changeShelf = (shelf) => ({
  type: CHANGE_SHELF,
  shelf,
});

export const addToFavorites = () => ({
  type: ADD_TO_FAVORITES,
});
