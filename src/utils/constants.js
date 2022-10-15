/// Importing Daytime Backgrounds \\\

import clearDay from "../images/WeatherCard/Daytime/__clear.jpg";
import cloudyDay from "../images/WeatherCard/Daytime/__cloudy.jpg";
import rainDay from "../images/WeatherCard/Daytime/__rain.jpg";
import snowDay from "../images/WeatherCard/Daytime/__snow.jpg";
import stormDay from "../images/WeatherCard/Daytime/__storm.jpg";
import fogDay from "../images/WeatherCard/Daytime/__fog.jpg";

/// Importing Nighttime Backgrounds \\\

import clearNight from "../images/WeatherCard/Nighttime/__clear.jpg";
import cloudyNight from "../images/WeatherCard/Nighttime/__cloudy.jpg";
import rainNight from "../images/WeatherCard/Nighttime/__rain.jpg";
import snowNight from "../images/WeatherCard/Nighttime/__snow.jpg";
import stormNight from "../images/WeatherCard/Nighttime/__storm.jpg";
import fogNight from "../images/WeatherCard/Nighttime/__fog.jpg";

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

export { night, day, currentDate };
