import { SearchResult } from "@/types";
import { useEffect, useState } from "react";

const API_KEY = "808fa1c8";

export function useMovies(query: string, callback: () => void) {
  const [movies, setMovies] = useState<SearchResult>({
    Search: [],
    totalResults: "",
    Response: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data as SearchResult);
        setError(null);
      } catch (err) {
        setMovies({
          Search: [],
          totalResults: "",
          Response: "",
        });
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies({
        Search: [],
        totalResults: "",
        Response: "",
      });
      setError(null);
      return;
    }
    callback();
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}

// useEffect(() => {
//     const controller = new AbortController();
//     async function fetchMovies() {
//       try {
//         setIsLoading(true);
//         setError(null);
//         const res = await fetch(
//           `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
//           { signal: controller.signal }
//         );
//         if (!res.ok) throw new Error("Something went wrong");
//         const data = await res.json();
//         if (data.Response === "False") throw new Error("Movie Not Found");
//         setMovies(data as SearchResult);
//         setError(null);
//       } catch (err) {
//         setMovies({
//           Search: [],
//           totalResults: "",
//           Response: "",
//         });
//         if (err instanceof Error) {
//           setError(err.message);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     if (query.length < 3) {
//       setMovies({
//         Search: [],
//         totalResults: "",
//         Response: "",
//       });
//       setError(null);
//       return;
//     }
//     fetchMovies();
//     return () => {
//       controller.abort();
//     };
//   }, [query]);
