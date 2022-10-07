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

function App() {
  /// Calling Api \\\

  const api = new WeatherApi();

  /// useState Hook Calls \\\

  const [temp, setTemp] = useState(75);
  const [weather, setWeather] = useState(1000);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [itemModalData, setItemModalData] = useState({});

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
      document.removeEventListener("keydown", handleEscClose);
    }
  }

  return (
    <div className="page">
      <Header
        openModal={() => {
          setIsModalOpen(true);
        }}
        modalName="add"
        currentDate={currentDate}
        currentLocation={location}
      />
      <Main temp={temp} weather={weather} isDay={isDay}>
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
      <Footer />
    </div>
  );
}

export default App;
