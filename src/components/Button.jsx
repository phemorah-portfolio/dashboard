import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, icon }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text ? text : icon}
    </button>
  );
};

export default Button;
