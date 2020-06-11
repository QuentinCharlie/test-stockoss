import { combineReducers } from 'redux';

import mapReducer from './map';

const rootReducer = combineReducers({
  map: mapReducer,
  // ... autres reducers
});

export default rootReducer;
