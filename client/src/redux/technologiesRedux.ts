import { initialState } from "./initialState";
import { API_URL } from "../config";
import { ITechnologies } from "../interfaces/ITechnologies";

export const getTechnologies = ({ technologies }: any): ITechnologies[] =>
  technologies;

const createActionName = (actionName: string) =>
  `app/technologies/${actionName}`;
const UPDATE_TECHNOLOGY = createActionName("UPDATE_TECHNOLOGY");
const SEARCH_TECHNOLOGY = createActionName("SEARCH_TECHNOLOGY");

export const updateTechnologyById = (payload: any) => ({
  type: UPDATE_TECHNOLOGY,
  payload,
});
export const getTechnologyBySearch = (payload: any) => ({
  type: SEARCH_TECHNOLOGY,
  payload,
});

export const fetchTechnologies = (): any => {
  return (dispatch: any) => {
    fetch(API_URL + "api/technologies")
      .then((res) => res.json())
      .then((technologies) => dispatch(updateTechnologyById(technologies)));
  };
};

export const technologiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TECHNOLOGY:
      return [...action.payload];
    case SEARCH_TECHNOLOGY: // no need create functionality in component
      return state.filter(
        (technology: any) => technology.title === action.payload
      );
    default:
      return state;
  }
};
