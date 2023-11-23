import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import tagsReducer from "./tagsReducer";

const combinedReducers = combineReducers({ notesReducer, tagsReducer });
const rootReducer = combinedReducers;

export default rootReducer;
