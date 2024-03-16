import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Numresult from "./components/NumResult/Numresult";
import MovieList from "./components/MovieList/MovieList";
import WathedSummery from "./components/WathedSummary/WathedSummery";
import WatchedMovieList from "./components/WathMovieList/WatchedMovieList";
import Box from "./components/ListBox/ListBox";
import Loader from "./components/Loader/Loader";
import Errors from "./components/Error/Error";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";
import { API_KEY } from "./components/helper/credentional";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectId, setSelectedId] = useState(null);

  const handlesetSelectedID = (id) => {
    setSelectedId((selectId) => (id === selectId ? null : id));
  };

  const hadnleCloseMovie = () => {
    setSelectedId(null);
  };
  const handleDeleteWAtched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data);
        setError("");
      } catch (err) {
        setMovies([]);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Numresult total={movies.totalResults} />
      </NavBar>

      <Main>
        <Box>
          {error && <Errors message={error} />}
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList
              selectedMovie={handlesetSelectedID}
              movies={movies.Search}
            />
          )}
        </Box>
        <Box>
          {selectId ? (
            <SelectedMovie
              selectedId={selectId}
              closeMovie={hadnleCloseMovie}
              onAddWatch={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WathedSummery watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWathed={handleDeleteWAtched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
