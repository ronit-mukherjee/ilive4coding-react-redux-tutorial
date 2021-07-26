import { SHOW_CART, ADD_TO_CART } from "./Header.types";

export const showCart = (direction) => ({
  type: SHOW_CART,
  payload: direction,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

//Action Creators
