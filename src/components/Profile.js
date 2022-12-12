import SideBar from "./SideBar";

function Profile({ children, setIsLoggedIn }) {
  return (
    <section className="profile">
      <SideBar setIsLoggedIn={setIsLoggedIn} />
      {children}
    </section>
  );
}

export default Profile;
