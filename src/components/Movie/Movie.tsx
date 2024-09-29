import React from "react";

interface MovieProps {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  selectedMovie: (imdbID: string) => void;
}

const Movie = ({ imdbID, Poster, Title, Year, selectedMovie }: MovieProps) => {
  return (
    <li onClick={(): void => selectedMovie(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
