import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

// initial state
export const initialState = {
  cart: [],
};

// reducer function
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // something will happen if the case is add to cart
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      // something will happen if the case is remove from the cart
      return {};
    }
    default:
      return state;
  }
};
