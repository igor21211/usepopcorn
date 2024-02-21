import Movie from "../Movie/Movie";

const MovieList = ({ movies, selectedMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie selectedMovie={selectedMovie} {...movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
