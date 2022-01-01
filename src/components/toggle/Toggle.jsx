import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <div className="dark">Dark</div>
      <div className="light">Light</div>
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 40}}></div>
    </div>
  );
};

export default Toggle;
