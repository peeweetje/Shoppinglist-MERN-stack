import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "./Types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItems = id => {
  return {
    type: DELETE_ITEMS,
    payload: id
  };
};

export const addItems = item => {
  return {
    type: ADD_ITEMS,
    payload: item
  };
};
