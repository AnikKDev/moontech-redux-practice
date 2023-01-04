import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

// initial state
export const initialState = { a: "hello" };

// reducer function
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // something will happen if the case is add to cart
      return {};
    }
    case REMOVE_FROM_CART: {
      // something will happen if the case is remove from the cart
      return {};
    }
    default:
      return state;
  }
};
