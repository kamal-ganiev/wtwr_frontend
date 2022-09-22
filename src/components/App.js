import "../blocks/App.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import ModalWithForm from "./ModalWithForm";
import { handleModalOpen } from "./ModalWithForm";
import Footer from "./Footer";
import { defaultClothingItems } from "../utils/constants";
import weatherApi from "../utils/weatherApi";

function App() {
  document.body.classList.add("body");
  const temp = 87;

  function weather(temperature) {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  }

  // function success(pos) {
  //   const crd = pos.coords;

  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // window.navigator.geolocation.getCurrentPosition(success, error);

  return (
    <div className="App">
      <div className="page">
        <Header openModal={handleModalOpen} modalName="add" />
        <Main temp={temp}>
          <WeatherCard
            id="Weather"
            key="WeatherCard"
            temp={temp}
            weather={weather(temp)}
          />
          <ItemCard
            key="ItemCard"
            cardList={defaultClothingItems}
            currentWeather={weather(temp)}
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
