import allMovies from "../State/allMovies";
import { Action, AllMovies } from "../types";

export default function allMoviesReducer(
  store = allMovies,
  action: Action
): AllMovies {
  let dublicatedStore = store;
  switch (action.value) {
  }
  return dublicatedStore;
}
