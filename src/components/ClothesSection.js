import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ItemCard from "./ItemCard";

function ClothesSection({
  openModal,
  cardList,
  setIsItemModalOpen,
  setData,
  handleLikeClick,
  isLoggedIn,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile__card-section">
      <div className="profile__card-title">
        <p className="profile__card-text">Your items</p>
        <button className="profile__card-button" onClick={openModal}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {cardList.map((card) => {
          if (card.owner === currentUser._id) {
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
                  isLoggedIn={isLoggedIn}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
