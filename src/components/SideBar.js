import "../blocks/profile.css";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { firstLetter } from "../utils/utils";

function SideBar() {
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
    </div>
  );
}

export default SideBar;
