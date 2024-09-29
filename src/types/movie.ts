export interface SearchResult {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}

export interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: string | undefined;
  userRating: number;
  countRatingDecisions: number;
}
