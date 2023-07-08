import { initialState } from "./initialState";
import { API_URL } from "../config";
import { IProjects } from "../interfaces/IProjects";

export const getProjects = ({ projects }: any): IProjects[] => projects;
export const getProjectById = (
  { projects }: any,
  projectId: string
): IProjects => projects.find((project: any) => project._id === projectId);

const createActionName = (actionName: string) => `app/projects/${actionName}`;
const UPDATE_PROJECT = createActionName("UPDATE_PROJECT");

export const updateProjectById = (payload: any) => ({
  type: UPDATE_PROJECT,
  payload,
});

export const fetchProjects = (): any => {
  return (dispatch: any) => {
    fetch(API_URL + "api/projects")
      .then((res) => res.json())
      .then((projects) => dispatch(updateProjectById(projects)));
  };
};

export const projectsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return [...action.payload];
    default:
      return state;
  }
};
