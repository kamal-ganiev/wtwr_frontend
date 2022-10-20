import React from "react";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
  }

  async getCurrentWeather({ latitude, longitude }) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2254318fec9f4fcd995164605222010&q=${latitude},${longitude}&days=1`
    );
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}

export default WeatherApi;
