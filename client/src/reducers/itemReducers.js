import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/Types";

const initialState = {
  items: [
    { id: uuid(), name: "Noah" },
    { id: uuid(), name: "Dushi" },
    { id: uuid(), name: "Keepwee" },
    { id: uuid(), name: "Dodger" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
