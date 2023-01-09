import "../blocks/card.css";
import "../blocks/cards.css";

import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard({ cardData, handleLikeClick, isLoggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = cardData.likes.some((like) => like === currentUser._id);

  const itemLikeButtonClassName = isLoggedIn
    ? `${isLiked ? "card__like-btn_active" : "card__like-btn"}`
    : "card__like_hidden";

  return (
    <div className="card__info">
      <div className="card__name">
        <h3 className="card__title">{cardData.name}</h3>
      </div>
      <button
        className={itemLikeButtonClassName}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleLikeClick(cardData._id, isLiked);
        }}
      />
    </div>
  );
}

export default ItemCard;
