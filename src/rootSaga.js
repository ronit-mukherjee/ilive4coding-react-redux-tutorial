import { all } from "redux-saga/effects";
import { waitForFetchProducts } from "./sagas/products.saga";

export default function* rootSaga() {
  yield all([waitForFetchProducts()]);
}
