import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import demoMiddleware from 'src/middlewares/demoMiddleware';

// Reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    demoMiddleware,
    // ... autres middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
