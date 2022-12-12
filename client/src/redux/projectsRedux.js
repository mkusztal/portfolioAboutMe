import initialState from "./initialState";
import { API_URL } from "../config";

export const getProjects = ({ projects }) => projects;

const createActionName = (actionName) => `app/projects/${actionName}`;
const UPDATE_PROJECT = createActionName("UPDATE_PROJECT");

export const updateProjectById = (payload) => ({
  type: UPDATE_PROJECT,
  payload,
});

export const fetchProjects = () => {
  return (dispatch) => {
    fetch(API_URL + "api/projects")
      .then((res) => res.json())
      .then((projects) => dispatch(updateProjectById(projects)));
  };
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return [...action.payload];
    default:
      return state;
  }
};

export default projectsReducer;
