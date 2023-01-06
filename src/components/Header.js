import React from "react";
import "../blocks/Header.css";
import logo from "../images/Header/__logo.svg";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { firstLetter } from "../utils/utils";

function Header({
  children,
  openLoginModal,
  openRegistrationModal,
  openAddModal,
  currentDate,
  currentLocation,
  isLoggedIn,
  onError,
  setOnError,
}) {
  const user = React.useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__left-side">
        <Link to="/se_project_react" className="header__info-link">
          <img
            className="header__logo"
            src={logo}
            alt="Vector logo WTWR"
            id="HeaderLogo"
          />
        </Link>
        <p className="header__info">
          {currentDate}, {currentLocation}
        </p>
      </div>
      {isLoggedIn && (
        <div className="header__right-side">
          {children}
          <button className="header__button" onClick={openAddModal}>
            + Add clothes
          </button>
          {onError || user.avatar === "" ? (
            <Link
              to="/se_project_react/profile"
              className="header__profile-link"
            >
              <p className="header__user">{user.name}</p>
              <div className="header__image-placeholder">
                <p className="header__image-placeholder-text">
                  {firstLetter(user.name)}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              to="/se_project_react/profile"
              className="header__profile-link"
            >
              <p className="header__user">{user.name}</p>
              <img
                className="header__avatar"
                src={user.avatar}
                onError={() => {
                  setOnError(true);
                }}
              />
            </Link>
          )}
        </div>
      )}
      {!isLoggedIn && (
        <div className="header__right-side">
          {children}
          <button className="header__button" onClick={openRegistrationModal}>
            Sign Up
          </button>
          <button className="header__button" onClick={openLoginModal}>
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
