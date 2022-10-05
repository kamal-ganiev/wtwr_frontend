import React from "react";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
  }

  async getCurrentWeather(parsedLocation) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2c0b7e9969e542f2975235801220410&q=${parsedLocation}&days=1`
    );
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}

export default WeatherApi;
