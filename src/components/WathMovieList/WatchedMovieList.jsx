import React from "react";
import WatchedMovie from "../WatchedMovie/WatchedMovie";

const WatchedMovieList = ({ watched, onDeleteWathed }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWathed={onDeleteWathed}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
