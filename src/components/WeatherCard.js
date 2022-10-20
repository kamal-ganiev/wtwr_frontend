import { useEffect, useState } from "react";
import "../blocks/WeatherCard.css";

import { night, day } from "../utils/constants";

function WeatherCard(props) {
  /// Declaring Variables for Background \\\
  let backgroundTime;
  let backgroundCover;

  /// Checking if It's Day or Night \\\
  props.isDay === 1 ? (backgroundTime = day) : (backgroundTime = night);

  /// Setting Background \\\

  const [background, setBackground] = useState(NaN);

  useEffect(() => {
    switch (props.weather) {
      case 1030:
      case 1063:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1198:
      case 1201:
      case 1240:
      case 1243:
      case 1246:
      case 1069:
      case 1072:
      case 1204:
      case 1207:
      case 1237:
      case 1249:
      case 1252:
      case 1261:
      case 1264:
        setBackground((backgroundCover = backgroundTime.rain));
        break;
      case 1003:
      case 1006:
      case 1009:
        setBackground((backgroundCover = backgroundTime.cloudy));
        break;
      case 1066:
      case 1114:
      case 1117:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1255:
      case 1258:
        setBackground((backgroundCover = backgroundTime.snow));
        break;
      case 1087:
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        setBackground((backgroundCover = backgroundTime.storm));
        break;
      case 1135:
      case 1147:
        setBackground((backgroundCover = backgroundTime.fog));
        break;
      default:
        setBackground((backgroundCover = backgroundTime.clear));
        break;
    }
  }, [props.weather, props.isDay]);

  return (
    <section
      className="weather__card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2 className="weather__temp">{props.temp}</h2>
    </section>
  );
}

export default WeatherCard;
