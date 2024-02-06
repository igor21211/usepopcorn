import React, { useState } from "react";
import WathedSummery from "../WathedSummary/WathedSummery";
import WatchedMovieList from "../WathMovieList/WatchedMovieList";

const WathedBox = ({ movies, watched }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WathedSummery watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WathedBox;
