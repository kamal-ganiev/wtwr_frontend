import "../blocks/Header.css";
import logo from "../images/Header/__logo.svg";
import avatar from "../images/Header/__avatar.jpg";
import { Link } from "react-router-dom";

function Header({
  children,
  openLoginModal,
  openRegistrationModal,
  openAddModal,
  currentDate,
  currentLocation,
  isLoggedIn,
}) {
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
          <Link to="/se_project_react/profile" className="header__profile-link">
            <p className="header__user">Kamal Ganiev</p>
            <img className="header__avatar" src={avatar} />
          </Link>
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
