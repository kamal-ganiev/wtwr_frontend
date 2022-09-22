class weatherApi {
  getCurrentWeather(parsedLocation) {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=12c60bccc89d420c805210636221909&q=${parsedLocation}&days=1`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  }
}

export default weatherApi;
