import React from "react";
import "../auth/auth.css";

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <div className="inputBox">
      <button onClick={onClick} type="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
