// Types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SHELF = 'CHANGE_SHELF';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const CHANGE_IS_ALREADY_FAV = 'CHANGE_IS_ALREADY_FAV';
export const CHANGE_FAVS_VISBILITY = 'CHANGE_FAVS_VISBILITY';
export const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS';

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

export const changeIsAlreadyFav = () => ({
  type: CHANGE_IS_ALREADY_FAV,
});

export const changeFavsVisibility = () => ({
  type: CHANGE_FAVS_VISBILITY,
});

export const removeFromFavs = (id) => ({
  type: REMOVE_FROM_FAVS,
  id,
});
