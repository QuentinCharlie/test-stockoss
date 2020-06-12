// Action Types
import {
  CHANGE_INPUT_VALUE,
  CHANGE_SHELF,
  ADD_TO_FAVORITES,
  CHANGE_IS_ALREADY_FAV,
  CHANGE_FAVS_VISBILITY,
  REMOVE_FROM_FAVS,
} from 'src/actions/map';

// Initial State
const initialState = {
  inputValue: '',
  shelf: {},
  favorites: [],
  isAlreadyFav: false,
  areFavsVisible: false,
};

// Reducer
const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case CHANGE_SHELF:
      return {
        ...state,
        shelf: action.shelf,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            id: state.inputValue,
            position: state.shelf.position,
          },
        ],
      };

    case CHANGE_IS_ALREADY_FAV:
      return {
        ...state,
        isAlreadyFav: !state.isAlreadyFav,
      };

    case CHANGE_FAVS_VISBILITY:
      return {
        ...state,
        areFavsVisible: !state.areFavsVisible,
      };

    case REMOVE_FROM_FAVS: {
      const remainingFavs = state.favorites.filter((fav) => fav.id !== action.id);
      return {
        ...state,
        favorites: [
          ...remainingFavs,
        ],
      };
    }

    default:
      return state;
  }
};

export default mapReducer;
