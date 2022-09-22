import React from "react";
import "../blocks/card.css";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.currentWeather);
  }

  render() {
    return (
      <ul className="cards__list">
        {this.props.cardList.map((card) => {
          if (card.weather === this.props.currentWeather) {
            return (
              <li
                key={card._id}
                className="card"
                style={{ backgroundImage: `url(${card.link})` }}
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
