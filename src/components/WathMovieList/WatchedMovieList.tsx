import React from "react";
import WatchedMovie from "../WatchedMovie/WatchedMovie";
import { WatchedMovie as WatchedMovieType } from "../../types";

interface WatchedMovieListProps {
  watched: WatchedMovieType[];
  onDeleteWathed: (imdbID: string) => void;
}

const WatchedMovieList = ({
  watched,
  onDeleteWathed,
}: WatchedMovieListProps) => {
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
