/// Importing Daytime Backgrounds \\\

import clearDay from "../images/WeatherCard/Daytime/clear.jpg";
import cloudyDay from "../images/WeatherCard/Daytime/cloudy.jpg";
import rainDay from "../images/WeatherCard/Daytime/rain.jpg";
import snowDay from "../images/WeatherCard/Daytime/snow.jpg";
import stormDay from "../images/WeatherCard/Daytime/storm.jpg";
import fogDay from "../images/WeatherCard/Daytime/fog.jpg";

/// Importing Nighttime Backgrounds \\\

import clearNight from "../images/WeatherCard/Nighttime/clear.jpg";
import cloudyNight from "../images/WeatherCard/Nighttime/cloudy.jpg";
import rainNight from "../images/WeatherCard/Nighttime/rain.jpg";
import snowNight from "../images/WeatherCard/Nighttime/snow.jpg";
import stormNight from "../images/WeatherCard/Nighttime/storm.jpg";
import fogNight from "../images/WeatherCard/Nighttime/fog.jpg";

/// Night Time Background Object \\\

const night = {
  clear: clearNight,
  cloudy: cloudyNight,
  rain: rainNight,
  snow: snowNight,
  storm: stormNight,
  fog: fogNight,
};

/// Day Time Background Object \\\

const day = {
  clear: clearDay,
  cloudy: cloudyDay,
  rain: rainDay,
  snow: snowDay,
  storm: stormDay,
  fog: fogDay,
};

/// Current Date \\\

const currentDate = new Date().toLocaleString("en-EN", {
  month: "long",
  day: "numeric",
});

/// Default Coords \\\

const coords = {
  latitude: "40.730610",
  longitude: "-73.935242",
};

export { night, day, currentDate, coords };
