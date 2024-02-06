import React, { useState } from "react";
import ListBox from "../ListBox/ListBox";
import WathedBox from "../WathedBox/WathedBox";

const Main = ({ watched, movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WathedBox movies={movies} watched={watched} />
    </main>
  );
};

export default Main;
