import "../index.css";
import "../blocks/page.css";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import ItemCards from "./ItemCards";
import AddGarmentForm from "./AddGarmentForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { currentDate, coords } from "../utils/constants";
import WeatherApi from "../utils/WeatherApi";
import { weatherTemp } from "../utils/utils";
import ToggleSwitch from "./ToggleSwitch";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import ClothesSection from "./ClothesSection";
import api from "../utils/api";
import ConfirmationModal from "./ConfirmationModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function App() {
  /// Calling Api \\\

  const weatherApi = new WeatherApi();

  /// useState Hook Calls \\\

  const [itemList, setItemList] = useState([]);
  const [fahrenheit, setFahrenheit] = useState(75);
  const [celsius, setCelsius] = useState(20);
  const [temp, setTemp] = useState(75);
  const [weather, setWeather] = useState(1000);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemModalData, setItemModalData] = useState({});
  const [sliderPos, setSliderPos] = useState(0);
  const [fahrenheitColor, setFahrenheitColor] = useState("");
  const [celsiusColor, setCelsiusColor] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("");
  const [removingCard, setRemovingCard] = useState(0);

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
    api.getItemCards().then((cardsList) => {
      setItemList(cardsList);
    });
  }, []);

  useEffect(() => {
    weatherApi
      .getCurrentWeather(coords)
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
    if (isModalOpen || isItemModalOpen || isConfirmationModalOpen) {
      document.addEventListener("keydown", handleEscClose);
    }
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isModalOpen, isItemModalOpen, isConfirmationModalOpen]);

  /// Closing Modal Fun \\\

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      setIsModalOpen(false);
      setIsItemModalOpen(false);
      setIsConfirmationModalOpen(false);
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

  /// Removing Card Function \\\

  function removeCard(id) {
    const newArray = itemList.filter((card) => card.id !== id);

    setItemList(newArray);
  }

  /// Adding Card To Array \\\

  function addNewCard(item) {
    item.id = itemList.length + 2;
    api
      .addItemCard(item)
      .then(() => {
        setItemList([item, ...itemList]);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <ItemCards
              key="ItemCards"
              cardList={itemList}
              weatherCondition={weatherTemp(temp)}
              isItemModalOpen={isItemModalOpen}
              setIsItemModalOpen={setIsItemModalOpen}
              setData={setItemModalData}
            />
          </Main>
        </Route>
        <Route path="/se_project_react/profile">
          <Profile>
            <ClothesSection
              openModal={() => {
                setIsModalOpen(true);
              }}
            >
              <ItemCards
                key="ItemCards"
                cardList={itemList}
                isItemModalOpen={isItemModalOpen}
                setIsItemModalOpen={setIsItemModalOpen}
                setData={setItemModalData}
              />
            </ClothesSection>
          </Profile>
        </Route>
        <RegisterModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleEscClose={handleEscClose}
          addNewCard={addNewCard}
        />
        <ItemModal
          name="ItemModal"
          isOpen={isItemModalOpen}
          onClose={() => {
            setIsItemModalOpen(false);
          }}
          handleEscClose={handleEscClose}
          data={itemModalData}
          handleRemove={setIsConfirmationModalOpen}
          setRemovingCard={setRemovingCard}
        />
        <ConfirmationModal
          name="ConfirmationModal"
          isOpen={isConfirmationModalOpen}
          onClose={() => {
            setIsConfirmationModalOpen(false);
          }}
          card={removingCard}
          handleEscClose={handleEscClose}
          handleCardDelete={(id) => {
            api
              .removeItemCard(id)
              .then(() => {
                removeCard(id);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
