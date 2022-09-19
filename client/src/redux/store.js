import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import technologiesReducer from './technologiesRedux';
import initialState from './initialState';
import userReducer from './userRedux';
import informationsReducer from './informationsRedux';

// combine reducers
const subreducers = {
  technologies: technologiesReducer,
  informations: informationsReducer,
  user: userReducer,
};

const reducer = combineReducers(subreducers);

export const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

//export default store;
