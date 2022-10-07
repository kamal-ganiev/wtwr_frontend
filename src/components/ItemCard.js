import "../blocks/card.css";
import "../blocks/cards.css";

import React from "react";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="cards__list">
        {this.props.cardList.map((card) => {
          if (card.weather === this.props.weatherCondition) {
            return (
              <li
                key={card._id}
                className="card"
                style={{ backgroundImage: `url(${card.link})` }}
                onClick={() => {
                  this.props.setIsItemModalOpen(true);
                  this.props.setData({
                    link: card.link,
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
}

export default ItemCard;
