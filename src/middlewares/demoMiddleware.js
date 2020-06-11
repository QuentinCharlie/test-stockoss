/* eslint-disable no-unused-vars, no-console */
const demoMiddleware = (store) => (next) => (action) => {
  // console.log('demoMiddleware laisse passer : ', action);

  // On passe au suivant
  next(action);
};

export default demoMiddleware;
