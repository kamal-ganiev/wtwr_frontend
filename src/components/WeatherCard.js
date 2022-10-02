import "../blocks/WeatherCard.css";

import { night, day, weatherCodes } from "../utils/constants";

function WeatherCard(props) {
  /// Declaring Variables for Background \\\
  let backgroundTime;
  let backgroundCover;

  /// Checking if It's Day or Night \\\
  props.isDay === 1 || true ? (backgroundTime = day) : (backgroundTime = night);

  /// Setting Background Image according to Wearher \\\
  if (weatherCodes.cloudyCodeList.includes(props.weather)) {
    backgroundCover = backgroundTime.cloudy;
  } else if (
    weatherCodes.rainCodeList.includes(props.weather) ||
    weatherCodes.sleetCodeList.includes(props.weather)
  ) {
    backgroundCover = backgroundTime.rain;
  } else if (weatherCodes.snowCodeList.includes(props.weather)) {
    backgroundCover = backgroundTime.snow;
  } else if (weatherCodes.fogCodeList.includes(props.weather)) {
    backgroundCover = backgroundTime.fog;
  } else if (weatherCodes.stormCodeList.includes(props.weather)) {
    backgroundCover = backgroundTime.storm;
  } else {
    backgroundCover = backgroundTime.clear;
  }

  return (
    <section
      className="weather__card"
      style={{
        backgroundImage: `url(${backgroundCover})`,
      }}
    >
      <h2 className="weather__temp">{props.temp} F</h2>
    </section>
  );
}

export default WeatherCard;
