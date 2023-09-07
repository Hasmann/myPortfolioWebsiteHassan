import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
// import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();
//add sagaMiddleware to the array
const middlewares = [logger];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
// sagaMiddleware.run();
export const persistor = persistStore(store);
