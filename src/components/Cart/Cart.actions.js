import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./Cart.types";
import { SHOW_PRODUCTS_IN_CART, HIDE_PRODUCTS_IN_CART } from "./Cart.types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const showCartProducts = () => ({
  type: SHOW_PRODUCTS_IN_CART,
});

export const hideCartProducts = () => ({
  type: HIDE_PRODUCTS_IN_CART,
});

export const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});
