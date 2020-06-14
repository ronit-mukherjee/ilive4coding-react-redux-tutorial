import { combineReducers } from "redux";
import productsReducer from "./Pages/Home/products.reducer";
import cartReducer from "./Pages/Home/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
