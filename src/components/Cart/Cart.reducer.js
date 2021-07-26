import {
  ADD_TO_CART,
  SHOW_PRODUCTS_IN_CART,
  HIDE_PRODUCTS_IN_CART,
} from "./Cart.types";
import cartInitialState from "./Cart.initialstate";

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload] };
    case SHOW_PRODUCTS_IN_CART:
      return { ...state, show_products: true };
    case HIDE_PRODUCTS_IN_CART:
      return { ...state, show_products: false };
    default:
      return state;
  }
};

export default cartReducer;
