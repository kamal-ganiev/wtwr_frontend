import avatar from "../images/Header/__avatar.jpg";
import "../blocks/profile.css";

function SideBar() {
  return (
    <div className="profile__side-bar">
      <div className="profile__side-bar-info">
        <img className="profile__avatar" src={avatar} />
        <p className="profile__name">Kamal Ganiev</p>
      </div>
    </div>
  );
}

export default SideBar;
