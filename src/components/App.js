import "../index.css";
import "../blocks/page.css";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import ItemCard from "./ItemCard";
import ModalWithForm from "./ModalWithForm";
import AddGarmentForm from "./AddGarmentForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { defaultClothingItems, currentDate } from "../utils/constants";
import WeatherApi from "../utils/WeatherApi";
import { weatherTemp } from "../utils/utils";
import ToggleSwitch from "./ToggleSwitch";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route } from "react-router-dom";
import Profile from "./Profile";

function App() {
  /// Calling Api \\\

  const api = new WeatherApi();

  /// useState Hook Calls \\\

  const [fahrenheit, setFahrenheit] = useState(75);
  const [celsius, setCelsius] = useState(20);
  const [temp, setTemp] = useState(75);
  const [weather, setWeather] = useState(1000);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [itemModalData, setItemModalData] = useState({});
  const [sliderPos, setSliderPos] = useState(0);
  const [fahrenheitColor, setFahrenheitColor] = useState("");
  const [celsiusColor, setCelsiusColor] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("");

  /// Handle Slide Effect \\\

  useEffect(() => {
    if (sliderPos === 0) {
      setFahrenheitColor("white");
    } else {
      setFahrenheitColor("");
    }
  }, [sliderPos]);

  useEffect(() => {
    if (sliderPos === 28) {
      setCelsiusColor("white");
    } else {
      setCelsiusColor("");
    }
  }, [sliderPos]);

  function handleSlide() {
    if (sliderPos === 0) {
      setSliderPos(28);
    } else {
      setSliderPos(0);
    }
  }

  /// useEfect Hook Calls \\\

  useEffect(() => {
    api
      .getCurrentWeather("39.96118,-82.99879")
      .then((currentWeather) => {
        setWeather(currentWeather.current.condition.code);
        setLocation(`${currentWeather.location.name}`);
        setIsDay(currentWeather.current.is_day);
        setFahrenheit(`${Math.round(currentWeather.current.temp_f)} °F`);
        setCelsius(`${Math.round(currentWeather.current.temp_c)} °C`);
        setTemp(Math.round(currentWeather.current.temp_f));
        setCurrentTemperatureUnit(
          `${Math.round(currentWeather.current.temp_f)} °F`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isModalOpen || isItemModalOpen) {
      document.addEventListener("keydown", handleEscClose);
    }
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isModalOpen, isItemModalOpen]);

  /// Opening/Closing Modal Fun \\\

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      setIsModalOpen(false);
      setIsItemModalOpen(false);
    }
  }

  /// Handle Toggle Switch Change \\\

  function handleToggleSwitchChange(evt) {
    if (evt.target.checked) {
      setCurrentTemperatureUnit(celsius);
    } else {
      setCurrentTemperatureUnit(fahrenheit);
    }
  }

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          openModal={() => {
            setIsModalOpen(true);
          }}
          modalName="add"
          currentDate={currentDate}
          currentLocation={location}
        >
          <ToggleSwitch
            sliderPos={sliderPos}
            fahrenheitColor={fahrenheitColor}
            celsiusColor={celsiusColor}
            handleSlide={handleSlide}
          />
        </Header>
        <Route exact path="/se_project_react">
          <Main weather={weather} isDay={isDay}>
            <ItemCard
              key="ItemCard"
              cardList={defaultClothingItems}
              weatherCondition={weatherTemp(temp)}
              isItemModalOpen={isItemModalOpen}
              setIsItemModalOpen={setIsItemModalOpen}
              setData={setItemModalData}
            />
          </Main>
          <ModalWithForm
            title="New garment"
            id="AddingGarment"
            buttonText="Add garment"
            name="add"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleEscClose={handleEscClose}
          >
            <AddGarmentForm />
          </ModalWithForm>
          <ItemModal
            name="ItemModal"
            isOpen={isItemModalOpen}
            onClose={() => {
              setIsItemModalOpen(false);
            }}
            handleEscClose={handleEscClose}
            data={itemModalData}
          />
        </Route>
        <Route path="/se_project_react/profile">
          <Profile></Profile>
        </Route>
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
