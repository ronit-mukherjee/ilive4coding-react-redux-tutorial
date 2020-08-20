import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
