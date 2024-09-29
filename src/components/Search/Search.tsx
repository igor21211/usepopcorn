import { useKey } from "../../hooks";
import React, { useRef } from "react";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const inputElement = useRef<HTMLInputElement>(null);
  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e): void => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default Search;
