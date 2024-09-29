import React, { useEffect, useRef, useState } from "react";
import { API_KEY } from "../helper/credentional";
import StartRating from "../StarRating/StartRating";
import Loader from "../Loader/Loader";
import { MovieDetails, WatchedMovie } from "../../types";

interface SelectedMovieProps {
  selectedId: string;
  closeMovie: () => void;
  onAddWatch: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

const SelectedMovie = ({
  selectedId,
  closeMovie,
  onAddWatch,
  watched,
}: SelectedMovieProps) => {
  const [movie, setMovie] = useState<MovieDetails>({
    Title: "",
    Year: "",
    Poster: "",
    Runtime: "",
    imdbRating: "",
    Plot: "",
    Released: "",
    Actors: "",
    Director: "",
    Genre: "",
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(0);
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  const exist = watched
    .map((movie: WatchedMovie) => movie.imdbID)
    .includes(selectedId);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie as MovieDetails;
  const handleAdd = () => {
    const newMovie: WatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime.split(" ").at(0),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatch(newMovie);
    closeMovie();
  };
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
        );
        const data = (await res.json()) as MovieDetails;
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "Popcorn";
    };
  }, [title]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={closeMovie}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {exist ? (
                "You add movie to list"
              ) : (
                <>
                  <StartRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
