import { useEffect, useState } from "react";
import "../blocks/WeatherCard.css";

import { night, day, weatherCodes } from "../utils/constants";

function WeatherCard(props) {
  /// Declaring Variables for Background \\\
  let backgroundTime;
  let backgroundCover;

  /// Checking if It's Day or Night \\\
  props.isDay === 1 || true ? (backgroundTime = day) : (backgroundTime = night);

  /// Setting Background \\\

  const [background, setBackground] = useState(backgroundTime.clear);

  useEffect(() => {
    if (
      props.weather === 1030 ||
      1063 ||
      1150 ||
      1153 ||
      1168 ||
      1171 ||
      1180 ||
      1183 ||
      1186 ||
      1189 ||
      1192 ||
      1195 ||
      1198 ||
      1201 ||
      1240 ||
      1243 ||
      1246 ||
      1069 ||
      1072 ||
      1204 ||
      1207 ||
      1237 ||
      1249 ||
      1252 ||
      1261 ||
      1264
    ) {
      setBackground((backgroundCover = backgroundTime.rain));
    } else if (props.weather === 1003 || 1006 || 1009) {
      setBackground((backgroundCover = backgroundTime.cloudy));
    } else if (
      props.weather === 1066 ||
      1114 ||
      1117 ||
      1210 ||
      1213 ||
      1216 ||
      1219 ||
      1222 ||
      1225 ||
      1255 ||
      1258
    ) {
      setBackground((backgroundCover = backgroundTime.snow));
    } else if (props.weather === 1087 || 1273 || 1276 || 1279 || 1282) {
      setBackground((backgroundCover = backgroundTime.storm));
    } else if (props.weather === 1135 || 1147) {
      setBackground((backgroundCover = backgroundTime.fog));
    }
  }, []);

  return (
    <section
      className="weather__card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2 className="weather__temp">{props.temp} F</h2>
    </section>
  );
}

export default WeatherCard;
