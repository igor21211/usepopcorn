import React, { useState } from "react";

interface ListBoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Box;
