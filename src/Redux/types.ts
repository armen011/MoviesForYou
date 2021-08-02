type Movie = {
  name: string;
};
type AllMovies = {
  movies: Movie[];
};
type Action = {
  type: string;
  value: Movie[];
};
export type { AllMovies, Action, Movie };
