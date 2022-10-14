import React from "react";
import "../blocks/Main.css";
import "../blocks/cards.css";
import WeatherCard from "./WeatherCard";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main(props) {
  const temp = React.useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <section className="cards">
        <WeatherCard
          id="Weather"
          key="WeatherCard"
          temp={temp.currentTemperatureUnit}
          weather={props.weather}
          isDay={props.isDay}
        />
        <h3 className="cards__title">
          Today is {temp.currentTemperatureUnit} / You may want to wear:
        </h3>
        {props.children}
      </section>
    </main>
  );
}

export default Main;
