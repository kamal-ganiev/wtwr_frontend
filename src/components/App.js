import "../index.css";
import "../blocks/page.css";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import AddGarmentForm from "./AddGarmentForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { currentDate, coords } from "../utils/constants";
import defaultClothingItems from "../utils/defaultClothings.json";
import WeatherApi from "../utils/weatherApi";
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
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { auth } from "../utils/auth";
import UpdateUserModal from "./UpdateUserModal";

function App() {
  /// Calling Api \\\

  const weatherApi = new WeatherApi();

  /// Loading handle:

  const [isLoading, setIsLoading] = useState(false);

  /// States for User:

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [onError, setOnError] = useState(false);

  /// States for Modals:
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemModalData, setItemModalData] = useState({});
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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

  const checkToken = () => {
    auth
      .checkToken()
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  /// Sign in/up Function \\\

  const loginHandler = (email, password) => {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsOpen(false);
        setIsLogModalOpen(false);
      })
      .then(() => {
        checkToken();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const registerHandler = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    auth
      .register({ name, avatar, email, password })
      .then(() => {
        loginHandler(email, password);
        setIsRegModalOpen(false);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

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
      .getItemCards()
      .then((cardsList) => {
        setItemList(cardsList);
      })
      .catch((err) => {
        console.log(err);
        setItemList(defaultClothingItems);
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
    const newArray = itemList.filter((card) => card._id !== id);

    setItemList(newArray);
  }

  /// Adding Card To Array \\\

  function addNewCard(item) {
    setIsLoading(true);
    api
      .addItemCard(item)
      .then((res) => {
        item._id = res._id;
        setItemList([...itemList, item]);
      })
      .then(() => {
        setIsOpen(false);
        setIsAddModalOpen(false);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  /// Deleting Card \\\

  function handleCardDelete(id) {
    api
      .removeItemCard(id)
      .then(() => {
        removeCard(id);
      })
      .then(() => {
        setIsOpen(false);
        setIsConfirmationModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /// Update User Data \\\

  function updateUser(name, avatar) {
    setIsLoading(true);
    auth
      .updateUserData(name, avatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        setIsOpen(false);
        setIsUpdateModalOpen(false);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  /// Add/remove likes functions \\\

  const handleLikeClick = (cardId, isLiked) => {
    isLiked
      ? api
          .removeLike(cardId)
          .then((updatedCard) => {
            setItemList((cards) => {
              const newList = cards.map((card) =>
                card._id === cardId ? updatedCard : card
              );
              return newList;
            });
          })
          .catch((err) => console.log(err))
      : api
          .addLike(cardId)
          .then((updatedCard) => {
            setItemList((cards) => {
              const newList = cards.map((card) =>
                card._id === cardId ? updatedCard : card
              );
              return newList;
            });
          })
          .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            openLoginModal={() => {
              setIsOpen(true);
              setIsLogModalOpen(true);
            }}
            openRegistrationModal={() => {
              setIsOpen(true);
              setIsRegModalOpen(true);
            }}
            openAddModal={() => {
              setIsOpen(true);
              setIsAddModalOpen(true);
            }}
            currentDate={currentDate}
            currentLocation={location}
            isLoggedIn={isLoggedIn}
            onError={onError}
            setOnError={setOnError}
          >
            <ToggleSwitch
              sliderPos={sliderPos}
              fahrenheitColor={fahrenheitColor}
              celsiusColor={celsiusColor}
              handleSlide={handleSlide}
            />
          </Header>
          <Route exact path="/wtwr_frontend">
            <Main
              weather={weather}
              isDay={isDay}
              cardList={itemList}
              weatherCondition={weatherTemp(temp)}
              setIsItemModalOpen={() => {
                setIsOpen(true);
                setIsItemModalOpen(true);
              }}
              setData={setItemModalData}
              handleLikeClick={handleLikeClick}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile
              setIsLoggedIn={setIsLoggedIn}
              setIsModalOpen={() => {
                setIsOpen(true);
                setIsUpdateModalOpen(true);
              }}
              setCurrentUser={setCurrentUser}
              onError={onError}
              setOnError={setOnError}
            >
              <ClothesSection
                openModal={() => {
                  setIsOpen(true);
                  setIsAddModalOpen(true);
                }}
                cardList={itemList}
                setIsItemModalOpen={() => {
                  setIsOpen(true);
                  setIsItemModalOpen(true);
                }}
                setData={setItemModalData}
                handleLikeClick={handleLikeClick}
                isLoggedIn={isLoggedIn}
              />
            </Profile>
          </ProtectedRoute>
          <RegisterModal
            isOpen={isOpen && isRegModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsRegModalOpen(false);
            }}
            redirectToLogModal={() => {
              setIsRegModalOpen(false);
              setIsLogModalOpen(true);
            }}
            registerHandler={registerHandler}
            isLoading={isLoading}
          />
          <LoginModal
            isOpen={isOpen && isLogModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsLogModalOpen(false);
            }}
            redirectToRegModal={() => {
              setIsLogModalOpen(false);
              setIsRegModalOpen(true);
            }}
            loginHandler={loginHandler}
            isLoading={isLoading}
          />
          <AddGarmentForm
            isOpen={isOpen && isAddModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsAddModalOpen(false);
            }}
            addNewCard={addNewCard}
            isLoading={isLoading}
          />
          <UpdateUserModal
            isOpen={isOpen && isUpdateModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsUpdateModalOpen(false);
            }}
            updateUser={updateUser}
            setOnError={setOnError}
            isLoading={isLoading}
          />
          <ItemModal
            name="ItemModal"
            isOpen={isOpen && isItemModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsItemModalOpen(false);
            }}
            onRemove={() => {
              setIsItemModalOpen(false);
            }}
            data={itemModalData}
            handleRemove={() => {
              setIsOpen(true);
              setIsConfirmationModalOpen(true);
            }}
            setRemovingCard={setRemovingCard}
          />
          <ConfirmationModal
            name="confirmation"
            isOpen={isOpen && isConfirmationModalOpen}
            onClose={() => {
              setIsOpen(false);
              setIsConfirmationModalOpen(false);
            }}
            card={removingCard}
            handleCardDelete={handleCardDelete}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
