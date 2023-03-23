import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Toggle from "./Toggle";
import "./HeaderBG.css";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const changeThemeHandler = () => {
    setTheme((prevActiveTheme) => {
      return prevActiveTheme === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    document.getElementById("root").dataset.theme = theme;
  }, [theme]);

  return (
    <div>
      <div className="backSVGContainer"></div>
      <div className="header">
        <Logo />
        <Toggle activeTheme={theme} onChangeTheme={changeThemeHandler} />
      </div>
    </div>
  );
};

export default Header;
