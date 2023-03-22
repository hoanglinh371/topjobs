import sunIconSrc from "../../assets/desktop/icon-sun.svg";
import moonIconSrc from "../../assets/desktop/icon-moon.svg";

import "./Toggle.css";

const Toggle = (props) => {
  const { activeTheme, onChangeTheme } = props;
  return (
    <div className="toggle">
      <img className="toggleIconLeft" src={sunIconSrc} alt="light mode icon" />
      <button
        className="toggleButton"
        data-active-theme={activeTheme}
        onClick={onChangeTheme}
      ></button>
      <img className="toggleIconRight" src={moonIconSrc} alt="dark mode icon" />
    </div>
  );
};

export default Toggle;
