import React from "react";

interface NumResultProps {
  total: string;
}

const Numresult = ({ total }: NumResultProps) => {
  return (
    <p className="num-results">
      Found <strong>{total}</strong> results
    </p>
  );
};

export default Numresult;