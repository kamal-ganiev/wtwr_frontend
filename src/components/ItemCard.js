import "../blocks/card.css";
import "../blocks/cards.css";

import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard({ addLike, removeLike, ...props }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <ul className="cards__list">
      {props.cardList.map((card) => {
        if (
          (card.weather === props.weatherCondition ||
            props.weatherCondition === undefined) &&
          props.isOwn(card.owner, currentUser._id)
        ) {
          const isLiked = card.likes.some((like) => like === currentUser._id);

          const itemLikeButtonClassName = `${
            isLiked ? "card__like-btn_active" : "card__like-btn"
          }`;

          return (
            <li
              key={card._id ? card._id : Math.random()}
              className="card"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
              onClick={(e) => {
                props.setIsItemModalOpen();
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
                  className={itemLikeButtonClassName}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!card.likes.includes(currentUser._id)) {
                      addLike(card._id).then((res) => {
                        card.likes = res.likes;
                        e.target.className = "card__like-btn_active";
                      });
                    } else {
                      removeLike(card._id).then((res) => {
                        card.likes = res.likes;
                        e.target.className = "card__like-btn";
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

export default ItemCard;
