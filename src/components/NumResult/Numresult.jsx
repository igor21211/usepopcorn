import React from "react";

const Numresult = ({ total }) => {
  return (
    <p className="num-results">
      Found <strong>{total}</strong> results
    </p>
  );
};

export default Numresult;
