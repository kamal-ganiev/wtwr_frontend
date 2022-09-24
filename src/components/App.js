import "../blocks/App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import ModalWithForm from "./ModalWithForm";
import { handleModalOpen } from "./ModalWithForm";
import Footer from "./Footer";
import { defaultClothingItems, currentDate } from "../utils/constants";
import WeatherApi from "../utils/WeatherApi";
import { weatherTemp } from "../utils/utils";

function App() {
  document.body.classList.add("body");

  /// Calling Api \\\
  const api = new WeatherApi();

  /// useState Hook Calls \\\
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState(1000);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(1);

  /// useEfect Hook Calls \\\
  useEffect(() => {
    api
      .getCurrentWeather("39.96118,-82.99879")
      .then((currentWeather) => {
        setWeather(currentWeather.current.condition.code);
        setLocation(
          `${currentWeather.location.name}, ${currentWeather.location.region}`
        );
        setIsDay(currentWeather.current.is_day);
        setTemp(Math.round(currentWeather.current.temp_f));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Header
          openModal={handleModalOpen}
          modalName="add"
          currentDate={currentDate}
          currentLocation={location}
        />
        <Main temp={temp}>
          <WeatherCard
            id="Weather"
            key="WeatherCard"
            temp={temp}
            weather={weather}
            isDay={isDay}
          />
          <ItemCard
            key="ItemCard"
            cardList={defaultClothingItems}
            weatherCondition={weatherTemp(temp)}
          />
        </Main>
        <ModalWithForm
          title="New garment"
          id="AddingGarment"
          buttonText="Add garment"
          name="add"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
