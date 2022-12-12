import SideBar from "./SideBar";

function Profile({ children, setIsLoggedIn, setIsModalOpen, setCurrentUser }) {
  return (
    <section className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        setIsModalOpen={setIsModalOpen}
        setCurrentUser={setCurrentUser}
      />
      {children}
    </section>
  );
}

export default Profile;
