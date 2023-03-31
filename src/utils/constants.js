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

/// Default Cards Array (required in case of server crash!) \\\

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    likes: [],
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    likes: [],
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    likes: [],
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    likes: [],
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    likes: [],
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    likes: [],
  },
];

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

export { night, day, currentDate, coords, defaultClothingItems };
