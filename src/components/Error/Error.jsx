import React from "react";

const Errors = ({ message }) => {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
};

export default Errors;
