import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

// initial state
export const initialState = {
  cart: [],
};

// reducer function
export const productReducer = (state = initialState, action) => {
  const findExistingProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART: {
      // something will happen if the case is add to cart
      if (findExistingProduct) {
        findExistingProduct.quantity = findExistingProduct.quantity + 1;
        const newCartWithOutSelectedProduct = state.cart.filter(
          (product) => product._id !== findExistingProduct._id
        );
        return {
          ...state,
          cart: [...newCartWithOutSelectedProduct, findExistingProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
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
