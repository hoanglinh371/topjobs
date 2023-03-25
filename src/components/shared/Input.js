import React from "react";
import searchIconSrc from "../../assets/desktop/icon-search.svg";
import locationIconSrc from "../../assets/desktop/icon-location.svg";
import "./Input.css";
const Input = (props) => {
  const { placeholder } = props;
  return (
    <label className="inputLabel">
      <img
        src={props.id === "filterByInfos" ? searchIconSrc : locationIconSrc}
        alt={`${props.id} icon`}
      />
      <input placeholder={placeholder}></input>
    </label>
  );
};

export default Input;
