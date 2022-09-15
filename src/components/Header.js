import "../blocks/Header.css";
import logo from "../images/Header/__logo.svg";
import avatar from "../images/Header/__avatar.jpg";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left-side">
        <img
          className="header__logo"
          src={logo}
          alt="Vector logo WTWR"
          id="HeaderLogo"
        />
        <p className="header__info">{currentDate},</p>
      </div>
      <div className="header__right-side">
        <button className="header__button">+ Add clothes</button>
        <p className="header__user">Kamal Ganiev</p>
        <img className="header__avatar" src={avatar} />
      </div>
    </header>
  );
}

export default Header;
