import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middleWare = [];
process.env.NODE_ENV === "development" && middleWare.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middleWare));
export const persistor = persistStore(store);

export default store;
