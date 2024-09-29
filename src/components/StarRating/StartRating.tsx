import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const startContainerStyle = {
  display: "flex",
};

interface StartRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  defaultRating?: number;
  messages?: string[];
  onSetRating: (rating: number) => void;
}

const StartRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  defaultRating = 0,
  messages = [],
  onSetRating,
}: StartRatingProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, settempRating] = useState(0);

  const handlerRating = (num: number) => {
    setRating(num);
    onSetRating(num);
  };

  const textStyle = {
    lineHeight: "1",
    matgin: 0,
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => handlerRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => settempRating(i + 1)}
            onHoverOut={() => settempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StartRating;
