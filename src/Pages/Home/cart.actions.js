import { ADD_TO_CART } from "./cart.types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
