import React from "react";

const Movie = ({ imdbID, Poster, Title, Year, selectedMovie }) => {
  return (
    <li onClick={() => selectedMovie(imdbID)}>
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
