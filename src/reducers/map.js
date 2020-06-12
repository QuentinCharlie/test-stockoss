// Action Types
import {
  CHANGE_INPUT_VALUE,
  CHANGE_SHELF,
  ADD_TO_FAVORITES,
  CHANGE_IS_ALREADY_FAV,
} from 'src/actions/map';

// Initial State
const initialState = {
  inputValue: '',
  shelf: {},
  favorites: [],
  isAlreadyFav: false,
  isFavsVisible: false,
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

    default:
      return state;
  }
};

export default mapReducer;
