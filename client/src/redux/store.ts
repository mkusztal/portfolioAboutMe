import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { technologiesReducer } from "./technologiesRedux";
import { initialState } from "./initialState";
import { userReducer } from "./userRedux";
import { projectsReducer } from "./projectsRedux";
import { composeWithDevTools } from "redux-devtools-extension";

// combine reducers
const subreducers = {
  technologies: technologiesReducer,
  projects: projectsReducer,
  user: userReducer,
};

const reducer = combineReducers(subreducers);

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    //   : (f: any) => f
  )
);
