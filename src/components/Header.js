import "../blocks/Header.css";
import logo from "../images/Header/__logo.svg";
import avatar from "../images/Header/__avatar.jpg";
import { Link } from "react-router-dom";

function Header(props) {
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
          {props.currentDate}, {props.currentLocation}
        </p>
      </div>
      <div className="header__right-side">
        {props.children}
        <button className="header__button" onClick={props.openModal}>
          Sign Up
        </button>
        <button className="header__button" onClick={props.openModal}>
          Log In
        </button>
        {/*<button className="header__button" onClick={props.openModal}>
          + Add clothes
        </button>
        <Link to="/se_project_react/profile" className="header__profile-link">
          <p className="header__user">Kamal Ganiev</p>
          <img className="header__avatar" src={avatar} />
  </Link>*/}
      </div>
    </header>
  );
}

export default Header;
