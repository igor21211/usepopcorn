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
import { WatchedMovie } from "./types";
import { useLocalStorage, useMovies } from "./hooks";
import { useKey } from "./hooks/useKey";
export default function App() {
  const [query, setQuery] = useState<string>("");
  const [selectId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(query, () => {
    setSelectedId(null);
  });
  const [watched, setWatched] = useLocalStorage<WatchedMovie[]>("watched", []);

  useKey("Escape", hadnleCloseMovie);
  const handlesetSelectedID = (id: string) => {
    setSelectedId((selectId) => (id === selectId ? null : id));
  };

  function hadnleCloseMovie() {
    setSelectedId(null);
  }
  const handleDeleteWAtched = (id: string) => {
    setWatched((watched: WatchedMovie[]) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  };

  const handleAddWatched = (movie: WatchedMovie) => {
    setWatched((watched: WatchedMovie[]) => [...watched, movie]);
  };

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
