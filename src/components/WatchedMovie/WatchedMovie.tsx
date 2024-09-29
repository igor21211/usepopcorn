import React from "react";
import { WatchedMovie as WatchedMovieType } from "../../types";

interface WatchedMovieProps {
  movie: WatchedMovieType;
  onDeleteWathed: (imdbID: string) => void;
}

const WatchedMovie = ({ movie, onDeleteWathed }: WatchedMovieProps) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={(): void => onDeleteWathed(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
