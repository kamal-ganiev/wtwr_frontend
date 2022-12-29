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
import { Redirect, Route } from "react-router-dom";
import Profile from "./Profile";
import ClothesSection from "./ClothesSection";
import api from "../utils/api";
import ConfirmationModal from "./ConfirmationModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { auth } from "../utils/auth";
import UpdateUserModal from "./UpdateUserModal";

function App() {
  /// Calling Forms \\\

  const forms = Array.from(document.forms);

  /// Calling Api \\\

  const weatherApi = new WeatherApi();

  /// States for User:

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  /// States for Modals:
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemModalData, setItemModalData] = useState({});
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  /// States for Weather Card:
  const [fahrenheit, setFahrenheit] = useState(75);
  const [celsius, setCelsius] = useState(20);

  /// States for Weather Api:
  const [temp, setTemp] = useState(75);
  const [weather, setWeather] = useState(1000);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(true);

  /// States for Temperature Slider:
  const [sliderPos, setSliderPos] = useState(0);
  const [fahrenheitColor, setFahrenheitColor] = useState("");
  const [celsiusColor, setCelsiusColor] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("");

  /// States for Cards:
  const [itemList, setItemList] = useState([]);
  const [removingCard, setRemovingCard] = useState(0);

  /// Checking Token \\\

  useEffect(() => {
    auth
      .checkToken()
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

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
    if (
      isAddModalOpen ||
      isLogModalOpen ||
      isRegModalOpen ||
      isItemModalOpen ||
      isConfirmationModalOpen ||
      isUpdateModalOpen
    ) {
      document.addEventListener("keydown", handleEscClose);
    }
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      forms.forEach((form) => {
        form.reset();
      });
    };
  }, [
    isAddModalOpen,
    isRegModalOpen,
    isLogModalOpen,
    isItemModalOpen,
    isConfirmationModalOpen,
    isUpdateModalOpen,
  ]);

  /// Closing Modal Fun \\\

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      setIsAddModalOpen(false);
      setIsLogModalOpen(false);
      setIsRegModalOpen(false);
      setIsItemModalOpen(false);
      setIsConfirmationModalOpen(false);
      setIsUpdateModalOpen(false);
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

  /// Update User Data \\\

  function updateUser(name, avatar) {
    auth
      .updateUserData(name, avatar)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            openLoginModal={() => {
              setIsLogModalOpen(true);
            }}
            openRegistrationModal={() => {
              setIsRegModalOpen(true);
            }}
            openAddModal={() => {
              setIsAddModalOpen(true);
            }}
            currentDate={currentDate}
            currentLocation={location}
            isLoggedIn={isLoggedIn}
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
                isOwn={(card, user) => {
                  return true;
                }}
                addLike={api.addLike}
                removeLike={api.removeLike}
              />
            </Main>
          </Route>
          <ProtectedRoute
            path="/se_project_react/profile"
            isLoggedIn={isLoggedIn}
          >
            <Profile
              setIsLoggedIn={setIsLoggedIn}
              setIsModalOpen={setIsUpdateModalOpen}
              setCurrentUser={setCurrentUser}
            >
              <ClothesSection
                openModal={() => {
                  setIsAddModalOpen(true);
                }}
              >
                <ItemCards
                  key="ItemCards"
                  cardList={itemList}
                  isItemModalOpen={isItemModalOpen}
                  setIsItemModalOpen={setIsItemModalOpen}
                  setData={setItemModalData}
                  isOwn={(card, user) => {
                    return card === user;
                  }}
                  addLike={api.addLike}
                  removeLike={api.removeLike}
                />
              </ClothesSection>
            </Profile>
          </ProtectedRoute>
          <RegisterModal
            isModalOpen={isRegModalOpen}
            setIsModalOpen={setIsRegModalOpen}
            redirectToLogModal={setIsLogModalOpen}
            handleEscClose={handleEscClose}
            setIsLoggedIn={setIsLoggedIn}
          />
          <LoginModal
            isModalOpen={isLogModalOpen}
            setIsModalOpen={setIsLogModalOpen}
            redirectToRegModal={setIsRegModalOpen}
            handleEscClose={handleEscClose}
            setIsLoggedIn={setIsLoggedIn}
            setCurrentUser={setCurrentUser}
          />
          <AddGarmentForm
            isModalOpen={isAddModalOpen}
            setIsModalOpen={setIsAddModalOpen}
            handleEscClose={handleEscClose}
            addNewCard={addNewCard}
          />
          <UpdateUserModal
            isModalOpen={isUpdateModalOpen}
            setIsModalOpen={setIsUpdateModalOpen}
            handleEscClose={handleEscClose}
            updateUser={updateUser}
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
          <Route exact path="/">
            <Redirect to="se_project_react" />
          </Route>
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
