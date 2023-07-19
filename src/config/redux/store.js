import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
