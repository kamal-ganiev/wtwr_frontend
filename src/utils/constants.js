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

/// Default Clothing Array \\\

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/cap.jpg?etag=cf33d6ac81f0613c13a5c403fc7c62da",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/hoodie.jpg?etag=1f3d3c1a154f7a9e07bd78a8f6952d9e",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/jacket.jpg?etag=e2e17fc1352115d2e59511b380fccae9",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/sneakers.jpg?etag=56322fb0e0f745439c1d344c253c6855",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/t-shirt.jpg?etag=0f94f1c569bd19d95860902fcc5c70b3",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/winter-coat.jpg?etag=2a959245bf5291c50cdbd4fcefb25a21",
  },
  {
    _id: 6,
    name: "Winter coat",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1519944159858-806d435dc86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },
];

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

/// Lists of Weather Code \\\

const weatherCodes = {
  rainCodeList: [
    1030, 1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
    1198, 1201, 1240, 1243, 1246,
  ],
  sleetCodeList: [1069, 1072, 1204, 1207, 1237, 1249, 1252, 1261, 1264],
  cloudyCodeList: [1003, 1006, 1009],
  snowCodeList: [
    1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258,
  ],
  stormCodeList: [1087, 1273, 1276, 1279, 1282],
  fogCodeList: [1135, 1147],
};

/// Current Date \\\

const currentDate = new Date().toLocaleString("en-EN", {
  month: "long",
  day: "numeric",
});

////////// Validation config //////////

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__error-message_active",
};

const formValidators = {};

export {
  night,
  day,
  weatherCodes,
  currentDate,
  defaultClothingItems,
  validationConfig,
  formValidators,
};
