import initialState from './initialState';
import { API_URL } from '../config';
import shortid from 'shortid';

export const getTechnologies = ({ technologies }) => technologies;
export const getTechnologyById = ({ technologies }, technologyId) =>
  technologies.find((technology) => technology._id === technologyId);

const createActionName = (actionName) => `app/technologies/${actionName}`;
const ADD_TECHNOLOGY = createActionName('ADD_TECHNOLOGY');
const EDIT_TECHNOLOGY = createActionName('EDIT_TECHNOLOGY');
const UPDATE_TECHNOLOGY = createActionName('UPDATE_TECHNOLOGY');
const REMOVE_TECHNOLOGY = createActionName('REMOVE_TECHNOLOGY');
const SEARCH_TECHNOLOGY = createActionName('SEARCH_TECHNOLOGY');

export const addTechnology = (payload) => ({ type: ADD_TECHNOLOGY, payload });
export const editTechnology = (payload) => ({ type: EDIT_TECHNOLOGY, payload });
export const updateTechnologyById = (payload) => ({
  type: UPDATE_TECHNOLOGY,
  payload,
});
export const removeTechnologyById = (id) => ({
  type: REMOVE_TECHNOLOGY,
  payload: { id },
});
export const getTechnologyBySearch = (payload) => ({
  type: SEARCH_TECHNOLOGY,
  payload,
});

export const fetchTechnologies = () => {
  return (dispatch) => {
    fetch(API_URL + 'api/technologies')
      .then((res) => res.json())
      .then((technologies) => dispatch(updateTechnologyById(technologies)));
  };
};

const technologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECHNOLOGY:
      return [...state, { ...action.payload, id: shortid() }];
    case EDIT_TECHNOLOGY:
      return state.map((technology) => technology.id !== action.payload);
    case UPDATE_TECHNOLOGY:
      return [...action.payload];
    case REMOVE_TECHNOLOGY:
      return state.filter((technology) => technology.id !== action.payload);
    case SEARCH_TECHNOLOGY:
      return state.filter((technology) => technology.title === action.payload);
    default:
      return state;
  }
};

export default technologiesReducer;
