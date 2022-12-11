import initialState from "./initialState";
import { API_URL } from "../config";

export const getTechnologies = ({ technologies }) => technologies;

const createActionName = (actionName) => `app/technologies/${actionName}`;
const UPDATE_TECHNOLOGY = createActionName("UPDATE_TECHNOLOGY");
const SEARCH_TECHNOLOGY = createActionName("SEARCH_TECHNOLOGY");

export const updateTechnologyById = (payload) => ({
  type: UPDATE_TECHNOLOGY,
  payload,
});
export const getTechnologyBySearch = (payload) => ({
  type: SEARCH_TECHNOLOGY,
  payload,
});

export const fetchTechnologies = () => {
  return (dispatch) => {
    fetch(API_URL + "api/technologies")
      .then((res) => res.json())
      .then((technologies) => dispatch(updateTechnologyById(technologies)));
  };
};

const technologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TECHNOLOGY:
      return [...action.payload];
    case SEARCH_TECHNOLOGY:
      return state.filter((technology) => technology.title === action.payload);
    default:
      return state;
  }
};

export default technologiesReducer;
