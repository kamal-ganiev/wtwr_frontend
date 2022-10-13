import { useEffect, useState } from "react";
import "../blocks/toggle-switch.css";

function ToggleSwitch({ sliderPos, test }) {
  const [fahrenheitColor, setFahrenheitColor] = useState("");
  const [celsiusColor, setCelsiusColor] = useState("");

  useEffect(() => {
    if (sliderPos === 0) {
      setFahrenheitColor("white");
    } else {
      setFahrenheitColor("");
    }
  }, [sliderPos]);

  useEffect(() => {
    if (sliderPos === 28) {
      setCelsiusColor("white");
    } else {
      setCelsiusColor("");
    }
  }, [sliderPos]);

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
          onClick={test}
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
