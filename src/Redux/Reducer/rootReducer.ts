import { combineReducers } from "redux";
import allMoviesReducer from "./allMoviesReducer";
export default function rootReducer() {
  return combineReducers({
    allMovies: allMoviesReducer,
  });
}
