import { createStore } from "redux";
import { mainReducer } from "./Reducer/Reducers";

export const store = createStore(mainReducer)