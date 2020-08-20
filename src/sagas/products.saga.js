import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../types/products.types";
import productsService from "../services/products.service";
import { setProducts } from "../actions/products.actions";

function* fetchProducts() {
  try {
    const products = yield call(productsService.getAllProducts);

    yield put(setProducts(products));
  } catch (e) {}
}

export function* waitForFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
