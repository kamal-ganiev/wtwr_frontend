import React from "react";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
  }

  async getCurrentWeather(parsedLocation) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=12c60bccc89d420c805210636221909&q=${parsedLocation}&days=1`
    );
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}

export default WeatherApi;
