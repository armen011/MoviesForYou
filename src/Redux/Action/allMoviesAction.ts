import { Action, Movie } from "../types";

export function addAllMoviesDate(value: Movie[]): Action {
  return {
    type: "ADD-DATA-TO-ALLMOVIES",
    value,
  };
}
