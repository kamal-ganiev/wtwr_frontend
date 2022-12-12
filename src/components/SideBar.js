import "../blocks/profile.css";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { firstLetter } from "../utils/utils";

function SideBar({ setIsLoggedIn }) {
  const user = React.useContext(CurrentUserContext);

  return (
    <div className="profile__side-bar">
      {user.avatar === "" ? (
        <div className="profile__side-bar-info">
          <div className="profile__avatar-placeholder">
            <p className="profile__avatar-placeholder-text">
              {firstLetter(user.name)}
            </p>
          </div>
          <p className="profile__name">{user.name}</p>
        </div>
      ) : (
        <div className="profile__side-bar-info">
          <img className="profile__avatar" src={user.avatar} />
          <p className="profile__name">{user.name}</p>
        </div>
      )}
      <div className="profile__settings">
        <button className="profile__settings-button" type="button">
          Change profile data
        </button>
        <button
          className="profile__settings-button"
          type="button"
          onClick={() => {
            localStorage.removeItem("jwt");
            setIsLoggedIn(false);
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
