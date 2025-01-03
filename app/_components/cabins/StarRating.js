"use client";

import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  onSetRating,
}) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  const handleRating = (rating) => {
    setRating(rating);

    if (onSetRating)
      onSetRating(
        messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""
      );
  };

  return (
    <div className="flex items-center gap-16">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p> */}
    </div>
  );
};

export default StarRating;
