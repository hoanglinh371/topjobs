import React from "react";
import "../auth/auth.css";

const Input = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
    <div className="inputBox">
      <input
        onChange={onChange}
        value={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
