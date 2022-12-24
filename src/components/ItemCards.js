import "../blocks/card.css";
import "../blocks/cards.css";

import React, { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import likeActiveSvg from "../images/Card/__button_active.svg";
import likeInactiveSvg from "../images/Card/__button_inactive.svg";

function ItemCards(props) {
  const user = React.useContext(CurrentUserContext);

  const [likeActive, setLikeActive] = useState(false);

  let like = likeInactiveSvg;

  return (
    <ul className="cards__list">
      {props.cardList.map((card) => {
        if (
          (card.weather === props.weatherCondition ||
            props.weatherCondition === undefined) &&
          props.isOwn(card.owner, user._id)
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
                  owner: card.owner,
                });
              }}
            >
              <div className="card__info">
                <div className="card__name">
                  <h3 className="card__title">{card.name}</h3>
                </div>
                <button
                  className="card__like-btn"
                  type="button"
                  style={
                    card.likes.includes(user._id)
                      ? { backgroundImage: `url(${likeActiveSvg})` }
                      : { backgroundImage: `url(${likeInactiveSvg})` }
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    if (likeActive) {
                      props
                        .removeLike(card._id)
                        .then((res) => {
                          console.log(res);
                          e.target.style.backgroundImage = `url(${likeInactiveSvg})`;
                          setLikeActive(false);
                        })
                        .catch((err) => {
                          console.log(err.message);
                        });
                    } else {
                      props
                        .addLike(card._id)
                        .then(() => {
                          e.target.style.backgroundImage = `url(${likeActiveSvg})`;
                          setLikeActive(true);
                        })
                        .catch((err) => {
                          console.log(err.message);
                        });
                    }
                  }}
                />
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
