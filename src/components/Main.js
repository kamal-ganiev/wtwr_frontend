import React from "react";
import "../blocks/Main.css";
import "../blocks/cards.css";
import WeatherCard from "./WeatherCard";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import ItemCard from "./ItemCard";

function Main({
  weather,
  isDay,
  cardList,
  weatherCondition,
  setIsItemModalOpen,
  setData,
  handleLikeClick,
}) {
  const temp = React.useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <section className="cards">
        <WeatherCard
          id="Weather"
          key="WeatherCard"
          temp={temp.currentTemperatureUnit}
          weather={weather}
          isDay={isDay}
        />
        <h3 className="cards__title">
          Today is {temp.currentTemperatureUnit} / You may want to wear:
        </h3>
        <ul className="cards__list">
          {cardList.map((card) => {
            if (card.weather === weatherCondition) {
              return (
                <li
                  key={card._id}
                  className="card"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  onClick={(e) => {
                    setIsItemModalOpen();
                    setData({
                      id: card._id,
                      card: e.target,
                      link: card.imageUrl,
                      name: card.name,
                      weather: card.weather,
                      owner: card.owner,
                    });
                  }}
                >
                  <ItemCard
                    num={card._id}
                    cardData={card}
                    setIsItemModalOpen={setIsItemModalOpen}
                    setData={setData}
                    handleLikeClick={handleLikeClick}
                  />
                </li>
              );
            }
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
