import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`shadow-box-1 p-6 rounded-lg ${className}`}>{children}</div>
  );
};

export default Card;
