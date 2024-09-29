import Movie from "../Movie/Movie";
import { Movie as MovieType } from "../../types";
interface MovieListProps {
  movies: MovieType[];
  selectedMovie: (imdbID: string) => void;
}

const MovieList = ({ movies, selectedMovie }: MovieListProps) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie: MovieType) => (
        <Movie selectedMovie={selectedMovie} {...movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
