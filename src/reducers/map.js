// Action Types
import { CHANGE_INPUT_VALUE, CHANGE_SHELF } from 'src/actions/map';

// Initial State
const initialState = {
  inputValue: '',
  shelf: {},
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

    default:
      return state;
  }
};

export default mapReducer;
