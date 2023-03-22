import React from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <label className="checkboxLabel">
      <input
        className="checkboxDefaultInput"
        type="checkbox"
        checked={props.checked}
      />
      <span className="checkboxCustomInput"></span>
      <span>Full Time Only</span>
    </label>
  );
};

export default CheckBox;
