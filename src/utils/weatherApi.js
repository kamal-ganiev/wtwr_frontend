import React from "react";

class WeatherApi extends React.Component {
  async getCurrentWeather({ latitude, longitude }) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=375246fd4f6e4620bbd235454220410&q=${latitude},${longitude}&days=1`
    );
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}

export default WeatherApi;
