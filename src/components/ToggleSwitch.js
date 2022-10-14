import React from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/toggle-switch.css";

function ToggleSwitch({
  sliderPos,
  handleSlide,
  fahrenheitColor,
  celsiusColor,
}) {
  const switchContext = React.useContext(CurrentTemperatureUnitContext);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="emperature-switch">
        <p
          className="toggle-switch__fahrenheit"
          style={{ color: fahrenheitColor }}
        >
          F
        </p>
        <p className="toggle-switch__celsius" style={{ color: celsiusColor }}>
          C
        </p>
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="temperature-switch"
          onClick={handleSlide}
          onChange={switchContext.handleToggleSwitchChange}
        />
      </label>
      <div
        className="toggle-switch__round"
        style={{ left: `${sliderPos}px` }}
      ></div>
    </div>
  );
}

export default ToggleSwitch;
