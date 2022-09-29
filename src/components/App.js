import "../blocks/App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import ModalWithForm from "./ModalWithForm";
import AddGarmentForm from "./AddGarmentForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import FormValidator from "../utils/FormValidator";
import {
  defaultClothingItems,
  currentDate,
  validationConfig,
  formValidators,
} from "../utils/constants";
import WeatherApi from "../utils/WeatherApi";
import { weatherTemp } from "../utils/utils";

function App() {
  document.body.classList.add("body");

  // /// Form Validation \\\

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute("name");

      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };

  enableValidation(validationConfig);

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
        setLocation(`${currentWeather.location.name}`);
        setIsDay(currentWeather.current.is_day);
        setTemp(Math.round(currentWeather.current.temp_f));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /// Opening/Closing Modal Fun \\\

  function handleModalClose(evt) {
    evt.target.closest(`.modal`).classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscClose);
  }

  function handleModalOpen(name) {
    document.querySelector(`.modal_type_${name}`).classList.add("modal_opened");
    document.addEventListener("keydown", handleEscClose);
  }

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      document.querySelector(".modal_opened").classList.remove("modal_opened");
      document.removeEventListener("keydown", handleEscClose);
    }
  }

  // function handleOutsideClickClose(Selector) {
  //   const modal = document.querySelector(Selector);
  //   if (modal.target === modal.currentTarget) {
  //     handleModalClose(modal);
  //   }
  // }

  /// Handling ItemModal open \\\

  function handleItemModalOpen(name, data) {
    const itemModal = document.querySelector(`.modal_type_${name}`);
    itemModal.classList.add("modal_opened");
    itemModal.querySelector(
      ".item-modal__image"
    ).style.backgroundImage = `url('${data.image}')`;
    itemModal.querySelector(".item-modal__title").textContent = data.title;
    itemModal.querySelector(
      ".item-modal__description"
    ).textContent = `Weather: ${data.description}`;
    document.addEventListener("keydown", handleEscClose);
  }

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
            openModal={handleItemModalOpen}
          />
        </Main>
        <ModalWithForm
          title="New garment"
          id="AddingGarment"
          buttonText="Add garment"
          name="add"
          onClose={handleModalClose}
        >
          <AddGarmentForm />
        </ModalWithForm>
        <ItemModal name="ItemModal" onClose={handleModalClose} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
