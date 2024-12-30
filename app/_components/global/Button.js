import Link from "next/link";
import React from "react";

const Button = ({
  children,
  btn = "default",
  link,
  bgColor = "bg-white",
  color = "black",
  disabled = false,
  className,
}) => {
  return (
    <>
      {btn === "default" && (
        <button
          disabled={disabled}
          className={`outline-none ${bgColor} text-${color} px-5 py-3 uppercase ${className}`}
        >
          {children}
        </button>
      )}

      {btn === "link" && link && (
        <Link href={link}>
          <button
            disabled={disabled}
            className={`outline-none ${bgColor} text-${color} px-5 py-3 uppercase ${className}`}
          >
            {children}
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
