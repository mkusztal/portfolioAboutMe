import initialState from './initialState';
import { API_URL } from '../config';

export const getInformations = ({ technologies }) => technologies;

const createActionName = (actionName) => `app/technologies/${actionName}`;
const UPDATE_INFORMATION = createActionName('UPDATE_INFORMATION');

export const updateInformationById = (payload) => ({
  type: UPDATE_INFORMATION,
  payload,
});

export const fetchInformations = () => {
  return (dispatch) => {
    fetch(API_URL + 'api/informations')
      .then((res) => res.json())
      .then((informations) => dispatch(updateInformationById(informations)));
  };
};

const informationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INFORMATION:
      return [...action.payload];

    default:
      return state;
  }
};

export default informationsReducer;
