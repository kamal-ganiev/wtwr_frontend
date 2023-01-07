import "../blocks/profile.css";
import React, { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { firstLetter } from "../utils/utils";

function SideBar({
  setIsLoggedIn,
  setIsModalOpen,
  setCurrentUser,
  onError,
  setOnError,
}) {
  const user = React.useContext(CurrentUserContext);

  const imagePlaceholderCheck = () => {
    if (onError) {
      return (
        <div className="profile__side-bar-info">
          <div className="profile__avatar-placeholder">
            <p className="profile__avatar-placeholder-text">
              {firstLetter(user.name)}
            </p>
          </div>
          <p className="profile__name">{user.name}</p>
        </div>
      );
    } else {
      return (
        <div className="profile__side-bar-info">
          <img
            className="profile__avatar"
            src={user.avatar}
            onError={() => {
              setOnError(true);
            }}
          />
          <p className="profile__name">{user.name}</p>
        </div>
      );
    }
  };

  return (
    <div className="profile__side-bar">
      {imagePlaceholderCheck()}
      <div className="profile__settings">
        <button
          className="profile__settings-button"
          type="button"
          onClick={setIsModalOpen}
        >
          Change profile data
        </button>
        <button
          className="profile__settings-button"
          type="button"
          onClick={() => {
            localStorage.removeItem("jwt");
            setIsLoggedIn(false);
            setCurrentUser("");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
