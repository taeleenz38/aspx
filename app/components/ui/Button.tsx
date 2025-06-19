import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
};

const Button = ({
  text,
  onClick,
  className,
  isActive = false,
}: ButtonProps) => {
  return (
    <button
      className={`font-extralight text-2xl text-right duration-200 hover:font-medium hover:cursor-pointer ${
        isActive ? "font-medium" : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
