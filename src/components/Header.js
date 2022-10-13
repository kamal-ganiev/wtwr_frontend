import "../blocks/Header.css";
import logo from "../images/Header/__logo.svg";
import avatar from "../images/Header/__avatar.jpg";

function Header(props) {
  return (
    <header className="header">
      <div className="header__left-side">
        <img
          className="header__logo"
          src={logo}
          alt="Vector logo WTWR"
          id="HeaderLogo"
        />
        <p className="header__info">
          {props.currentDate}, {props.currentLocation}
        </p>
      </div>
      <div className="header__right-side">
        {props.children}
        <button className="header__button" onClick={props.openModal}>
          + Add clothes
        </button>
        <p className="header__user">Kamal Ganiev</p>
        <img className="header__avatar" src={avatar} />
      </div>
    </header>
  );
}

export default Header;
