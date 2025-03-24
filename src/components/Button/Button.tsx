import React from "react";

type ButtonProps = {
    label: string;
    color: "red" | "blue" | "green"; 
    size?: "sm" | "md" | "lg"; 
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ label, color, size = "md", onClick, type = "button" }) => {
    const baseStyles = "rounded-lg font-semibold transition-all duration-200";
    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };
    const colorStyles = {
      red: "bg-red-600 hover:bg-red-700 text-white",
      blue: "bg-blue-600 hover:bg-blue-700 text-white",
      green: "bg-green-600 hover:bg-green-700 text-white",
    };

    return (
        <button
          type={type} className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]}`}
          onClick={onClick}
        >
          {label}
        </button>
      );
    };

export default Button;