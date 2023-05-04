import React from "react";
import "../blocks/toggle-switch.css";

function ToggleSwitch({
  switchFun,
  sliderPos,
  handleSlide,
  leftColor,
  rightColor,
  leftImageClass,
  rightImageClass,
  left,
  right,
}) {
  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="emperature-switch">
        <p className={leftImageClass} style={{ color: leftColor }}>
          {left}
        </p>
        <p className={rightImageClass} style={{ color: rightColor }}>
          {right}
        </p>
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="temperature-switch"
          onClick={handleSlide}
          onChange={switchFun}
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
