// Types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SHELF = 'CHANGE_SHELF';

// Creators
export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const changeShelf = (shelf) => ({
  type: CHANGE_SHELF,
  shelf,
});
