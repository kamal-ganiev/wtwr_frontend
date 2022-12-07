import "../blocks/card.css";
import "../blocks/cards.css";

import React from "react";

function ItemCards(props) {
  return (
    <ul className="cards__list">
      {props.cardList.map((card) => {
        if (
          card.weather === props.weatherCondition ||
          props.weatherCondition === undefined
        ) {
          return (
            <li
              key={card._id}
              className="card"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
              onClick={(e) => {
                props.setIsItemModalOpen(true);
                props.setData({
                  id: card._id,
                  card: e.target,
                  link: card.imageUrl,
                  name: card.name,
                  weather: card.weather,
                });
              }}
            >
              <div className="card__name">
                <h3 className="card__title">{card.name}</h3>
              </div>
            </li>
          );
        }
        return;
      })}
    </ul>
  );
}

export default ItemCards;
