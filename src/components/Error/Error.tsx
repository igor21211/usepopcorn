import React from "react";

interface ErrorProps {
  message: string;
}

const Errors = ({ message }: ErrorProps) => {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
};

export default Errors;
