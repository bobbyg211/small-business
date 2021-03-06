import { combineReducers } from "redux";

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "DELETE_LISTING":
      const listings = [...state];
      listings.splice(action.value, 1);
      return listings;
    default:
      return state;
  }
};

export default combineReducers({ listings });
