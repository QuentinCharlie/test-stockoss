// Action Types
import {
  CHANGE_INPUT_VALUE,
  CHANGE_SHELF,
  ADD_TO_FAVORITES,
} from 'src/actions/map';

// Initial State
const initialState = {
  inputValue: '',
  shelf: {},
  favorites: [],
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

    default:
      return state;
  }
};

export default mapReducer;
